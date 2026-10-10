# Testing Strategy & Quality Assurance

## Current Status
- **Test Framework:** None configured.
- **Unit Tests:** None present (`0` test files).
- **Integration Tests:** None present.
- **End-to-End Tests:** None present.
- **npm Scripts:** Only `"build"`, `"dev"`, `"lint"`, `"start"` exist in `package.json`. No `"test"` script.

## Verification Workflows Currently in Use
1. **TypeScript Compilation:** `next build` acts as primary verification during deployment, though `ignoreBuildErrors: true` is currently enabled in `next.config.mjs`.
2. **ESLint:** Configured via `eslint .` (`npm run lint`).
3. **Manual Verification:**
   - Admin authentication flow tested via browser.
   - Form submission and validation tested on `/wholesale` and `/kyc`.
   - Turso SQLite table creation and record insertion verified manually.
   - SMTP dispatch tested via `/api/admin/test-email`.

## Recommended Testing Architecture for Future Phases
- **Unit & Integration:** Install Vitest + React Testing Library to test:
  - Form validation logic and field formatting.
  - `lib/db.ts` CRUD operations against an in-memory SQLite database.
  - `lib/pdf.ts` document structure generation and stream output.
- **E2E Testing:** Playwright for:
  - Full carrier onboarding submission cycle on `/wholesale`.
  - Admin login, application review, status transitions, and search filters on `/admin`.
- **API Testing:** Automated testing of Next.js Route Handlers (`app/api/kyc`, `app/api/inquiries`, `app/api/admin/*`).
