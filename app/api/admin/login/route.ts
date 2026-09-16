import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const expectedPassword = process.env.ADMIN_PASSWORD || "voiceera2026";
    const expectedEmail = process.env.ADMIN_EMAIL || "admin@voiceeratech.com";

    const isMatch =
      String(email).trim().toLowerCase() === expectedEmail.toLowerCase() &&
      String(password).trim() === expectedPassword;

    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials. Please verify your admin username and password." },
        { status: 401 }
      );
    }

    // Generate lightweight deterministic session token for local/admin portal
    const sessionToken = Buffer.from(
      JSON.stringify({
        user: expectedEmail,
        loginAt: Date.now(),
        secret: "vet_secure_admin_session",
      })
    ).toString("base64");

    const response = NextResponse.json({
      success: true,
      user: expectedEmail,
      token: sessionToken,
      message: "Admin authentication successful",
    });

    response.cookies.set("vet_admin_token", sessionToken, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Authentication error";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
