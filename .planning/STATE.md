# Project State & Memory

## Project Overview
- **Project:** Voice Era Tech LLC
- **Status:** Brownfield Onboarding Completed
- **Architecture:** Next.js 16 (App Router) + React 19 + TypeScript + Turso SQLite + pdf-lib + Nodemailer
- **Current Milestone:** Ready for Milestone 2 (Security Hardening & API Protection)

## Key Technical Decisions
1. **Turso Cloud SQLite (`@libsql/client`):** Adopted for distributed, low-latency relational storage with offline fallback (`data/voice_era_tech.db`).
2. **Serverless Filesystem Awareness:** File generation (`lib/pdf.ts`) and uploads utilize `os.tmpdir()` in serverless runtimes (Vercel) to respect read-only constraints.
3. **pdf-lib for Dynamic Document Generation:** Enables server-side rendering of standardized compliance PDF forms (Forms VET-WHL-01 & VET-KYC-01) with regulatory stamps without external headless browser dependencies.
4. **Dual-Mode Email Dispatch:** Automatic graceful fallback from live SMTP transport to internal audit log records (`mail_logs`) when SMTP credentials are not provisioned.

## Current Health & Metrics
- **Build Status:** Verified passing `next build` (with `ignoreBuildErrors: true`).
- **Codebase Map:** Fully documented in `.planning/codebase/`.
- **Target Hosting:** Vercel Serverless (with Turso Cloud persistence & dynamic safe storage fallbacks).
- **Security Hardening (Phase 1):** Completed. Protected endpoints (`/api/kyc`, `/api/inquiries`, `/api/admin/stats`), implemented signed HMAC tokens with `httpOnly` cookies.
- **Admin Authentication:** Live with `requireAdminAuth(req)`, `POST /api/admin/logout`, and Bearer header support.
- **KYC Document Persistence (Phase 2):** Completed & Verified. Persistent binary asset storage in Turso SQLite (`kyc_documents`), secure streaming & download endpoint `/api/kyc/[id]/document/[docKey]`, interactive lightbox with pan/zoom/rotate in `/admin`.

## Next Action
- Initiate **Phase 3: Input Sanitization & Rate Limiting** or proceed with Milestone 3 (Component Modularization).
