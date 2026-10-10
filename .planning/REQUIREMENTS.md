# Project Requirements & Capabilities

## Functional Capabilities

### 1. Marketing & Lead Generation
- [x] High-performance landing page with interactive 3D WebGL visuals (`components/landing/`).
- [x] Interactive sections: Features, How It Works, Telecom Infrastructure, Metrics, Security & Compliance, About Us, Pricing.
- [x] Contact modal and Book Demo dialog with form validation.
- [x] Floating customer support WhatsApp engagement widget.
- [x] Legal pages for Privacy Policy (`/privacy`) and Terms of Service (`/terms`).

### 2. Carrier & Wholesale Onboarding
- [x] Standard Carrier KYC application form (`/kyc`).
- [x] Comprehensive 4-Step Wholesale Carrier Interconnect form (`/wholesale`).
  - [x] Step 1: Signatory & Identification document details.
  - [x] Step 2: Corporate info, FCC / RMD / ITG regulatory credentials, and traffic profile.
  - [x] Step 3: Operational contacts (NOC, Billing, Rates), banking coordinates, trade references, and anti-fraud attestations.
  - [x] Step 4: Verification document upload and binding digital signature.
- [x] Automated generation of certified PDF onboarding dossiers (Forms VET-WHL-01 and VET-KYC-01) with regulatory stamps.
- [x] Instant download of generated onboarding PDF upon submission.
- [x] Transactional email confirmation to signatory and dispatch to compliance inboxes.

### 3. Administrative Operations & Management
- [x] Secure admin login screen (`/admin`).
- [x] Real-time inquiry pipeline tracker with status management (`new`, `contacted`, `in_progress`, `closed`).
- [x] KYC submission inspection console with status workflow (`pending`, `under_review`, `approved`, `rejected`, `info_requested`).
- [x] Internal admin notes on inquiries and KYC submissions.
- [x] Live PDF preview and direct download of carrier applications.
- [x] System telemetry overview (database type, connection status, SMTP readiness, submission counters).
- [x] Built-in SMTP test utility.

## Non-Functional & Security Requirements

### Security & Access Control
- [x] **SEC-01:** Secure protected API endpoints (`/api/kyc`, `/api/inquiries`, `/api/admin/*`) with proper authentication middleware.
- [x] **SEC-02:** Replace base64 session token with cryptographically signed tokens (HMAC SHA-256 via `lib/auth.ts`) and `httpOnly: true` cookies.
- [ ] **SEC-03:** Enforce environment variable presence for admin credentials in production (prevent default credentials).

### Architecture & Maintainability
- [ ] **ARCH-01:** Decompose monolithic page components (`/wholesale` 2,144 lines, `/admin` 1,689 lines, `/kyc` 973 lines) into modular sub-components.
- [ ] **ARCH-02:** Eliminate `typescript.ignoreBuildErrors: true` in `next.config.mjs` and ensure strict type verification passes cleanly.
- [ ] **ARCH-03:** Standardize package management on a single lockfile.

### Quality Assurance & Testing
- [ ] **TEST-01:** Configure automated test runner (Vitest) for backend services (`lib/db.ts`, `lib/pdf.ts`, `lib/mailer.ts`).
- [ ] **TEST-02:** Establish Playwright end-to-end tests for carrier application submission and admin approval workflows.
