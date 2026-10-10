import { createClient, Client } from "@libsql/client";
import os from "os";
import path from "path";
import fs from "fs";

let clientInstance: Client | null = null;
let initPromise: Promise<Client> | null = null;

/**
 * Resolves a safe, writable directory across all runtime environments
 * (Hostinger, cPanel, Docker, VPS, Linux, Windows, Vercel / serverless).
 * Probes write permissions to guarantee that directory creation never fails at runtime.
 */
export function resolveSafeStorageDir(subDirName?: string): string {
  const isServerless = Boolean(
    process.env.VERCEL ||
    process.env.AWS_LAMBDA_FUNCTION_NAME ||
    process.env.NETLIFY
  );
  const candidates: string[] = [];

  if (isServerless) {
    // In serverless environments (Vercel, AWS Lambda), /var/task is strictly read-only.
    // Immediately prioritize writable os.tmpdir().
    try {
      candidates.push(path.join(os.tmpdir(), "voice-era-tech", subDirName || ""));
    } catch {
      // Ignore
    }
    try {
      candidates.push(os.tmpdir());
    } catch {
      // Ignore
    }
  } else {
    // Candidate 1: Standard local project root data folder (Hostinger VPS, node start, local dev)
    try {
      candidates.push(path.join(process.cwd(), "data", subDirName || ""));
    } catch {
      // Ignore if process.cwd() is unavailable
    }

    // Candidate 2: OS temporary directory
    try {
      candidates.push(path.join(os.tmpdir(), "voice-era-tech", subDirName || ""));
    } catch {
      // Ignore
    }

    // Candidate 3: Raw os.tmpdir()
    try {
      candidates.push(os.tmpdir());
    } catch {
      // Ignore
    }
  }

  for (const candidate of candidates) {
    try {
      if (!fs.existsSync(candidate)) {
        fs.mkdirSync(candidate, { recursive: true });
      }
      // Probe write permissions to be 100% sure the filesystem allows file creation
      const testFile = path.join(candidate, `.probe_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`);
      fs.writeFileSync(testFile, "ok");
      fs.unlinkSync(testFile);
      return candidate;
    } catch {
      // Cannot write to candidate (e.g. read-only container root /var/task), try next
      continue;
    }
  }

  return os.tmpdir();
}

/**
 * Returns an active @libsql/client instance configured for Turso Cloud or local SQLite.
 */
export function getTursoClient(): Client {
  if (clientInstance) {
    return clientInstance;
  }

  const rawUrl = process.env.TURSO_DATABASE_URL?.trim();
  const authToken = process.env.TURSO_AUTH_TOKEN?.trim();

  let url = rawUrl;

  if (!url) {
    // Resolve a guaranteed-writable storage folder
    const dbDir = resolveSafeStorageDir();
    const localDbPath = path.join(dbDir, "voice_era_tech.db");
    url = `file:${localDbPath}`;
    console.warn(
      `[Turso] TURSO_DATABASE_URL is not set. Using verified local SQLite file: ${url}. For cloud persistence across multiple instances, configure TURSO_DATABASE_URL and TURSO_AUTH_TOKEN.`
    );
  } else {
    console.log(`[Turso] Initializing Turso client with URL: ${url.replace(/\/\/.*@/, "//***@")}`);
  }

  try {
    clientInstance = createClient({
      url,
      authToken: authToken || undefined,
    });
  } catch (clientErr) {
    console.error("[Turso] Error initializing createClient:", clientErr);
    // If remote URL failed to parse or local path had an issue, fallback to temp sqlite
    const fallbackDir = os.tmpdir();
    const fallbackDb = path.join(fallbackDir, "voice_era_tech_fallback.db");
    clientInstance = createClient({
      url: `file:${fallbackDb}`,
    });
  }

  return clientInstance;
}

/**
 * Ensures all required SQLite / Turso database tables and indexes exist.
 */
export async function getInitializedDb(): Promise<Client> {
  const client = getTursoClient();

  if (!initPromise) {
    initPromise = (async () => {
      try {
        // Table 1: Inquiries
        await client.execute(`
          CREATE TABLE IF NOT EXISTS inquiries (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            company TEXT,
            message TEXT,
            status TEXT DEFAULT 'new',
            notes TEXT,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
          );
        `);

        // Table 2: KYC Submissions
        await client.execute(`
          CREATE TABLE IF NOT EXISTS kyc_submissions (
            id TEXT PRIMARY KEY,
            reference_id TEXT NOT NULL UNIQUE,
            category TEXT DEFAULT 'end_user',
            company_name TEXT NOT NULL,
            signatory_name TEXT NOT NULL,
            signatory_email TEXT NOT NULL,
            signatory_phone TEXT,
            status TEXT DEFAULT 'pending',
            admin_notes TEXT,
            pdf_path TEXT,
            data TEXT NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
          );
        `);

        // Table 3: Mail Logs
        await client.execute(`
          CREATE TABLE IF NOT EXISTS mail_logs (
            id TEXT PRIMARY KEY,
            type TEXT NOT NULL,
            recipient TEXT NOT NULL,
            subject TEXT NOT NULL,
            sent_at TEXT NOT NULL,
            has_attachment INTEGER DEFAULT 0,
            status TEXT NOT NULL,
            error TEXT
          );
        `);

        // Indexes for high-performance lookups
        await client.execute(`
          CREATE INDEX IF NOT EXISTS idx_kyc_reference ON kyc_submissions(reference_id);
        `);
        await client.execute(`
          CREATE INDEX IF NOT EXISTS idx_kyc_status ON kyc_submissions(status);
        `);
        await client.execute(`
          CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
        `);
        await client.execute(`
          CREATE INDEX IF NOT EXISTS idx_mail_logs_sent ON mail_logs(sent_at DESC);
        `);

        return client;
      } catch (err) {
        initPromise = null; // Allow retry on failure
        clientInstance = null; // Reset client instance to allow recovery
        console.error("[Turso] Failed to initialize database schema:", err);
        throw err;
      }
    })();
  }

  return initPromise;
}
