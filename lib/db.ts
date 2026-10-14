import path from "path";
import os from "os";
import fs from "fs/promises";
import { getInitializedDb, resolveSafeStorageDir } from "./turso";

// Safe paths for storage across local dev, Hostinger VPS/cPanel, and serverless runtimes
const DATA_DIR = resolveSafeStorageDir();
const UPLOADS_DIR = resolveSafeStorageDir("uploads");
const PDFS_DIR = resolveSafeStorageDir("kyc-pdfs");

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  status: "new" | "contacted" | "in_progress" | "closed";
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface KycSubmission {
  id: string;
  referenceId: string;
  category?: "end_user" | "wholesaler";

  // Company Information (Common & Wholesale)
  companyName: string;
  dba?: string;
  registrationNumber: string;
  taxId: string;
  country: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  website: string;

  // Wholesale STEP 1: Personal Information
  signatoryName: string;
  signatoryTitle: string;
  signatoryEmail: string;
  signatoryPhone: string;
  signatoryIdNumber?: string;
  signatoryNationality?: string;
  signatoryDob?: string;
  idDocType?: string;
  idDocNumber?: string;
  idDocIssuingCountry?: string;
  idDocExpiryDate?: string;
  idDocFileName?: string;
  idDocBackFileName?: string;

  // Wholesale STEP 2: Business Information
  incorporationDate?: string;
  incorporationJurisdiction?: string;
  providerType?: string;
  yearsInOperation?: string;
  // FCC / Regulatory IDs
  fcc499Id?: string;
  fccFrn?: string;
  rmdId?: string;
  stateTelecomLicense?: string;
  // STIR/SHAKEN
  stirShakenStatus?: string;
  ocnSpcTokenIssuer?: string;
  didAttestationCapability?: string;
  // Tracebacks
  itgRegistered?: string;
  itgEscalationContact?: string;
  tracebackSlaHours?: string;
  fccHistoryOrCitations?: string;
  fccHistoryDetails?: string;
  // Traffic Profile
  trafficProfileNature?: string;
  estimatedDailyMinutes?: string;
  peakCps?: string;
  acdSeconds?: string;
  targetAsr?: string;
  operationalAddress?: string;
  // Services & Capacity
  interconnectProtocols?: string[];

  // Technical & Operational Contacts
  nocName: string;
  nocEmail: string;
  nocPhone: string;
  nocEscalation?: string;
  billingName: string;
  billingEmail: string;
  billingPhone: string;
  billingInvoiceEmail?: string;
  billingAddress?: string;

  // Wholesale STEP 3: Additional Contacts & Compliance
  primaryContactName?: string;
  primaryContactTitle?: string;
  primaryContactEmail?: string;
  primaryContactPhone?: string;
  ratesContactName?: string;
  ratesContactEmail?: string;
  ratesContactPhone?: string;
  // Banking
  bankName?: string;
  bankCountry?: string;
  beneficiaryName?: string;
  accountNumberIban?: string;
  routingSwiftBic?: string;
  paymentTerms?: string;
  // Trade References
  tradeRef1Company?: string;
  tradeRef1Contact?: string;
  tradeRef1Email?: string;
  tradeRef1Phone?: string;
  tradeRef1Relation?: string;
  tradeRef2Company?: string;
  tradeRef2Contact?: string;
  tradeRef2Email?: string;
  tradeRef2Phone?: string;
  tradeRef2Relation?: string;
  // Compliance Declarations
  tsrTcpaCompliant?: boolean;
  antiSpoofingCompliant?: boolean;
  knowYourCustomerChainCompliant?: boolean;
  zeroToleranceAgreed?: boolean;
  // Fraud / Traceback Details
  fraudEmergencyEmail?: string;
  fraudEmergencyPhone?: string;
  immediateSuspensionConsent?: boolean;

  // Traffic & Telephony Profile (Standard & Wholesale)
  servicesRequested: string[];
  targetCountries: string;
  estimatedMonthlyMinutes: string;
  concurrentChannels: string;
  trafficType: string;

  // Interconnect Technical Details
  signalingIps: string;
  mediaIps?: string;
  codecs: string;

  // Wholesale STEP 4: Verification Documents
  documents?: {
    incorporationDocName?: string;
    incorporationDocPath?: string;
    taxDocName?: string;
    taxDocPath?: string;
    signerIdDocName?: string;
    signerIdDocPath?: string;
    proofOfAddressDocName?: string;
    proofOfAddressDocPath?: string;
    itgScreenshotDocName?: string;
    itgScreenshotDocPath?: string;
  };
  proofOfAddressDocName?: string;
  itgScreenshotDocName?: string;
  termsAgreed?: boolean;
  dataProcessingConsent?: boolean;

  pdfPath?: string;

  // Attestations
  stirShakenAgreed: boolean;
  tcpaAgreed: boolean;
  accuracyAgreed: boolean;
  digitalSignature: string;
  signatureDate: string;

  // Review Status
  status: "pending" | "under_review" | "approved" | "rejected" | "info_requested";
  adminNotes?: string;
  attachedDocuments?: KycDocumentMeta[];
  createdAt: string;
  updatedAt: string;
}

export interface KycDocumentMeta {
  id: string;
  kycId: string;
  docKey: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  createdAt: string;
}

export interface KycDocument extends KycDocumentMeta {
  data: string; // Base64 Data URL
}

export interface MailLog {
  id: string;
  type: "inquiry" | "kyc";
  to: string;
  subject: string;
  sentAt: string;
  hasAttachment: boolean;
  status: "sent" | "simulated_awaiting_smtp";
  error?: string;
}

// Track legacy file migration once
let migratedLegacyFiles = false;

async function checkAndMigrateLegacyJson() {
  if (migratedLegacyFiles) return;
  migratedLegacyFiles = true;

  try {
    const db = await getInitializedDb();

    // Migrate inquiries.json if present
    const inquiriesFile = path.join(DATA_DIR, "inquiries.json");
    try {
      const inqData = await fs.readFile(inquiriesFile, "utf-8");
      const list = JSON.parse(inqData);
      if (Array.isArray(list) && list.length > 0) {
        for (const item of list) {
          await db.execute({
            sql: `INSERT OR IGNORE INTO inquiries (id, name, email, phone, company, message, status, notes, created_at, updated_at)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            args: [
              item.id,
              item.name,
              item.email,
              item.phone || "",
              item.company || "",
              item.message || "",
              item.status || "new",
              item.notes || null,
              item.createdAt || new Date().toISOString(),
              item.updatedAt || new Date().toISOString(),
            ],
          });
        }
      }
    } catch {
      // inquiries.json not found or empty
    }

    // Migrate kyc.json if present
    const kycFile = path.join(DATA_DIR, "kyc.json");
    try {
      const kycData = await fs.readFile(kycFile, "utf-8");
      const list = JSON.parse(kycData);
      if (Array.isArray(list) && list.length > 0) {
        for (const item of list) {
          await db.execute({
            sql: `INSERT OR IGNORE INTO kyc_submissions (
              id, reference_id, category, company_name, signatory_name, signatory_email,
              signatory_phone, status, admin_notes, pdf_path, data, created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            args: [
              item.id,
              item.referenceId,
              item.category || "end_user",
              item.companyName || "",
              item.signatoryName || "",
              item.signatoryEmail || "",
              item.signatoryPhone || null,
              item.status || "pending",
              item.adminNotes || null,
              item.pdfPath || null,
              JSON.stringify(item),
              item.createdAt || new Date().toISOString(),
              item.updatedAt || new Date().toISOString(),
            ],
          });
        }
      }
    } catch {
      // kyc.json not found or empty
    }
  } catch (err) {
    console.error("[Turso] Note on legacy JSON migration:", err);
  }
}

// ==========================================
// INQUIRIES
// ==========================================

export async function getInquiries(): Promise<Inquiry[]> {
  const db = await getInitializedDb();
  await checkAndMigrateLegacyJson();

  const res = await db.execute("SELECT * FROM inquiries ORDER BY created_at DESC");
  return res.rows.map((row) => ({
    id: String(row.id),
    name: String(row.name || ""),
    email: String(row.email || ""),
    phone: String(row.phone || ""),
    company: String(row.company || ""),
    message: String(row.message || ""),
    status: (row.status as Inquiry["status"]) || "new",
    notes: row.notes ? String(row.notes) : undefined,
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  }));
}

export async function createInquiry(
  data: Omit<Inquiry, "id" | "status" | "createdAt" | "updatedAt">
): Promise<Inquiry> {
  const db = await getInitializedDb();
  const now = new Date().toISOString();
  const id = `INQ-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

  const newInquiry: Inquiry = {
    ...data,
    id,
    status: "new",
    createdAt: now,
    updatedAt: now,
  };

  await db.execute({
    sql: `INSERT INTO inquiries (id, name, email, phone, company, message, status, notes, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      newInquiry.id,
      newInquiry.name,
      newInquiry.email,
      newInquiry.phone || "",
      newInquiry.company || "",
      newInquiry.message,
      newInquiry.status,
      newInquiry.notes || null,
      newInquiry.createdAt,
      newInquiry.updatedAt,
    ],
  });

  return newInquiry;
}

export async function updateInquiry(
  id: string,
  updates: Partial<Pick<Inquiry, "status" | "notes">>
): Promise<Inquiry | null> {
  const db = await getInitializedDb();
  const now = new Date().toISOString();

  const existingRes = await db.execute({
    sql: "SELECT * FROM inquiries WHERE id = ? LIMIT 1",
    args: [id],
  });

  if (existingRes.rows.length === 0) {
    return null;
  }

  const current = existingRes.rows[0];
  const updatedStatus = updates.status !== undefined ? updates.status : current.status;
  const updatedNotes = updates.notes !== undefined ? updates.notes : current.notes;

  await db.execute({
    sql: `UPDATE inquiries SET status = ?, notes = ?, updated_at = ? WHERE id = ?`,
    args: [updatedStatus, updatedNotes, now, id],
  });

  return {
    id: String(current.id),
    name: String(current.name || ""),
    email: String(current.email || ""),
    phone: String(current.phone || ""),
    company: String(current.company || ""),
    message: String(current.message || ""),
    status: (updatedStatus as Inquiry["status"]) || "new",
    notes: updatedNotes ? String(updatedNotes) : undefined,
    createdAt: String(current.created_at),
    updatedAt: now,
  };
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const db = await getInitializedDb();
  const res = await db.execute({
    sql: "DELETE FROM inquiries WHERE id = ?",
    args: [id],
  });
  return res.rowsAffected > 0;
}

// ==========================================
// KYC SUBMISSIONS
// ==========================================

export async function getKycList(): Promise<KycSubmission[]> {
  const db = await getInitializedDb();
  await checkAndMigrateLegacyJson();

  // Fetch all document metadata in a single indexed query
  const docsByKyc = new Map<string, KycDocumentMeta[]>();
  try {
    const docsRes = await db.execute(
      "SELECT id, kyc_id, doc_key, file_name, file_type, file_size, created_at FROM kyc_documents ORDER BY created_at ASC"
    );
    for (const d of docsRes.rows) {
      const kycId = String(d.kyc_id);
      const list = docsByKyc.get(kycId) || [];
      list.push({
        id: String(d.id),
        kycId,
        docKey: String(d.doc_key),
        fileName: String(d.file_name),
        fileType: String(d.file_type),
        fileSize: Number(d.file_size),
        createdAt: String(d.created_at),
      });
      docsByKyc.set(kycId, list);
    }
  } catch (docErr) {
    console.warn("[Turso] Could not fetch attached documents meta:", docErr);
  }

  const res = await db.execute("SELECT * FROM kyc_submissions ORDER BY created_at DESC");
  return res.rows.map((row) => {
    const rowId = String(row.id);
    const attached = docsByKyc.get(rowId) || [];
    try {
      const parsed = JSON.parse(String(row.data)) as KycSubmission;
      return {
        ...parsed,
        id: rowId,
        referenceId: String(row.reference_id),
        status: (row.status as KycSubmission["status"]) || parsed.status || "pending",
        adminNotes: row.admin_notes !== null ? String(row.admin_notes) : parsed.adminNotes,
        pdfPath: row.pdf_path !== null ? String(row.pdf_path) : parsed.pdfPath,
        attachedDocuments: attached.length > 0 ? attached : parsed.attachedDocuments,
        createdAt: String(row.created_at || parsed.createdAt),
        updatedAt: String(row.updated_at || parsed.updatedAt),
      };
    } catch {
      return {
        id: rowId,
        referenceId: String(row.reference_id),
        category: (row.category as any) || "end_user",
        companyName: String(row.company_name || ""),
        signatoryName: String(row.signatory_name || ""),
        signatoryEmail: String(row.signatory_email || ""),
        signatoryPhone: String(row.signatory_phone || ""),
        status: (row.status as KycSubmission["status"]) || "pending",
        adminNotes: row.admin_notes ? String(row.admin_notes) : undefined,
        pdfPath: row.pdf_path ? String(row.pdf_path) : undefined,
        attachedDocuments: attached,
        createdAt: String(row.created_at),
        updatedAt: String(row.updated_at),
      } as unknown as KycSubmission;
    }
  });
}

export async function getKycById(id: string): Promise<KycSubmission | null> {
  const db = await getInitializedDb();
  const res = await db.execute({
    sql: "SELECT * FROM kyc_submissions WHERE id = ? OR reference_id = ? LIMIT 1",
    args: [id, id],
  });

  if (res.rows.length === 0) return null;
  const row = res.rows[0];
  const rowId = String(row.id);
  const attached = await getKycDocumentsMeta(rowId);

  try {
    const parsed = JSON.parse(String(row.data)) as KycSubmission;
    return {
      ...parsed,
      id: rowId,
      referenceId: String(row.reference_id),
      status: (row.status as KycSubmission["status"]) || parsed.status || "pending",
      adminNotes: row.admin_notes !== null ? String(row.admin_notes) : parsed.adminNotes,
      pdfPath: row.pdf_path !== null ? String(row.pdf_path) : parsed.pdfPath,
      attachedDocuments: attached.length > 0 ? attached : parsed.attachedDocuments,
      createdAt: String(row.created_at || parsed.createdAt),
      updatedAt: String(row.updated_at || parsed.updatedAt),
    };
  } catch {
    return null;
  }
}

export async function createKyc(
  data: Omit<KycSubmission, "id" | "referenceId" | "status" | "createdAt" | "updatedAt">
): Promise<KycSubmission> {
  const db = await getInitializedDb();
  const now = new Date().toISOString();
  const timestamp = Date.now().toString().slice(-5);
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const prefix = data.category === "wholesaler" ? "VET-WHL" : "VET-KYC";
  const refId = `${prefix}-${new Date().getFullYear()}-${timestamp}${randomSuffix}`;
  const id = `kyc_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  const newKyc: KycSubmission = {
    category: data.category || "end_user",
    ...data,
    id,
    referenceId: refId,
    status: "pending",
    createdAt: now,
    updatedAt: now,
  };

  await db.execute({
    sql: `INSERT INTO kyc_submissions (
      id, reference_id, category, company_name, signatory_name, signatory_email,
      signatory_phone, status, admin_notes, pdf_path, data, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      newKyc.id,
      newKyc.referenceId,
      newKyc.category,
      newKyc.companyName,
      newKyc.signatoryName,
      newKyc.signatoryEmail,
      newKyc.signatoryPhone || null,
      newKyc.status,
      newKyc.adminNotes || null,
      newKyc.pdfPath || null,
      JSON.stringify(newKyc),
      newKyc.createdAt,
      newKyc.updatedAt,
    ],
  });

  return newKyc;
}

export async function updateKyc(
  id: string,
  updates: Partial<Pick<KycSubmission, "status" | "adminNotes" | "pdfPath">>
): Promise<KycSubmission | null> {
  const db = await getInitializedDb();
  const current = await getKycById(id);
  if (!current) return null;

  const now = new Date().toISOString();
  const updatedKyc: KycSubmission = {
    ...current,
    ...updates,
    updatedAt: now,
  };

  await db.execute({
    sql: `UPDATE kyc_submissions SET
      status = ?,
      admin_notes = ?,
      pdf_path = ?,
      data = ?,
      updated_at = ?
    WHERE id = ? OR reference_id = ?`,
    args: [
      updatedKyc.status,
      updatedKyc.adminNotes || null,
      updatedKyc.pdfPath || null,
      JSON.stringify(updatedKyc),
      now,
      current.id,
      current.referenceId,
    ],
  });

  return updatedKyc;
}

export async function deleteKyc(id: string): Promise<boolean> {
  const db = await getInitializedDb();
  await db.execute({
    sql: "DELETE FROM kyc_documents WHERE kyc_id = ? OR kyc_id IN (SELECT id FROM kyc_submissions WHERE reference_id = ?)",
    args: [id, id],
  });
  const res = await db.execute({
    sql: "DELETE FROM kyc_submissions WHERE id = ? OR reference_id = ?",
    args: [id, id],
  });
  return res.rowsAffected > 0;
}

// ==========================================
// MAIL LOGS (Persisted in Turso SQLite)
// ==========================================

export async function recordMailLog(log: Omit<MailLog, "id" | "sentAt">): Promise<MailLog> {
  const db = await getInitializedDb();
  const id = `mail_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
  const sentAt = new Date().toISOString();
  const entry: MailLog = {
    ...log,
    id,
    sentAt,
  };

  try {
    await db.execute({
      sql: `INSERT INTO mail_logs (id, type, recipient, subject, sent_at, has_attachment, status, error)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        entry.id,
        entry.type,
        entry.to,
        entry.subject,
        entry.sentAt,
        entry.hasAttachment ? 1 : 0,
        entry.status,
        entry.error || null,
      ],
    });
  } catch (err) {
    console.error("[Turso] Failed to record mail log:", err);
  }

  return entry;
}

export async function getMailLogs(): Promise<MailLog[]> {
  try {
    const db = await getInitializedDb();
    const res = await db.execute("SELECT * FROM mail_logs ORDER BY sent_at DESC LIMIT 100");
    return res.rows.map((row) => ({
      id: String(row.id),
      type: row.type as "inquiry" | "kyc",
      to: String(row.recipient),
      subject: String(row.subject),
      sentAt: String(row.sent_at),
      hasAttachment: Boolean(row.has_attachment),
      status: row.status as "sent" | "simulated_awaiting_smtp",
      error: row.error ? String(row.error) : undefined,
    }));
  } catch (err) {
    console.error("[Turso] Failed to fetch mail logs:", err);
    return [];
  }
}

// ==========================================
// KYC DOCUMENTS (Persistent in Turso SQLite)
// ==========================================

export async function saveKycDocument(doc: {
  kycId: string;
  docKey: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  data: string;
}): Promise<KycDocument> {
  const db = await getInitializedDb();
  const id = `doc_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
  const now = new Date().toISOString();

  // Remove previous document under same docKey for this KYC submission if replacing
  await db.execute({
    sql: "DELETE FROM kyc_documents WHERE kyc_id = ? AND doc_key = ?",
    args: [doc.kycId, doc.docKey],
  });

  await db.execute({
    sql: `INSERT INTO kyc_documents (id, kyc_id, doc_key, file_name, file_type, file_size, data, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      id,
      doc.kycId,
      doc.docKey,
      doc.fileName,
      doc.fileType,
      doc.fileSize,
      doc.data,
      now,
    ],
  });

  return {
    id,
    kycId: doc.kycId,
    docKey: doc.docKey,
    fileName: doc.fileName,
    fileType: doc.fileType,
    fileSize: doc.fileSize,
    data: doc.data,
    createdAt: now,
  };
}

export async function getKycDocumentsMeta(kycId: string): Promise<KycDocumentMeta[]> {
  try {
    const db = await getInitializedDb();
    const res = await db.execute({
      sql: `SELECT id, kyc_id, doc_key, file_name, file_type, file_size, created_at
            FROM kyc_documents WHERE kyc_id = ? ORDER BY created_at ASC`,
      args: [kycId],
    });
    return res.rows.map((row) => ({
      id: String(row.id),
      kycId: String(row.kyc_id),
      docKey: String(row.doc_key),
      fileName: String(row.file_name),
      fileType: String(row.file_type),
      fileSize: Number(row.file_size),
      createdAt: String(row.created_at),
    }));
  } catch (err) {
    console.error("[Turso] Failed to get KYC documents meta:", err);
    return [];
  }
}

export async function getKycDocument(kycId: string, docKey: string): Promise<KycDocument | null> {
  try {
    const db = await getInitializedDb();

    const KEY_ALIASES: Record<string, string[]> = {
      signerIdDoc: ["signerIdDoc", "signerIdDocName", "idDocFront", "idDocFileName", "idDoc", "idDocName"],
      signerIdDocName: ["signerIdDocName", "signerIdDoc", "idDocFront", "idDocFileName", "idDoc"],
      idDocFront: ["idDocFront", "idDocFileName", "signerIdDoc", "signerIdDocName", "idDoc"],
      idDocBack: ["idDocBack", "idDocBackFileName"],
      idDocFileName: ["idDocFileName", "idDocFront", "signerIdDoc", "signerIdDocName", "idDoc"],
      idDocBackFileName: ["idDocBackFileName", "idDocBack"],
      incorporationDoc: ["incorporationDoc", "incorporationDocName", "incorporationCert"],
      incorporationDocName: ["incorporationDocName", "incorporationDoc", "incorporationCert"],
      taxDoc: ["taxDoc", "taxDocName", "taxIdDoc", "taxDocFileName"],
      taxDocName: ["taxDocName", "taxDoc", "taxIdDoc"],
      proofOfAddressDoc: ["proofOfAddressDoc", "proofOfAddressDocName", "proofOfAddress"],
      proofOfAddressDocName: ["proofOfAddressDocName", "proofOfAddressDoc", "proofOfAddress"],
      itgScreenshotDoc: ["itgScreenshotDoc", "itgScreenshotDocName", "itgScreenshot"],
      itgScreenshotDocName: ["itgScreenshotDocName", "itgScreenshotDoc", "itgScreenshot"],
    };

    const searchKeys = Array.from(new Set([docKey, ...(KEY_ALIASES[docKey] || [])]));
    const placeholders = searchKeys.map(() => "?").join(", ");

    const res = await db.execute({
      sql: `SELECT id, kyc_id, doc_key, file_name, file_type, file_size, data, created_at
            FROM kyc_documents WHERE (kyc_id = ? OR kyc_id IN (SELECT id FROM kyc_submissions WHERE reference_id = ?))
            AND (doc_key IN (${placeholders}) OR id = ? OR file_name = ?) LIMIT 1`,
      args: [kycId, kycId, ...searchKeys, docKey, docKey],
    });
    if (res.rows.length === 0) return null;
    const row = res.rows[0];
    return {
      id: String(row.id),
      kycId: String(row.kyc_id),
      docKey: String(row.doc_key),
      fileName: String(row.file_name),
      fileType: String(row.file_type),
      fileSize: Number(row.file_size),
      data: String(row.data),
      createdAt: String(row.created_at),
    };
  } catch (err) {
    console.error("[Turso] Failed to get KYC document:", err);
    return null;
  }
}

export { DATA_DIR, UPLOADS_DIR, PDFS_DIR };
