# Debug Report: ENOENT mkdir '/var/task/data' & Hostinger Migration

## 1. Issue Summary
- **Symptom:** When submitting the KYC application form (`/wholesale` or `/kyc`), the submission fails with:
  ```
  ENOENT: no such file or directory, mkdir '/var/task/data'
  ```
- **Context:** The error occurred because the application was running in an environment where `process.cwd()` was `/var/task` (standard container/lambda working directory) and `TURSO_DATABASE_URL` was not provisioned or was empty.

## 2. Root Cause Analysis
1. In `lib/turso.ts`:
   - When `TURSO_DATABASE_URL` is empty, the database client defaults to local SQLite file storage.
   - It evaluated `dbDir` as `path.join(process.cwd(), "data")` -> `"/var/task/data"`.
   - On container/serverless systems, `/var/task` is a read-only filesystem. `fs.mkdirSync(dbDir)` failed.
   - While `mkdirSync` was inside a try/catch, the directory was never created on disk.
   - It then passed `file:/var/task/data/voice_era_tech.db` to `@libsql/client`.
   - During `client.execute()`, the internal SQLite driver attempted to create the missing parent folder `/var/task/data` and threw:
     `ENOENT: no such file or directory, mkdir '/var/task/data'`.
2. In `lib/db.ts`:
   - `UPLOADS_DIR` and `PDFS_DIR` also depended on `path.join(process.cwd(), "data")`, which could fail on hosts with read-only root paths.

## 3. Resolution Applied
1. **Dynamic Resilient Storage Directory (`resolveSafeStorageDir` in `lib/turso.ts`):**
   - Automatically probes write access to `process.cwd()/data`.
   - If writable (Hostinger VPS, local dev), uses `data/`.
   - If not writable (restricted container, read-only root), falls back immediately to `os.tmpdir()/voice-era-tech/` (guaranteed writable on Linux, Windows, Hostinger, AWS).
   - Verifies directory existence and write permission with an atomic probe before initializing `@libsql/client`.
2. **Unified Storage Directory Abstraction:**
   - Both `lib/turso.ts`, `lib/db.ts`, and `lib/pdf.ts` now consume `resolveSafeStorageDir()`.
3. **Hostinger Hosting Optimization:**
   - Enabled `output: "standalone"` in `next.config.mjs` for standalone Node.js builds.
   - Added production [server.js](file:///g:/voice-era-tech/server.js) entrypoint for Hostinger's Node.js application manager.
   - Added `data/.gitkeep`, `data/kyc-pdfs/.gitkeep`, and `data/uploads/.gitkeep` to ensure storage folders are tracked in git and present when cloned on Hostinger.
   - Created [HOSTINGER_DEPLOYMENT_GUIDE.md](file:///g:/voice-era-tech/HOSTINGER_DEPLOYMENT_GUIDE.md) with comprehensive hPanel and VPS deployment instructions.
