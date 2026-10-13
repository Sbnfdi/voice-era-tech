# Phase 2 Plan: KYC Document Persistence & Admin Inspection Engine

## Objective
Enable full end-to-end binary document and image uploading for KYC onboarding forms (both Standard `/kyc` and Wholesale `/wholesale`), store the uploaded documents persistently in Turso Cloud SQLite / local database, and provide admin operators with interactive preview, in-browser inspection, and one-click direct download capabilities in the Admin Console (`/admin`).

---

## Current Defect Analysis
1. **Frontend Discarding File Data:**
   - In both `app/wholesale/page.tsx` and `app/kyc/page.tsx`, `handleFileChange` extracts only `file.name` string (`setFormData(prev => ({ ...prev, [field]: file.name }))`).
   - The actual file bytes/blobs are never read or transmitted; the submission payload to `POST /api/kyc` only contains filename strings (e.g., `"passport.png"`).
2. **Missing Document Table & Storage:**
   - `lib/turso.ts` and `lib/db.ts` lack a table or mechanism for persisting binary documents or base64 assets linked to a KYC submission.
   - Vercel serverless functions have ephemeral, read-only filesystems (outside `/tmp`), so binary files cannot rely strictly on local disk without cloud database persistence.
3. **Missing Secure Document Endpoint:**
   - There is no API route (e.g., `/api/kyc/[id]/document/[docKey]`) to serve or download uploaded identity documents with proper MIME headers (`image/png`, `image/jpeg`, `application/pdf`) and authentication guards.
4. **Static, Non-Interactive Admin UI:**
   - In `app/admin/page.tsx`, the KYC review modal merely prints text like `Front File: {selectedKyc.idDocFileName || "Uploaded"}` without any preview thumbnails, view triggers, or download links.

---

## Affected Routes & Target Components
- **Database Layer:**
  - `lib/turso.ts` — Create `kyc_documents` table and indexes.
  - `lib/db.ts` — Types and methods: `saveKycDocument`, `getKycDocuments`, `getKycDocument`.
- **API Endpoints:**
  - `app/api/kyc/route.ts` — Accept uploaded document payloads and persist them to `kyc_documents`.
  - `app/api/kyc/[id]/document/[docKey]/route.ts` — Authenticated document serving and download endpoint with MIME typing and `Content-Disposition`.
- **Client Forms:**
  - `app/wholesale/page.tsx` — Step 1 (ID Front/Back) and Step 4 (Incorporation, Proof of Address, ITG Screenshot) file reading with base64 conversion and thumbnail preview.
  - `app/kyc/page.tsx` — Section 5 (Incorporation, Tax W-9/W-8, Signer Photo ID) file reading with base64 conversion and preview.
- **Admin Console:**
  - `app/admin/page.tsx` — Interactive document cards with image preview modal / lightbox, PDF new tab viewer, and one-click download buttons.

---

## Implementation Tasks

### Wave 1: Database Storage Schema & Data Layer
- [x] **Task 1.1:** Add `kyc_documents` table in `lib/turso.ts`:
  - Columns:
    - `id` (TEXT PRIMARY KEY)
    - `kyc_id` (TEXT NOT NULL, FOREIGN KEY referencing `kyc_submissions(id)`)
    - `doc_key` (TEXT NOT NULL) — e.g., `idDocFront`, `idDocBack`, `incorporationDoc`, `taxDoc`, `signerIdDoc`, `proofOfAddressDoc`, `itgScreenshotDoc`
    - `file_name` (TEXT NOT NULL)
    - `file_type` (TEXT NOT NULL) — e.g., `image/jpeg`, `image/png`, `application/pdf`
    - `file_size` (INTEGER NOT NULL)
    - `data` (TEXT NOT NULL) — Base64 data string
    - `created_at` (TEXT NOT NULL)
  - Create index on `(kyc_id)` and `(kyc_id, doc_key)`.
- [x] **Task 1.2:** Add document models and query methods in `lib/db.ts`:
  - `KycDocument` interface (with full base64 data) and `KycDocumentMeta` interface (metadata only for fast list retrieval).
  - `saveKycDocument({ kycId, docKey, fileName, fileType, fileSize, data })`.
  - `getKycDocuments(kycId)` — Returns list of attached document metadata for a submission.
  - `getKycDocument(kycId, docKey)` — Fetches full document record with binary/base64 payload.

### Wave 2: API Endpoints (Upload Processing & Secure Serving)
- [x] **Task 2.1:** Update `POST /api/kyc` in `app/api/kyc/route.ts`:
  - Process optional `uploadedDocuments` dictionary containing `{ docKey: { name, type, size, data } }`.
  - Validate file size (max 8MB per file) and allowed MIME types (`image/png`, `image/jpeg`, `image/webp`, `application/pdf`).
  - Persist documents via `saveKycDocument` immediately following KYC submission insertion.
- [x] **Task 2.2:** Create `app/api/kyc/[id]/document/[docKey]/route.ts`:
  - Authenticate request using `requireAdminAuth(req)` (checking `vet_admin_token` cookie or Bearer token, or `token` query parameter for direct browser tab/download access).
  - Retrieve document via `getKycDocument(id, docKey)`.
  - Return binary `NextResponse(Uint8Array)` with:
    - `Content-Type: doc.file_type`
    - `Content-Disposition`: `inline; filename="..."` (default) or `attachment; filename="..."` (when `?download=1`).
    - Cache headers: `private, no-cache`.

### Wave 3: Client Form Integration (Wholesale & Standard KYC)
- [x] **Task 3.1:** Update `app/wholesale/page.tsx`:
  - Enhance `handleFileChange` to use `FileReader.readAsDataURL` to capture file data, MIME type, size, and filename.
  - Add client validation for max size (8MB) and format (PNG, JPG, WEBP, PDF).
  - Show upload preview status (thumbnail thumbnail for images, file badge for PDF, file size in KB/MB, and remove/replace button).
  - Include `uploadedDocuments` object in `POST /api/kyc` payload.
- [x] **Task 3.2:** Update `app/kyc/page.tsx`:
  - Enhance Section 5 file inputs with `FileReader.readAsDataURL` and preview state.
  - Include `uploadedDocuments` object in `POST /api/kyc` payload.

### Wave 4: Admin Console Inspection & Download Experience
- [x] **Task 4.1:** Upgrade KYC detail modal in `app/admin/page.tsx`:
  - For Step 1 Identity Documents & Step 4 Verification Documents (Wholesale), and Section 5 Documents (End-User):
    - Replace plain text filenames with interactive Document Action Cards.
    - Display document name, size, type badge, and visual status ("Attached & Verified" vs. "Legacy / Not Attached").
    - Add **"View"** button:
      - For images: opens full-resolution in an integrated Image Lightbox Modal with zoom and rotate controls, or opens in new browser tab.
      - For PDFs: opens directly in new browser tab with native PDF reader.
    - Add **"Download"** button: triggers direct file download via `/api/kyc/[id]/document/[docKey]?download=1`.
- [x] **Task 4.2:** Build Admin Image Lightbox / Modal:
  - Add clean, dark-themed image viewer with backdrop blur, pan/zoom capability, close button (Esc shortcut), and direct download button.

### Wave 5: Verification & Quality Assurance
- [x] **Task 5.1:** End-to-end testing:
  - Submit test application on `/kyc` with JPG, PNG, and PDF files.
  - Submit test application on `/wholesale` with ID front/back and verification docs.
  - Log in to `/admin`, open both applications, inspect document cards.
  - Verify "View" opens full image in lightbox / new tab.
  - Verify "Download" downloads original file with proper name and extension.
  - Verify legacy KYC records gracefully display "File not attached (legacy record)".
- [x] **Task 5.2:** Build verification:
  - Run `npm run build` to confirm zero build errors or route conflicts.

---

## Verification Criteria
- [x] User uploading PNG/JPG on `/kyc` or `/wholesale` has file persisted in database.
- [x] Admin panel shows document thumbnail/badge, file size, and interactive action buttons.
- [x] Admin can click "View" to inspect the image/PDF directly in browser without downloading.
- [x] Admin can click "Download" to save the file with its original name and MIME type.
- [x] Unauthenticated requests to `/api/kyc/[id]/document/[docKey]` are rejected with 401.
