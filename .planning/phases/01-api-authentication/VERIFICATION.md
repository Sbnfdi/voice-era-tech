# Phase 1 Verification: API Authentication Middleware & Secure Sessions

## Overview
Phase 1 delivers server-side administrative security guards and HMAC session tokens across all sensitive endpoints while preserving public carrier onboarding submission and customer contact forms on Vercel and Node.js runtimes.

## Verification Checklist

### 1. Cryptographic Token Engine (`lib/auth.ts`)
- [x] HMAC SHA-256 token generation (`createSignedAdminToken`).
- [x] Constant-time signature comparison using `crypto.timingSafeEqual` to prevent timing attacks.
- [x] Expiration check (7-day default).
- [x] Universal compatibility with Vercel Serverless Functions and Edge runtime.

### 2. Guarded Administrative Endpoints
- [x] `GET /api/kyc`: Returns HTTP 401 Unauthorized for unauthenticated requests.
- [x] `GET /api/kyc/[id]`: Returns HTTP 401 Unauthorized for unauthenticated requests.
- [x] `PATCH /api/kyc/[id]`: Returns HTTP 401 Unauthorized for unauthenticated requests.
- [x] `DELETE /api/kyc/[id]`: Returns HTTP 401 Unauthorized for unauthenticated requests.
- [x] `GET /api/inquiries`: Returns HTTP 401 Unauthorized for unauthenticated requests.
- [x] `PATCH /api/inquiries/[id]`: Returns HTTP 401 Unauthorized for unauthenticated requests.
- [x] `DELETE /api/inquiries/[id]`: Returns HTTP 401 Unauthorized for unauthenticated requests.
- [x] `GET /api/admin/stats`: Returns HTTP 401 Unauthorized for unauthenticated requests.
- [x] `POST /api/admin/test-email`: Returns HTTP 401 Unauthorized for unauthenticated requests.

### 3. Preserved Public Endpoints
- [x] `POST /api/kyc`: Publicly accessible (carriers can submit applications without an admin session).
- [x] `POST /api/inquiries`: Publicly accessible (leads can submit inquiries without an admin session).
- [x] `GET /api/kyc/[id]/pdf`: Generates / streams PDF document dynamically.

### 4. Administrative Session & UI Integration (`app/admin/page.tsx`)
- [x] `POST /api/admin/login`: Issues HMAC token and sets `httpOnly`, `sameSite: "lax"`, and `secure` cookie.
- [x] `POST /api/admin/logout`: Clears the session cookie.
- [x] Admin console passes `Authorization: Bearer <token>` alongside cookies.
- [x] Automatic session expiration handling (clears `localStorage` and redirects to login on HTTP 401).
