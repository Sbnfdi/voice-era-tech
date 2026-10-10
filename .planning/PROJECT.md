# Voice Era Tech LLC — Project Specification

## Executive Summary
**Voice Era Tech LLC** is an enterprise telecommunications platform specializing in global wholesale voice termination, SIP trunking, carrier interconnection, and regulatory compliance onboarding (FCC 499, Robocall Mitigation Database, STIR/SHAKEN, TCPA).

The platform provides a high-converting marketing presence, self-service automated KYC application workflows for wholesale telecom carriers and enterprise end-users, automated certified PDF generation (Form VET-WHL-01 / VET-KYC-01), compliance email notifications via SMTP, and a comprehensive administrative portal for review and operations.

## Domain Model & Core Entities

### 1. Inquiries (`inquiries`)
- Captures sales inquiries, contact submissions, and demo scheduling requests.
- Attributes: `id`, `name`, `email`, `phone`, `company`, `message`, `status` (`new` | `contacted` | `in_progress` | `closed`), `notes`, timestamps.

### 2. KYC & Wholesale Carrier Applications (`kyc_submissions`)
- Captures comprehensive carrier onboarding dossiers spanning 70+ regulatory and technical attributes.
- **Corporate Details:** Legal entity name, DBA, tax ID, registration number, physical address, website.
- **Signatory Verification:** Name, title, contact details, ID document number, issuing jurisdiction, expiration date.
- **Telecom Regulatory Credentials:** FCC 499 ID, FCC FRN, RMD ID, STIR/SHAKEN attestation level, ITG traceback contact.
- **Traffic Profile & Telephony:** Nature of traffic (conversational, CC/dialer, SMS), peak CPS, ACD, ASR, codecs (G.711u, G.729, etc.), interconnect protocols (SIP UDP/TCP/TLS), signaling & media IPs.
- **Banking & Trade References:** Bank details, IBAN/SWIFT, trade references.
- **Attestations & Signatures:** STIR/SHAKEN compliance, TCPA declarations, digital signature timestamp.
- **Status Workflow:** `pending` → `under_review` → `approved` | `rejected` | `info_requested`.

### 3. Mail & Audit Logs (`mail_logs`)
- Tracks outbound notification and compliance dispatch history.
- Attributes: `id`, `type`, `recipient`, `subject`, `sent_at`, `has_attachment`, `status` (`sent` | `simulated_awaiting_smtp`), `error`.

## Technical Foundation
- **Frontend / Framework:** Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Radix UI + Three.js.
- **Data Persistence:** Turso Cloud SQLite (`@libsql/client`) with local SQLite file fallback (`data/voice_era_tech.db`).
- **Document Services:** `pdf-lib` for dynamic multi-page vector compliance document rendering.
- **Messaging:** `nodemailer` with HTML transactional email templates.
- **Deployment Platform:** Vercel serverless edge runtime.
