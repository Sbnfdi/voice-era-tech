import fs from "fs/promises";
import path from "path";

// Data directories
const DATA_DIR = path.join(process.cwd(), "data");
const UPLOADS_DIR = path.join(DATA_DIR, "uploads");
const PDFS_DIR = path.join(DATA_DIR, "kyc-pdfs");
const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");
const KYC_FILE = path.join(DATA_DIR, "kyc.json");
const ADMIN_FILE = path.join(DATA_DIR, "admin.json");

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
  createdAt: string;
  updatedAt: string;
}

// Ensure storage directories exist
async function ensureInit() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.mkdir(UPLOADS_DIR, { recursive: true });
  await fs.mkdir(PDFS_DIR, { recursive: true });

  try {
    await fs.access(INQUIRIES_FILE);
  } catch {
    await fs.writeFile(INQUIRIES_FILE, "[]", "utf-8");
  }

  try {
    await fs.access(KYC_FILE);
  } catch {
    await fs.writeFile(KYC_FILE, "[]", "utf-8");
  }

  try {
    await fs.access(ADMIN_FILE);
  } catch {
    await fs.writeFile(
      ADMIN_FILE,
      JSON.stringify(
        {
          supportEmail: process.env.SUPPORT_EMAIL || "support@voiceeratech.com",
          kycEmail: process.env.KYC_EMAIL || "kyc@voiceeratech.com",
          initializedAt: new Date().toISOString(),
        },
        null,
        2
      ),
      "utf-8"
    );
  }
}

// INQUIRIES
export async function getInquiries(): Promise<Inquiry[]> {
  await ensureInit();
  const data = await fs.readFile(INQUIRIES_FILE, "utf-8");
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function createInquiry(
  data: Omit<Inquiry, "id" | "status" | "createdAt" | "updatedAt">
): Promise<Inquiry> {
  await ensureInit();
  const inquiries = await getInquiries();
  const newInquiry: Inquiry = {
    ...data,
    id: `INQ-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`,
    status: "new",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  inquiries.unshift(newInquiry);
  await fs.writeFile(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
  return newInquiry;
}

export async function updateInquiry(
  id: string,
  updates: Partial<Pick<Inquiry, "status" | "notes">>
): Promise<Inquiry | null> {
  await ensureInit();
  const inquiries = await getInquiries();
  const index = inquiries.findIndex((i) => i.id === id);
  if (index === -1) return null;

  inquiries[index] = {
    ...inquiries[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await fs.writeFile(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
  return inquiries[index];
}

export async function deleteInquiry(id: string): Promise<boolean> {
  await ensureInit();
  const inquiries = await getInquiries();
  const filtered = inquiries.filter((i) => i.id !== id);
  if (filtered.length === inquiries.length) return false;
  await fs.writeFile(INQUIRIES_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

// KYC SUBMISSIONS
export async function getKycList(): Promise<KycSubmission[]> {
  await ensureInit();
  const data = await fs.readFile(KYC_FILE, "utf-8");
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function getKycById(id: string): Promise<KycSubmission | null> {
  const list = await getKycList();
  return list.find((k) => k.id === id || k.referenceId === id) || null;
}

export async function createKyc(
  data: Omit<KycSubmission, "id" | "referenceId" | "status" | "createdAt" | "updatedAt">
): Promise<KycSubmission> {
  await ensureInit();
  const list = await getKycList();
  const timestamp = Date.now().toString().slice(-5);
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const prefix = data.category === "wholesaler" ? "VET-WHL" : "VET-KYC";
  const refId = `${prefix}-${new Date().getFullYear()}-${timestamp}${randomSuffix}`;

  const newKyc: KycSubmission = {
    category: data.category || "end_user",
    ...data,
    id: `kyc_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    referenceId: refId,
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  list.unshift(newKyc);
  await fs.writeFile(KYC_FILE, JSON.stringify(list, null, 2), "utf-8");
  return newKyc;
}

export async function updateKyc(
  id: string,
  updates: Partial<Pick<KycSubmission, "status" | "adminNotes" | "pdfPath">>
): Promise<KycSubmission | null> {
  await ensureInit();
  const list = await getKycList();
  const index = list.findIndex((k) => k.id === id || k.referenceId === id);
  if (index === -1) return null;

  list[index] = {
    ...list[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await fs.writeFile(KYC_FILE, JSON.stringify(list, null, 2), "utf-8");
  return list[index];
}

export async function deleteKyc(id: string): Promise<boolean> {
  await ensureInit();
  const list = await getKycList();
  const filtered = list.filter((k) => k.id !== id && k.referenceId !== id);
  if (filtered.length === list.length) return false;
  await fs.writeFile(KYC_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

export { DATA_DIR, UPLOADS_DIR, PDFS_DIR };
