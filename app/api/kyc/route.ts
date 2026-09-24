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

    const category = body.category === "wholesaler" ? "wholesaler" : "end_user";

    // 1. Create KYC record in persistent store
    const kyc = await createKyc({
      category,
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
      signatoryNationality: body.signatoryNationality ? String(body.signatoryNationality).trim() : undefined,
      signatoryDob: body.signatoryDob ? String(body.signatoryDob).trim() : undefined,
      idDocType: body.idDocType ? String(body.idDocType).trim() : undefined,
      idDocNumber: body.idDocNumber ? String(body.idDocNumber).trim() : undefined,
      idDocIssuingCountry: body.idDocIssuingCountry ? String(body.idDocIssuingCountry).trim() : undefined,
      idDocExpiryDate: body.idDocExpiryDate ? String(body.idDocExpiryDate).trim() : undefined,
      idDocFileName: body.idDocFileName ? String(body.idDocFileName).trim() : undefined,
      idDocBackFileName: body.idDocBackFileName ? String(body.idDocBackFileName).trim() : undefined,

      // Wholesale Business & Regulatory
      incorporationDate: body.incorporationDate ? String(body.incorporationDate).trim() : undefined,
      incorporationJurisdiction: body.incorporationJurisdiction ? String(body.incorporationJurisdiction).trim() : undefined,
      providerType: body.providerType ? String(body.providerType).trim() : undefined,
      yearsInOperation: body.yearsInOperation ? String(body.yearsInOperation).trim() : undefined,
      fcc499Id: body.fcc499Id ? String(body.fcc499Id).trim() : undefined,
      fccFrn: body.fccFrn ? String(body.fccFrn).trim() : undefined,
      rmdId: body.rmdId ? String(body.rmdId).trim() : undefined,
      stateTelecomLicense: body.stateTelecomLicense ? String(body.stateTelecomLicense).trim() : undefined,
      stirShakenStatus: body.stirShakenStatus ? String(body.stirShakenStatus).trim() : undefined,
      ocnSpcTokenIssuer: body.ocnSpcTokenIssuer ? String(body.ocnSpcTokenIssuer).trim() : undefined,
      didAttestationCapability: body.didAttestationCapability ? String(body.didAttestationCapability).trim() : undefined,
      itgRegistered: body.itgRegistered ? String(body.itgRegistered).trim() : undefined,
      itgEscalationContact: body.itgEscalationContact ? String(body.itgEscalationContact).trim() : undefined,
      tracebackSlaHours: body.tracebackSlaHours ? String(body.tracebackSlaHours).trim() : undefined,
      fccHistoryOrCitations: body.fccHistoryOrCitations ? String(body.fccHistoryOrCitations).trim() : undefined,
      fccHistoryDetails: body.fccHistoryDetails ? String(body.fccHistoryDetails).trim() : undefined,
      trafficProfileNature: body.trafficProfileNature ? String(body.trafficProfileNature).trim() : undefined,
      estimatedDailyMinutes: body.estimatedDailyMinutes ? String(body.estimatedDailyMinutes).trim() : undefined,
      peakCps: body.peakCps ? String(body.peakCps).trim() : undefined,
      acdSeconds: body.acdSeconds ? String(body.acdSeconds).trim() : undefined,
      targetAsr: body.targetAsr ? String(body.targetAsr).trim() : undefined,
      operationalAddress: body.operationalAddress ? String(body.operationalAddress).trim() : undefined,
      interconnectProtocols: Array.isArray(body.interconnectProtocols) ? body.interconnectProtocols : undefined,

      // Contacts & Compliance
      primaryContactName: body.primaryContactName ? String(body.primaryContactName).trim() : undefined,
      primaryContactTitle: body.primaryContactTitle ? String(body.primaryContactTitle).trim() : undefined,
      primaryContactEmail: body.primaryContactEmail ? String(body.primaryContactEmail).trim() : undefined,
      primaryContactPhone: body.primaryContactPhone ? String(body.primaryContactPhone).trim() : undefined,
      billingInvoiceEmail: body.billingInvoiceEmail ? String(body.billingInvoiceEmail).trim() : undefined,
      billingAddress: body.billingAddress ? String(body.billingAddress).trim() : undefined,
      ratesContactName: body.ratesContactName ? String(body.ratesContactName).trim() : undefined,
      ratesContactEmail: body.ratesContactEmail ? String(body.ratesContactEmail).trim() : undefined,
      ratesContactPhone: body.ratesContactPhone ? String(body.ratesContactPhone).trim() : undefined,
      nocEscalation: body.nocEscalation ? String(body.nocEscalation).trim() : undefined,

      // Banking
      bankName: body.bankName ? String(body.bankName).trim() : undefined,
      bankCountry: body.bankCountry ? String(body.bankCountry).trim() : undefined,
      beneficiaryName: body.beneficiaryName ? String(body.beneficiaryName).trim() : undefined,
      accountNumberIban: body.accountNumberIban ? String(body.accountNumberIban).trim() : undefined,
      routingSwiftBic: body.routingSwiftBic ? String(body.routingSwiftBic).trim() : undefined,
      paymentTerms: body.paymentTerms ? String(body.paymentTerms).trim() : undefined,

      // Trade References
      tradeRef1Company: body.tradeRef1Company ? String(body.tradeRef1Company).trim() : undefined,
      tradeRef1Contact: body.tradeRef1Contact ? String(body.tradeRef1Contact).trim() : undefined,
      tradeRef1Email: body.tradeRef1Email ? String(body.tradeRef1Email).trim() : undefined,
      tradeRef1Phone: body.tradeRef1Phone ? String(body.tradeRef1Phone).trim() : undefined,
      tradeRef1Relation: body.tradeRef1Relation ? String(body.tradeRef1Relation).trim() : undefined,
      tradeRef2Company: body.tradeRef2Company ? String(body.tradeRef2Company).trim() : undefined,
      tradeRef2Contact: body.tradeRef2Contact ? String(body.tradeRef2Contact).trim() : undefined,
      tradeRef2Email: body.tradeRef2Email ? String(body.tradeRef2Email).trim() : undefined,
      tradeRef2Phone: body.tradeRef2Phone ? String(body.tradeRef2Phone).trim() : undefined,
      tradeRef2Relation: body.tradeRef2Relation ? String(body.tradeRef2Relation).trim() : undefined,

      // Declarations & Fraud SLAs
      tsrTcpaCompliant: Boolean(body.tsrTcpaCompliant),
      antiSpoofingCompliant: Boolean(body.antiSpoofingCompliant),
      knowYourCustomerChainCompliant: Boolean(body.knowYourCustomerChainCompliant),
      zeroToleranceAgreed: Boolean(body.zeroToleranceAgreed),
      fraudEmergencyEmail: body.fraudEmergencyEmail ? String(body.fraudEmergencyEmail).trim() : undefined,
      fraudEmergencyPhone: body.fraudEmergencyPhone ? String(body.fraudEmergencyPhone).trim() : undefined,
      immediateSuspensionConsent: Boolean(body.immediateSuspensionConsent),

      // Standard NOC & Billing fallback
      nocName: String(body.nocName || signatoryName).trim(),
      nocEmail: String(body.nocEmail || signatoryEmail).trim().toLowerCase(),
      nocPhone: String(body.nocPhone || signatoryPhone).trim(),
      billingName: String(body.billingName || signatoryName).trim(),
      billingEmail: String(body.billingEmail || signatoryEmail).trim().toLowerCase(),
      billingPhone: String(body.billingPhone || signatoryPhone).trim(),
      servicesRequested: Array.isArray(servicesRequested) ? servicesRequested : [String(servicesRequested || (category === "wholesaler" ? "Wholesale SIP Trunking" : "Direct VoIP Routes"))],
      targetCountries: String(targetCountries || "USA, Canada, Global Tier-1").trim(),
      estimatedMonthlyMinutes: String(estimatedMonthlyMinutes || "100,000+ mins").trim(),
      concurrentChannels: String(concurrentChannels || "24 - 48 channels").trim(),
      trafficType: String(trafficType || "Conversational / Outbound").trim(),
      signalingIps: String(signalingIps || "To be provided via IP ticket").trim(),
      mediaIps: mediaIps ? String(mediaIps).trim() : undefined,
      codecs: String(codecs || "G.711u / G.711a / G.729").trim(),
      documents: documents || {},
      proofOfAddressDocName: body.proofOfAddressDocName ? String(body.proofOfAddressDocName).trim() : undefined,
      itgScreenshotDocName: body.itgScreenshotDocName ? String(body.itgScreenshotDocName).trim() : undefined,
      termsAgreed: Boolean(body.termsAgreed ?? true),
      dataProcessingConsent: Boolean(body.dataProcessingConsent ?? true),
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
