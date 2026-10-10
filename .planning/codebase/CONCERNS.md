# Technical Concerns & Codebase Risks

## 1. High Priority: Missing Authentication on Sensitive API Endpoints
- **Affected Files:**
  - [app/api/kyc/route.ts](file:///g:/voice-era-tech/app/api/kyc/route.ts) (`GET` handler)
  - [app/api/inquiries/route.ts](file:///g:/voice-era-tech/app/api/inquiries/route.ts) (`GET` handler)
  - [app/api/admin/stats/route.ts](file:///g:/voice-era-tech/app/api/admin/stats/route.ts) (`GET` handler)
  - [app/api/kyc/[id]/route.ts](file:///g:/voice-era-tech/app/api/kyc/[id]/route.ts) (`PATCH`, `DELETE` handlers)
  - [app/api/inquiries/[id]/route.ts](file:///g:/voice-era-tech/app/api/inquiries/[id]/route.ts) (`PATCH`, `DELETE` handlers)
- **Risk:** High (PII & Data Exposure). Anyone can query `/api/kyc` without credentials and dump all KYC records containing signatory passports, tax IDs, banking information, and IP network topologies. Any user can also update or delete submissions.
- **Recommended Remediation:** Implement Next.js middleware or route helper (`requireAdminAuth(req)`) verifying signed admin session tokens before serving protected data.

## 2. Insecure Admin Authentication Mechanism
- **Affected File:** [app/api/admin/login/route.ts](file:///g:/voice-era-tech/app/api/admin/login/route.ts) (Lines 21-43)
- **Issue:**
  - Session token is created by simply `Buffer.from(JSON.stringify(...)).toString("base64")` with a hardcoded static string.
  - No HMAC signature or JWT verification with a secure environment secret.
  - Cookie `vet_admin_token` is set with `httpOnly: false`, allowing client scripts access to the cookie.
  - Default fallback credentials (`admin@voiceeratech.com` / `voiceera2026`) are hardcoded if environment variables are not set.
- **Recommended Remediation:** Migrate to robust session authentication using signed JWTs (e.g. `jose`) or Auth.js, with `httpOnly: true`, `secure: true`, and strict secret verification.

## 3. Oversized Monolithic Components
- **Affected Files:**
  - [app/wholesale/page.tsx](file:///g:/voice-era-tech/app/wholesale/page.tsx) — **2,144 lines**
  - [app/admin/page.tsx](file:///g:/voice-era-tech/app/admin/page.tsx) — **1,689 lines**
  - [app/kyc/page.tsx](file:///g:/voice-era-tech/app/kyc/page.tsx) — **973 lines**
- **Issue:** High maintenance friction, poor readability, and high cognitive load. Sub-components, form steps, modals, and helper routines are tangled inside colossal single files.
- **Recommended Remediation:** Decompose into modular components:
  - Break `app/wholesale/page.tsx` into `components/wholesale/step-personal.tsx`, `step-business.tsx`, `step-compliance.tsx`, `step-docs.tsx`, and `step-progress.tsx`.
  - Break `app/admin/page.tsx` into tabs: `components/admin/inquiries-tab.tsx`, `kyc-tab.tsx`, `system-tab.tsx`, and `kyc-detail-modal.tsx`.

## 4. TypeScript Error Suppression in Production Builds
- **Affected File:** [next.config.mjs](file:///g:/voice-era-tech/next.config.mjs) (Lines 3-5)
- **Issue:** `typescript: { ignoreBuildErrors: true }` is enabled in `nextConfig`.
- **Risk:** Type regressions or subtle runtime type bugs can pass CI/CD builds silently.
- **Recommended Remediation:** Run `tsc --noEmit`, resolve all existing type anomalies across the codebase, and remove `ignoreBuildErrors: true`.

## 5. Absence of Automated Test Suites
- **Affected Area:** Entire repository.
- **Issue:** No test framework (Vitest, Jest, Playwright) or test suites exist.
- **Risk:** Code changes to complex forms (like 70-field wholesale onboarding) or database persistence can inadvertently break carrier compliance submissions without notice.
- **Recommended Remediation:** Configure Vitest for unit and integration testing, and Playwright for critical carrier onboarding flows.

## 6. Package Manager Version Drift
- **Affected Files:** `package-lock.json` and `pnpm-lock.yaml` both coexist in the repository.
- **Risk:** Inconsistent dependency resolution depending on whether developers or CI environments execute `npm install` or `pnpm install`.
- **Recommended Remediation:** Standardize on one package manager (e.g. npm) and remove the unused lockfile.
