# Phase 1 Plan: API Authentication Middleware & Secure Sessions

## Objective
Implement server-side administrative authentication guards to protect sensitive carrier KYC records and customer inquiries from unauthenticated public exposure, sign admin session tokens securely, and ensure full resilience on Vercel serverless deployment.

## Context & Target Environment
- **Platform:** Vercel Serverless / Edge Runtime & Node.js
- **Affected Endpoints:**
  - `GET /api/kyc` (Currently public — exposes all carrier corporate data, signer IDs, banking info, signaling IPs)
  - `GET /api/inquiries` (Currently public — exposes customer lead emails, phone numbers, and messages)
  - `GET /api/admin/stats` (Exposes backend telemetry)
  - `PATCH /api/kyc/[id]`, `DELETE /api/kyc/[id]` (Unprotected mutations)
  - `PATCH /api/inquiries/[id]`, `DELETE /api/inquiries/[id]` (Unprotected mutations)
  - `POST /api/admin/login` (Insecure unsigned base64 token and `httpOnly: false`)
- **Admin UI:**
  - `app/admin/page.tsx` (Must send authorization credentials and handle 401 redirects/re-authentication)

---

## Tasks

### Wave 1: Core Security & Server Authentication Engine
- [ ] **Task 1.1:** Create `lib/auth.ts`:
  - Implement cryptographic session token generation and verification using Web Crypto HMAC SHA-256 (supported universally in Vercel Edge & Node.js runtimes without external dependencies).
  - Implement `requireAdminAuth(req: NextRequest)` helper function that validates either:
    1. The `vet_admin_token` cookie, OR
    2. The `Authorization: Bearer <token>` header.
  - Return `{ authenticated: true, user: string }` on success, or `{ authenticated: false, response: NextResponse }` with HTTP 401 on failure.

- [ ] **Task 1.2:** Update `app/api/admin/login/route.ts`:
  - Use `createSignedAdminToken()` from `lib/auth.ts` with HMAC signature.
  - Set the `vet_admin_token` cookie with:
    - `httpOnly: true` (prevents XSS token theft)
    - `secure: process.env.NODE_ENV === "production"`
    - `sameSite: "lax"`
    - `path: "/"`
    - `maxAge: 7 * 24 * 60 * 60` (7 days)
  - Also return `{ success: true, token, user }` in JSON for client authorization headers.

### Wave 2: Endpoint Protection
- [ ] **Task 2.1:** Guard `app/api/kyc/route.ts` & `app/api/kyc/[id]/route.ts`:
  - Require admin authentication on `GET /api/kyc`.
  - Require admin authentication on `PATCH /api/kyc/[id]` and `DELETE /api/kyc/[id]`.
  - Preserve public access on `POST /api/kyc` (carriers must be able to submit their onboarding forms without login).

- [ ] **Task 2.2:** Guard `app/api/inquiries/route.ts` & `app/api/inquiries/[id]/route.ts`:
  - Require admin authentication on `GET /api/inquiries`.
  - Require admin authentication on `PATCH /api/inquiries/[id]` and `DELETE /api/inquiries/[id]`.
  - Preserve public access on `POST /api/inquiries` (customers must be able to submit inquiries).

- [ ] **Task 2.3:** Guard `app/api/admin/stats/route.ts` & `app/api/admin/test-email/route.ts`:
  - Require admin authentication on `GET /api/admin/stats`.
  - Require admin authentication on `POST /api/admin/test-email`.

### Wave 3: Admin Client Integration & Verification
- [ ] **Task 3.1:** Update `app/admin/page.tsx`:
  - Include `Authorization: Bearer <token>` header on all admin fetch requests (`/api/inquiries`, `/api/kyc`, `/api/admin/stats`, `/api/admin/test-email`, and mutation requests) as a backup to the `httpOnly` cookie.
  - On receiving HTTP 401 response, automatically clear stale session in `localStorage` and display the login form.
  - Add a logout endpoint `POST /api/admin/logout` to clear the `vet_admin_token` cookie.

- [ ] **Task 3.2:** Vercel Verification & Build:
  - Run `npm run build` to verify clean compilation across all routes.
  - Test unauthenticated requests to protected endpoints to verify HTTP 401 rejection.
  - Verify public carrier application submission (`POST /api/kyc`) remains fully functional.
