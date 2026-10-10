import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

// Secret used to sign admin session tokens
function getSigningSecret(): string {
  return (
    process.env.ADMIN_JWT_SECRET ||
    process.env.ADMIN_PASSWORD ||
    "voice_era_tech_secure_signing_salt_2026"
  );
}

export interface AdminSessionPayload {
  user: string;
  iat: number;
  exp: number;
}

/**
 * Creates a cryptographically signed HMAC SHA-256 session token.
 */
export function createSignedAdminToken(email: string, expiresInDays: number = 7): string {
  const secret = getSigningSecret();
  const now = Math.floor(Date.now() / 1000);
  const exp = now + expiresInDays * 24 * 60 * 60;

  const payload: AdminSessionPayload = {
    user: email,
    iat: now,
    exp,
  };

  const payloadJson = JSON.stringify(payload);
  const payloadB64 = Buffer.from(payloadJson).toString("base64url");
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payloadB64)
    .digest("base64url");

  return `${payloadB64}.${signature}`;
}

/**
 * Verifies a signed admin session token.
 */
export function verifyAdminToken(token: string): { valid: boolean; user?: string } {
  if (!token || typeof token !== "string") {
    return { valid: false };
  }

  const parts = token.split(".");
  if (parts.length !== 2) {
    return { valid: false };
  }

  const [payloadB64, providedSignature] = parts;
  const secret = getSigningSecret();

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payloadB64)
    .digest("base64url");

  // Constant-time comparison to prevent timing attacks
  const sigMatch =
    providedSignature.length === expectedSignature.length &&
    crypto.timingSafeEqual(
      Buffer.from(providedSignature),
      Buffer.from(expectedSignature)
    );

  if (!sigMatch) {
    return { valid: false };
  }

  try {
    const payloadJson = Buffer.from(payloadB64, "base64url").toString("utf-8");
    const payload = JSON.parse(payloadJson) as AdminSessionPayload;

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) {
      return { valid: false }; // Expired
    }

    return { valid: true, user: payload.user };
  } catch {
    return { valid: false };
  }
}

/**
 * Server-side guard to authenticate admin API requests via cookies or Authorization header.
 */
export function requireAdminAuth(req: NextRequest):
  | { authenticated: true; user: string }
  | { authenticated: false; response: NextResponse } {
  // 1. Try reading HTTP-only cookie
  let token = req.cookies.get("vet_admin_token")?.value;

  // 2. Fallback to Authorization: Bearer <token>
  if (!token) {
    const authHeader = req.headers.get("authorization") || req.headers.get("Authorization");
    if (authHeader && authHeader.toLowerCase().startsWith("bearer ")) {
      token = authHeader.substring(7).trim();
    }
  }

  if (!token) {
    return {
      authenticated: false,
      response: NextResponse.json(
        {
          success: false,
          error: "Unauthorized: Missing administrative session credentials.",
        },
        { status: 401 }
      ),
    };
  }

  const verification = verifyAdminToken(token);
  if (!verification.valid || !verification.user) {
    return {
      authenticated: false,
      response: NextResponse.json(
        {
          success: false,
          error: "Unauthorized: Invalid or expired administrative session.",
        },
        { status: 401 }
      ),
    };
  }

  return { authenticated: true, user: verification.user };
}
