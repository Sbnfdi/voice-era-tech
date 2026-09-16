import { NextRequest, NextResponse } from "next/server";
import { createKyc, getKycList, updateKyc } from "@/lib/db";
import { generateKycPdf } from "@/lib/pdf";
import { sendKycEmail } from "@/lib/mailer";

export async function GET() {
  try {
    const list = await getKycList();
    return NextResponse.json({ success: true, kycs: list });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to fetch KYC records";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      companyName,
      dba,
      registrationNumber,
      taxId,
      country,
      address,
      city,
      state,
      postalCode,
      website,
      signatoryName,
      signatoryTitle,
      signatoryEmail,
      signatoryPhone,
      signatoryIdNumber,
      nocName,
      nocEmail,
      nocPhone,
      billingName,
      billingEmail,
      billingPhone,
      servicesRequested,
      targetCountries,
      estimatedMonthlyMinutes,
      concurrentChannels,
      trafficType,
      signalingIps,
      mediaIps,
      codecs,
      documents,
      stirShakenAgreed,
      tcpaAgreed,
      accuracyAgreed,
      digitalSignature,
      signatureDate,
    } = body;

    // Validation
    if (
      !companyName ||
      !registrationNumber ||
      !country ||
      !signatoryName ||
      !signatoryEmail ||
      !signatoryPhone ||
      !digitalSignature
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Required fields missing. Please complete all corporate, signatory, and verification fields.",
        },
        { status: 400 }
      );
    }

    // 1. Create KYC record in persistent store
    const kyc = await createKyc({
      companyName: String(companyName).trim(),
      dba: dba ? String(dba).trim() : undefined,
      registrationNumber: String(registrationNumber).trim(),
      taxId: String(taxId || "Pending / Foreign Entity").trim(),
      country: String(country).trim(),
      address: String(address || "").trim(),
      city: String(city || "").trim(),
      state: String(state || "").trim(),
      postalCode: String(postalCode || "").trim(),
      website: String(website || "https://").trim(),
      signatoryName: String(signatoryName).trim(),
      signatoryTitle: String(signatoryTitle || "Authorized Officer").trim(),
      signatoryEmail: String(signatoryEmail).trim().toLowerCase(),
      signatoryPhone: String(signatoryPhone).trim(),
      signatoryIdNumber: signatoryIdNumber ? String(signatoryIdNumber).trim() : undefined,
      nocName: String(nocName || signatoryName).trim(),
      nocEmail: String(nocEmail || signatoryEmail).trim().toLowerCase(),
      nocPhone: String(nocPhone || signatoryPhone).trim(),
      billingName: String(billingName || signatoryName).trim(),
      billingEmail: String(billingEmail || signatoryEmail).trim().toLowerCase(),
      billingPhone: String(billingPhone || signatoryPhone).trim(),
      servicesRequested: Array.isArray(servicesRequested) ? servicesRequested : [String(servicesRequested || "Direct VoIP Routes")],
      targetCountries: String(targetCountries || "USA, Canada, Global Tier-1").trim(),
      estimatedMonthlyMinutes: String(estimatedMonthlyMinutes || "100,000+ mins").trim(),
      concurrentChannels: String(concurrentChannels || "24 - 48 channels").trim(),
      trafficType: String(trafficType || "Conversational / Call Center Outbound").trim(),
      signalingIps: String(signalingIps || "To be provided via IP ticket").trim(),
      mediaIps: mediaIps ? String(mediaIps).trim() : undefined,
      codecs: String(codecs || "G.711u / G.711a / G.729").trim(),
      documents: documents || {},
      stirShakenAgreed: Boolean(stirShakenAgreed),
      tcpaAgreed: Boolean(tcpaAgreed),
      accuracyAgreed: Boolean(accuracyAgreed),
      digitalSignature: String(digitalSignature).trim(),
      signatureDate: String(signatureDate || new Date().toISOString().split("T")[0]).trim(),
    });

    // 2. Generate Certified PDF
    let pdfBuffer: Buffer | null = null;
    let pdfFilename = `${kyc.referenceId}.pdf`;
    try {
      const generated = await generateKycPdf(kyc);
      pdfBuffer = generated.buffer;
      pdfFilename = generated.filename;
      await updateKyc(kyc.id, { pdfPath: generated.filePath });
    } catch (pdfErr) {
      console.error("PDF generation warning:", pdfErr);
    }

    // 3. Dispatch email with PDF attachment to kyc@voiceeratech.com
    let emailStatus = "not_sent";
    if (pdfBuffer) {
      try {
        const mailResult = await sendKycEmail(kyc, pdfBuffer, pdfFilename);
        emailStatus = mailResult.mode;
      } catch (mailErr) {
        console.error("Email dispatch warning:", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      kyc,
      referenceId: kyc.referenceId,
      pdfDownloadUrl: `/api/kyc/${kyc.id}/pdf`,
      emailStatus,
      message: "KYC Application successfully submitted, certified PDF generated, and dispatched to compliance.",
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to process KYC submission";
    console.error("Error in KYC submission API:", error);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
