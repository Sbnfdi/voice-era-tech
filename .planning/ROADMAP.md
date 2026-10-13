# Project Roadmap & Milestones

## Completed Baseline: Milestone 1 — Core Platform & Carrier Onboarding
- **Delivered:** Next.js 16 web application with interactive 3D landing page, wholesale carrier onboarding wizard, KYC document generation engine via `pdf-lib`, Turso SQLite cloud persistence layer, nodemailer transactional email dispatcher, and administration console.

---

## Active & Upcoming Milestones

### Milestone 2: Security Hardening & API Protection (Priority: Immediate)
- **Goal:** Close public endpoint vulnerabilities and protect sensitive carrier PII and KYC dossiers.
- **Phases:**
  - **Phase 1: API Authentication Middleware & Secure Sessions** [Completed]
    - [x] Implemented cryptographically signed session tokens (HMAC SHA-256 via `lib/auth.ts`) with secure, `httpOnly: true`, `SameSite: "lax"` cookies.
    - [x] Created server-side route authentication guard (`requireAdminAuth(req)` in `lib/auth.ts`).
    - [x] Protected `GET /api/kyc`, `GET /api/inquiries`, `GET /api/admin/stats`, and all `PATCH`/`DELETE` endpoints.
    - [x] Added `POST /api/admin/logout` and updated admin console with bearer token transmission and 401 handling.
  - **Phase 2: KYC Document Persistence & Admin Inspection Engine** [Completed]
    - [x] Added `kyc_documents` table to Turso SQLite schema and `lib/db.ts` document handlers.
    - [x] Updated `app/wholesale/page.tsx` and `app/kyc/page.tsx` to read files as Base64 and send in submission payload.
    - [x] Created authenticated `GET /api/kyc/[id]/document/[docKey]` endpoint for viewing and downloading files.
    - [x] Upgraded Admin Console with interactive document cards, image lightbox modal with zoom/rotate, and one-click download buttons.
  - **Phase 3: Input Sanitization & Rate Limiting**
    - Apply Zod validation schemas across all API route handlers (`/api/inquiries`, `/api/kyc`).
    - Add basic IP-based rate limiting on public inquiry and application endpoints to mitigate spam and abuse.

### Milestone 3: Component Architecture Modularization (Priority: High)
- **Goal:** Refactor massive monolithic page files into modular, testable components.
- **Phases:**
  - **Phase 4: Wholesale Form Decomposition (`app/wholesale/page.tsx`)**
    - Extract Step 1 (Signatory), Step 2 (Company & Regulatory), Step 3 (Technical & Banking), Step 4 (Docs & Attestation) into standalone components under `components/wholesale/`.
    - Extract form state into a dedicated custom hook or context provider (`useWholesaleForm`).
  - **Phase 5: Admin Backoffice Decomposition (`app/admin/page.tsx`)**
    - Decompose inquiries list, KYC submissions grid, system telemetry tab, and KYC review modal into dedicated components under `components/admin/`.

### Milestone 4: Type Safety & Automated Testing (Priority: Medium)
- **Goal:** Establish a robust automated testing foundation and remove build error bypasses.
- **Phases:**
  - **Phase 5: Strict Type Checking & Clean Build**
    - Fix all TypeScript anomalies and remove `typescript.ignoreBuildErrors: true` from `next.config.mjs`.
    - Standardize dependency lockfiles (remove `pnpm-lock.yaml`, retain `package-lock.json`).
  - **Phase 6: Test Suite Setup**
    - Configure Vitest with unit tests for `lib/db.ts`, `lib/pdf.ts`, and `lib/mailer.ts`.
    - Configure Playwright with end-to-end smoke tests for form submission and admin login.
