# Deploying Voice Era Tech to Vercel with Turso SQLite

This guide covers everything you need to deploy your project to **Vercel** with full persistence on **Turso Cloud SQLite**.

---

## 1. Prerequisites
- A [Vercel](https://vercel.com) account.
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket).
- Your Turso database credentials (already provisioned and tested):
  - **Database URL**: `libsql://voiceera-abdullah1.aws-ap-south-1.turso.io`
  - **Auth Token**: `eyJhbGciOiJFZERTQSIsInR5cCI...` (Read/Write Token)

---

## 2. Deploy via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Click **"Add New..."** > **"Project"**.
3. Import your Git repository (`voice-era-tech`).
4. Select Framework Preset: **Next.js** (detected automatically).
5. Open the **Environment Variables** accordion and add the following variables:

| Key | Value / Description | Required |
|---|---|---|
| `TURSO_DATABASE_URL` | `libsql://voiceera-abdullah1.aws-ap-south-1.turso.io` | **Yes** |
| `TURSO_AUTH_TOKEN` | *[Your Turso JWT auth token]* | **Yes** |
| `ADMIN_EMAIL` | `admin@voiceeratech.com` (or your desired admin email) | Optional |
| `ADMIN_PASSWORD` | `voiceera2026` (or your desired secure admin password) | Optional |
| `ADMIN_JWT_SECRET` | *[Custom secret string for cryptographic token signing]* | Optional |
| `SUPPORT_EMAIL` | `support@voiceeratech.com` | Optional |
| `KYC_EMAIL` | `kyc@voiceeratech.com` | Optional |
| `NEXT_PUBLIC_APP_URL`| `https://your-domain.vercel.app` | Optional |
| `SMTP_HOST` | *(e.g. `smtp.resend.com` or `smtp.sendgrid.net`)* | Optional |
| `SMTP_PORT` | `587` | Optional |
| `SMTP_USER` | *(Your SMTP username)* | Optional |
| `SMTP_PASS` | *(Your SMTP password)* | Optional |
| `SMTP_FROM` | `"Voice Era Tech LLC" <no-reply@voiceeratech.com>` | Optional |

6. Click **Deploy**. Vercel will install dependencies, run `npm run build`, and deploy your application worldwide.

---

## 3. Alternative: Deploy via Vercel CLI

If you prefer deploying via terminal:
```bash
# 1. Install Vercel CLI (if not installed)
npm i -g vercel

# 2. Link & Deploy
vercel

# 3. Add Environment Variables via CLI
vercel env add TURSO_DATABASE_URL production
vercel env add TURSO_AUTH_TOKEN production

# 4. Trigger production deployment
vercel --prod
```

---

## 4. What Was Implemented & Fixed
1. **Turso Cloud SQLite Integration (`lib/turso.ts`)**:
   - Uses `@libsql/client` with zero latency pooling and multi-region resilience.
   - Automatically handles table creation and index provisioning (`inquiries`, `kyc_submissions`, `mail_logs`).
   - Supports local development fallback (`data/voice_era_tech.db`) when remote credentials are not set.
2. **Database Persistence Layer (`lib/db.ts`)**:
   - Replaced ephemeral filesystem JSON storage (`inquiries.json`, `kyc.json`) with live Turso database queries.
   - Preserves all 70+ fields of wholesale and carrier onboarding KYC records with zero data loss.
   - Added automatic legacy data migration if old JSON files are ever found.
3. **Serverless-Safe PDF Generation (`lib/pdf.ts`)**:
   - In serverless runtimes (like Vercel), the root folder is read-only. PDF disk caching now safely targets `os.tmpdir()` with try-catch failovers and dynamic stream generation.
4. **Resilient Dependency Configuration (`.npmrc` & `package.json`)**:
   - Removed conflicting peer dependencies (unused `expo` / `react-native` artifacts) that caused npm ERESOLVE failures.
   - Added `.npmrc` with `legacy-peer-deps=true` for clean Vercel deployments.
5. **Live Verification**:
   - Connected directly to `voiceera-abdullah1.aws-ap-south-1.turso.io`.
   - Verified schema creation, record insertions, reads, updates, and deletes.
   - Production build `next build` executed with 0 errors.
