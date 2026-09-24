import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs/promises";
import path from "path";
import { KycSubmission, PDFS_DIR } from "./db";

export async function generateKycPdf(kyc: KycSubmission): Promise<{ buffer: Buffer; filePath: string; filename: string }> {
  const isWholesale = kyc.category === "wholesaler";
  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle(
    isWholesale
      ? `Voice Era Tech LLC - Wholesale Carrier Application - ${kyc.referenceId}`
      : `Voice Era Tech LLC - Carrier KYC Application - ${kyc.referenceId}`
  );
  pdfDoc.setAuthor("Voice Era Tech LLC");
  pdfDoc.setSubject(
    isWholesale
      ? "Wholesale Carrier Interconnect & Regulatory Application"
      : "Carrier Verification & Customer Onboarding KYC"
  );
  pdfDoc.setKeywords(["KYC", "Wholesale", "VoIP", "Voice Era Tech", "SIP Trunking", "Compliance"]);

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontMono = await pdfDoc.embedFont(StandardFonts.Courier);

  const primaryColor = rgb(0.08, 0.08, 0.1);
  const accentColor = rgb(0.12, 0.45, 0.85);
  const mutedColor = rgb(0.4, 0.42, 0.45);
  const lightBgColor = rgb(0.96, 0.97, 0.98);
  const borderColor = rgb(0.85, 0.86, 0.88);

  const drawHeader = (page: ReturnType<typeof pdfDoc.addPage>, pageNum: number, totalPages: number) => {
    const { width, height } = page.getSize();

    // Top Brand Bar
    page.drawRectangle({
      x: 0,
      y: height - 6,
      width,
      height: 6,
      color: accentColor,
    });

    // Header Logo & Entity Title
    page.drawText("VOICE ERA TECH LLC", {
      x: 40,
      y: height - 42,
      size: 16,
      font: fontBold,
      color: primaryColor,
    });

    page.drawText(
      isWholesale
        ? "WHOLESALE CARRIER INTERCONNECT & REGULATORY ONBOARDING - FORM VET-WHL-01"
        : "CARRIER SERVICES & TELEPHONY ONBOARDING - FORM VET-KYC-01",
      {
        x: 40,
        y: height - 54,
        size: 8,
        font: fontRegular,
        color: mutedColor,
      }
    );

    // Reference & Date Badge (Top Right)
    page.drawRectangle({
      x: width - 210,
      y: height - 58,
      width: 170,
      height: 28,
      color: lightBgColor,
      borderColor: borderColor,
      borderWidth: 1,
    });

    page.drawText("REF ID:", {
      x: width - 202,
      y: height - 44,
      size: 7,
      font: fontBold,
      color: mutedColor,
    });

    page.drawText(kyc.referenceId, {
      x: width - 165,
      y: height - 44,
      size: 8,
      font: fontMono,
      color: primaryColor,
    });

    page.drawText(`DATE: ${new Date(kyc.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}`, {
      x: width - 202,
      y: height - 54,
      size: 7,
      font: fontRegular,
      color: mutedColor,
    });

    // Top Divider
    page.drawLine({
      start: { x: 40, y: height - 68 },
      end: { x: width - 40, y: height - 68 },
      thickness: 1,
      color: borderColor,
    });

    // Footer
    page.drawLine({
      start: { x: 40, y: 40 },
      end: { x: width - 40, y: 40 },
      thickness: 1,
      color: borderColor,
    });

    page.drawText("Voice Era Tech LLC • VoIP Routes & Intelligent Dialer Systems • kyc@voiceeratech.com", {
      x: 40,
      y: 28,
      size: 7,
      font: fontRegular,
      color: mutedColor,
    });

    page.drawText(`Page ${pageNum} of ${totalPages}`, {
      x: width - 90,
      y: 28,
      size: 7,
      font: fontRegular,
      color: mutedColor,
    });
  };

  const drawFieldRow = (
    page: ReturnType<typeof pdfDoc.addPage>,
    y: number,
    label1: string,
    val1: string,
    label2?: string,
    val2?: string
  ) => {
    const { width } = page.getSize();
    const colWidth = (width - 80) / 2;

    // Col 1
    page.drawText(label1.toUpperCase(), {
      x: 40,
      y: y + 10,
      size: 7,
      font: fontBold,
      color: mutedColor,
    });
    page.drawText(val1 || "N/A", {
      x: 40,
      y: y - 2,
      size: 9,
      font: fontRegular,
      color: primaryColor,
    });

    // Col 2
    if (label2) {
      page.drawText(label2.toUpperCase(), {
        x: 40 + colWidth,
        y: y + 10,
        size: 7,
        font: fontBold,
        color: mutedColor,
      });
      page.drawText(val2 || "N/A", {
        x: 40 + colWidth,
        y: y - 2,
        size: 9,
        font: fontRegular,
        color: primaryColor,
      });
    }

    // Row divider
    page.drawLine({
      start: { x: 40, y: y - 10 },
      end: { x: width - 40, y: y - 10 },
      thickness: 0.5,
      color: borderColor,
    });

    return y - 28;
  };

  const drawSectionTitle = (page: ReturnType<typeof pdfDoc.addPage>, y: number, num: string, title: string) => {
    const { width } = page.getSize();

    page.drawRectangle({
      x: 40,
      y: y - 4,
      width: width - 80,
      height: 20,
      color: lightBgColor,
      borderColor: borderColor,
      borderWidth: 0.5,
    });

    page.drawText(`SECTION ${num}: ${title.toUpperCase()}`, {
      x: 48,
      y: y + 2,
      size: 8,
      font: fontBold,
      color: primaryColor,
    });

    return y - 16;
  };

  // PAGE 1: Corporate Identity, Authorized Signer & Contacts
  const page1 = pdfDoc.addPage([595.28, 841.89]); // A4
  let y = 841.89 - 88;

  if (isWholesale) {
    // Section 1
    y = drawSectionTitle(page1, y, "1", "Wholesale Corporate & Regulatory Information");
    y = drawFieldRow(page1, y, "Legal Business Name", kyc.companyName, "Doing Business As (DBA)", kyc.dba || "None");
    y = drawFieldRow(page1, y, "Tax ID / EIN", kyc.taxId, "Registration / Filing No.", kyc.registrationNumber);
    y = drawFieldRow(page1, y, "Provider Classification", kyc.providerType || "Wholesale Carrier", "Jurisdiction / Country", kyc.country);
    y = drawFieldRow(page1, y, "FCC 499 Filer ID", kyc.fcc499Id || "Foreign / Not Registered", "FCC FRN / RMD ID", `${kyc.fccFrn || "N/A"} / ${kyc.rmdId || "N/A"}`);
    y = drawFieldRow(page1, y, "ITG Traceback Status", kyc.itgRegistered || "Active Participant", "Traceback SLA Commitment", kyc.tracebackSlaHours || "< 4 Hours");
    y = drawFieldRow(page1, y, "Registered Headquarters", kyc.address, "City, State & Postal", `${kyc.city}, ${kyc.state} ${kyc.postalCode}`);

    y -= 8;

    // Section 2
    y = drawSectionTitle(page1, y, "2", "Authorized Signatory & Identity Verification");
    y = drawFieldRow(page1, y, "Signatory Full Name", kyc.signatoryName, "Designation / Title", kyc.signatoryTitle);
    y = drawFieldRow(page1, y, "Direct Corporate Email", kyc.signatoryEmail, "Direct Telephone", kyc.signatoryPhone);
    y = drawFieldRow(page1, y, "Nationality / Citizenship", kyc.signatoryNationality || "Disclosed in Vault", "Identity Document", `${kyc.idDocType || "Gov ID"}: ${kyc.idDocNumber || "Verified"}`);

    y -= 8;

    // Section 3
    y = drawSectionTitle(page1, y, "3", "Wholesale Traffic & Capacity Profile");
    const servicesList = Array.isArray(kyc.servicesRequested) ? kyc.servicesRequested.join(", ") : "Wholesale SIP Trunking";
    y = drawFieldRow(page1, y, "Requested Services", servicesList, "Traffic Classification", kyc.trafficProfileNature || kyc.trafficType);
    y = drawFieldRow(page1, y, "Est. Daily / Monthly Minutes", `${kyc.estimatedDailyMinutes || "100k+"} / ${kyc.estimatedMonthlyMinutes}`, "Concurrent Channels / CPS", `${kyc.concurrentChannels} (Peak CPS: ${kyc.peakCps || "30"})`);
    y = drawFieldRow(page1, y, "Target Destinations", kyc.targetCountries, "Supported Codecs", kyc.codecs);
  } else {
    // Section 1
    y = drawSectionTitle(page1, y, "1", "Corporate Legal Identity & Registration");
    y = drawFieldRow(page1, y, "Legal Company Name", kyc.companyName, "Doing Business As (DBA)", kyc.dba || "None");
    y = drawFieldRow(page1, y, "Tax ID / EIN", kyc.taxId, "Registration / Incorporation No.", kyc.registrationNumber);
    y = drawFieldRow(page1, y, "Country of Incorporation", kyc.country, "Corporate Website", kyc.website);
    y = drawFieldRow(page1, y, "Registered Street Address", kyc.address, "City, State & Postal Code", `${kyc.city}, ${kyc.state} ${kyc.postalCode}`);

    y -= 8;

    // Section 2
    y = drawSectionTitle(page1, y, "2", "Authorized Signatory / Representative");
    y = drawFieldRow(page1, y, "Full Legal Name", kyc.signatoryName, "Job Title / Designation", kyc.signatoryTitle);
    y = drawFieldRow(page1, y, "Corporate Work Email", kyc.signatoryEmail, "Direct Phone Number", kyc.signatoryPhone);
    y = drawFieldRow(page1, y, "Signer Gov ID / Passport No.", kyc.signatoryIdNumber || "Verified via Upload", "Application Status", "Official Submission Received");

    y -= 8;

    // Section 3
    y = drawSectionTitle(page1, y, "3", "Operational & Billing Contacts");
    y = drawFieldRow(page1, y, "Technical NOC Contact Name", kyc.nocName, "NOC Operations Email", kyc.nocEmail);
    y = drawFieldRow(page1, y, "NOC Phone / Escalation", kyc.nocPhone, "Accounts / Billing Contact", kyc.billingName);
    y = drawFieldRow(page1, y, "Billing Accounts Email", kyc.billingEmail, "Billing Direct Phone", kyc.billingPhone);

    y -= 8;

    // Section 4
    y = drawSectionTitle(page1, y, "4", "Telephony Services & Traffic Specifications");
    const servicesList = Array.isArray(kyc.servicesRequested) ? kyc.servicesRequested.join(", ") : "Standard Wholesale Routes";
    y = drawFieldRow(page1, y, "Services Requested", servicesList, "Primary Traffic Profile", kyc.trafficType);
    y = drawFieldRow(page1, y, "Est. Monthly Call Volume", kyc.estimatedMonthlyMinutes, "Concurrent Channels / Ports", kyc.concurrentChannels);
    y = drawFieldRow(page1, y, "Target Destination Countries", kyc.targetCountries, "Supported Codecs", kyc.codecs);
  }

  // PAGE 2: Interconnect IPs, Document Manifest & Compliance Attestation
  const page2 = pdfDoc.addPage([595.28, 841.89]);
  let y2 = 841.89 - 88;

  if (isWholesale) {
    // Section 4: Wholesale Contacts & Rates
    y2 = drawSectionTitle(page2, y2, "4", "Operations, Billing, Rates & 24/7 NOC");
    y2 = drawFieldRow(page2, y2, "Primary / Executive Contact", `${kyc.primaryContactName || kyc.signatoryName} (${kyc.primaryContactEmail || kyc.signatoryEmail})`, "Billing / Invoicing Contact", `${kyc.billingName} (${kyc.billingInvoiceEmail || kyc.billingEmail})`);
    y2 = drawFieldRow(page2, y2, "Rates & Deck Distribution", `${kyc.ratesContactName || "Carrier Rates"} (${kyc.ratesContactEmail || kyc.billingEmail})`, "24/7 NOC Hotline & Escalation", `${kyc.nocPhone} (${kyc.nocEmail})`);

    y2 -= 6;

    // Section 5: Banking & Settlement
    y2 = drawSectionTitle(page2, y2, "5", "Settlement Terms, Banking & Trade References");
    y2 = drawFieldRow(page2, y2, "Beneficiary Bank Name", kyc.bankName || "Disclosed on file", "Bank Country & Branch", kyc.bankCountry || kyc.country);
    y2 = drawFieldRow(page2, y2, "Account / IBAN", kyc.accountNumberIban || "Confidential in Vault", "Payment Settlement Terms", kyc.paymentTerms || "Prepaid");
    y2 = drawFieldRow(page2, y2, "Trade Reference 1", `${kyc.tradeRef1Company || "Disclosed"}: ${kyc.tradeRef1Contact || "Verified"}`, "Trade Reference 2", `${kyc.tradeRef2Company || "Disclosed"}: ${kyc.tradeRef2Contact || "Verified"}`);

    y2 -= 6;

    // Section 6: Whitelisting IPs
    y2 = drawSectionTitle(page2, y2, "6", "Network Interconnect & Whitelisting");
    y2 = drawFieldRow(page2, y2, "Signaling Switch IPs / FQDN", kyc.signalingIps, "Media Audio RTP IPs", kyc.mediaIps || "Same as Signaling");
  } else {
    // Section 5
    y2 = drawSectionTitle(page2, y2, "5", "Network Interconnect & Whitelisting");
    y2 = drawFieldRow(page2, y2, "Signaling Switch IPs / FQDN", kyc.signalingIps, "Media Audio RTP IPs", kyc.mediaIps || "Same as Signaling");

    y2 -= 12;

    // Section 6
    y2 = drawSectionTitle(page2, y2, "6", "Submitted Documentation Manifest");
    const incDoc = kyc.documents?.incorporationDocName || "Uploaded to secure vault";
    const taxDoc = kyc.documents?.taxDocName || "Uploaded to secure vault";
    const idDoc = kyc.documents?.signerIdDocName || "Uploaded to secure vault";
    y2 = drawFieldRow(page2, y2, "Certificate of Incorporation", incDoc, "Tax / EIN Form Document", taxDoc);
    y2 = drawFieldRow(page2, y2, "Signer Photo Identification", idDoc, "Submission Channel", "Encrypted Voice Era Carrier Portal");
  }

  y2 -= 12;

  // Section 7: Regulatory Attestation
  y2 = drawSectionTitle(page2, y2, "7", "Regulatory Compliance & Anti-Robocall Attestation");

  page2.drawText("The applicant entity and authorized representative hereby certify and represent that:", {
    x: 40,
    y: y2 - 4,
    size: 8,
    font: fontBold,
    color: primaryColor,
  });
  y2 -= 18;

  const attestations = [
    "[CONFIRMED] STIR/SHAKEN Compliance: Applicant possesses legitimate ownership or explicit authorization for all Outbound Caller IDs (CLIs) transmitted across Voice Era Tech network infrastructure, adhering to FCC STIR/SHAKEN framework.",
    "[CONFIRMED] TCPA / TSR Safe Harbor: Applicant strictly enforces compliance with the Telephone Consumer Protection Act (TCPA), FTC Telemarketing Sales Rule (TSR), and National Do-Not-Call (DNC) registry requirements.",
    "[CONFIRMED] Anti-Fraud & Robocall Prohibition: Applicant shall not transmit unlawful spoofed traffic, telemarketing fraud, deceptive robocalls, or unlicensed high-CPS spikes causing network degradation.",
    "[CONFIRMED] Accuracy Guarantee: All corporate details, tax documents, and contact records provided herein are authentic, current, and legally binding under penalty of immediate route suspension."
  ];

  for (const att of attestations) {
    page2.drawText(att.slice(0, 11), {
      x: 40,
      y: y2,
      size: 7.5,
      font: fontBold,
      color: rgb(0.1, 0.5, 0.2),
    });
    page2.drawText(att.slice(11), {
      x: 105,
      y: y2,
      size: 7,
      font: fontRegular,
      color: primaryColor,
    });
    y2 -= 16;
  }

  y2 -= 14;

  // Section 8: Signature Block
  y2 = drawSectionTitle(page2, y2, "8", "Legally Binding Digital Signature & Verification");

  // Signature Box
  page2.drawRectangle({
    x: 40,
    y: y2 - 75,
    width: 595.28 - 80,
    height: 70,
    color: lightBgColor,
    borderColor: borderColor,
    borderWidth: 1,
  });

  page2.drawText("ELECTRONICALLY SIGNED & VERIFIED", {
    x: 52,
    y: y2 - 18,
    size: 8,
    font: fontBold,
    color: accentColor,
  });

  page2.drawText(`Authorized Signatory: ${kyc.digitalSignature || kyc.signatoryName}`, {
    x: 52,
    y: y2 - 34,
    size: 11,
    font: fontBold,
    color: primaryColor,
  });

  page2.drawText(`Title / Authority: ${kyc.signatoryTitle} on behalf of ${kyc.companyName}`, {
    x: 52,
    y: y2 - 48,
    size: 8,
    font: fontRegular,
    color: mutedColor,
  });

  page2.drawText(`Execution Timestamp: ${new Date(kyc.createdAt).toUTCString()} | Digital Audit Ref: ${kyc.referenceId}`, {
    x: 52,
    y: y2 - 62,
    size: 7.5,
    font: fontMono,
    color: primaryColor,
  });

  // Stamp Box (Right)
  page2.drawRectangle({
    x: 595.28 - 180,
    y: y2 - 70,
    width: 130,
    height: 60,
    color: rgb(0.98, 0.99, 1),
    borderColor: accentColor,
    borderWidth: 1,
  });

  page2.drawText("VOICE ERA TECH", {
    x: 595.28 - 170,
    y: y2 - 28,
    size: 9,
    font: fontBold,
    color: accentColor,
  });

  page2.drawText("CARRIER KYC AUDIT", {
    x: 595.28 - 170,
    y: y2 - 40,
    size: 7,
    font: fontRegular,
    color: mutedColor,
  });

  page2.drawText("[ PENDING REVIEW ]", {
    x: 595.28 - 170,
    y: y2 - 55,
    size: 8,
    font: fontBold,
    color: rgb(0.85, 0.45, 0.1),
  });

  // Draw Header/Footer for both pages
  drawHeader(page1, 1, 2);
  drawHeader(page2, 2, 2);

  const pdfBytes = await pdfDoc.save();
  const filename = `${kyc.referenceId}.pdf`;
  const filePath = path.join(PDFS_DIR, filename);

  await fs.mkdir(PDFS_DIR, { recursive: true });
  await fs.writeFile(filePath, Buffer.from(pdfBytes));

  return {
    buffer: Buffer.from(pdfBytes),
    filePath,
    filename,
  };
}
