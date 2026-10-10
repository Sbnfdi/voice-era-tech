# Integrations & External Services

## 1. Turso Cloud SQLite (`@libsql/client`)
- **Purpose:** Distributed cloud SQL storage for enterprise inquiries, KYC compliance applications, and email audit trails.
- **Connection Configuration:**
  - `TURSO_DATABASE_URL`: `libsql://<db-name>-[org].turso.io`
  - `TURSO_AUTH_TOKEN`: JWT read/write bearer token
- **Implementation:** [lib/turso.ts](file:///g:/voice-era-tech/lib/turso.ts)
- **Tables Provisioned:**
  - `inquiries`: Sales leads, contact submissions, demo requests.
  - `kyc_submissions`: Complete 70+ field regulatory KYC and wholesale carrier interconnect dossiers.
  - `mail_logs`: Audit trail for all outgoing compliance notices and customer confirmations.
- **Failover Strategy:** If `TURSO_DATABASE_URL` is unset, automatically falls back to local SQLite at `data/voice_era_tech.db` or `${os.tmpdir()}/voice_era_tech.db` in serverless runtimes.

## 2. SMTP & Email Delivery (Nodemailer)
- **Purpose:** Dispatches notification emails and attached onboarding PDF documents to compliance teams (`kyc@voiceeratech.com`, `support@voiceeratech.com`) and confirms reception to clients.
- **Configuration Variables:**
  - `SMTP_HOST`: e.g. `smtp.resend.com`, `smtp.sendgrid.net`, or corporate SMTP relay.
  - `SMTP_PORT`: Typically `587` (TLS) or `465` (SSL).
  - `SMTP_USER`: Authentication user name.
  - `SMTP_PASS`: Authentication password or API key.
  - `SMTP_FROM`: Formatted sender header (e.g., `"Voice Era Tech LLC" <no-reply@voiceeratech.com>`).
- **Implementation:** [lib/mailer.ts](file:///g:/voice-era-tech/lib/mailer.ts)
- **Fallback Simulation:** When SMTP credentials are not configured, mail operations do not crash the application; they log to the Turso `mail_logs` table with status `simulated_awaiting_smtp`.

## 3. PDF Compliance Engine (`pdf-lib`)
- **Purpose:** Generates formal compliance documents (VET-KYC-01 and VET-WHL-01) with legal headers, regulatory stamps (FCC, STIR/SHAKEN, TCPA), tabular contact grids, and digital signatures.
- **Implementation:** [lib/pdf.ts](file:///g:/voice-era-tech/lib/pdf.ts)
- **Storage & Retrieval:**
  - On Vercel / serverless: Streams directly to response buffer or caches safely in `${os.tmpdir()}/voice-era-tech/kyc-pdfs/`.
  - In local dev: Saves to `data/kyc-pdfs/`.
  - Endpoint: `GET /api/kyc/[id]/pdf` streams the PDF dynamically with Content-Disposition headers.

## 4. Vercel Hosting & Serverless Runtime
- **Platform:** Vercel Edge & Serverless Functions.
- **Deployment Guide:** [VERCEL_DEPLOYMENT_GUIDE.md](file:///g:/voice-era-tech/VERCEL_DEPLOYMENT_GUIDE.md)
- **Environment Detection:** Detects `process.env.VERCEL` to prevent writing to read-only filesystem layers.
- **Peer Dependency Compatibility:** Configured via `.npmrc` (`legacy-peer-deps=true`) to prevent npm ERESOLVE conflicts during Vercel builds.

## 5. Third-Party Messaging (WhatsApp Widget)
- **Component:** [components/landing/floating-whatsapp.tsx](file:///g:/voice-era-tech/components/landing/floating-whatsapp.tsx)
- **Purpose:** Provides floating customer support direct messaging via WhatsApp Web API (`https://wa.me/...`).
