import nodemailer from "nodemailer";
import { Inquiry, KycSubmission, recordMailLog, getMailLogs } from "./db";

export { getMailLogs };

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

function getInquiryCustomerHtml(inquiry: Inquiry, supportEmail: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0f172a; background-color: #f8fafc;">
      <div style="background-color: #0f172a; padding: 28px 24px; border-radius: 12px 12px 0 0; color: #ffffff;">
        <div style="display: inline-block; background-color: #2563eb; color: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">
          Ticket Confirmed
        </div>
        <h1 style="margin: 0; font-size: 22px; font-weight: 700; line-height: 1.3;">We Received Your Inquiry</h1>
        <p style="margin: 8px 0 0 0; font-size: 13px; color: #94a3b8;">Ticket Reference: <strong style="color: #38bdf8;">${inquiry.id}</strong></p>
      </div>

      <div style="border: 1px solid #e2e8f0; border-top: none; padding: 28px 24px; border-radius: 0 0 12px 12px; background: #ffffff;">
        <p style="font-size: 15px; margin-top: 0; color: #0f172a; line-height: 1.5;">Dear <strong>${inquiry.name}</strong>,</p>
        <p style="font-size: 14px; color: #334155; line-height: 1.6;">
          Thank you for contacting <strong>Voice Era Tech LLC</strong>. Your request has been logged and assigned ticket ID <strong>${inquiry.id}</strong>. Our enterprise telephony and wholesale routing team is reviewing your requirements.
        </p>

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #2563eb; border-radius: 4px; padding: 16px; margin: 20px 0;">
          <h4 style="margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">Summary of Your Request</h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <tr>
              <td style="padding: 5px 0; color: #64748b; width: 120px;">Company:</td>
              <td style="padding: 5px 0; color: #0f172a; font-weight: 600;">${inquiry.company}</td>
            </tr>
            <tr>
              <td style="padding: 5px 0; color: #64748b;">Email:</td>
              <td style="padding: 5px 0; color: #0f172a;">${inquiry.email}</td>
            </tr>
            ${inquiry.phone ? `
            <tr>
              <td style="padding: 5px 0; color: #64748b;">Phone:</td>
              <td style="padding: 5px 0; color: #0f172a;">${inquiry.phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 5px 0; color: #64748b; vertical-align: top;">Your Message:</td>
              <td style="padding: 5px 0; color: #0f172a; white-space: pre-wrap;">${inquiry.message}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px; margin-bottom: 24px;">
          <div style="font-size: 13px; color: #1e40af; font-weight: 600; margin-bottom: 4px;">What happens next?</div>
          <div style="font-size: 13px; color: #1e3a8a; line-height: 1.5;">
            An engineering account executive will review your routing and capacity needs and reach back out to you within <strong>1 business day</strong>. You can reply directly to this email at any time.
          </div>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 12px; color: #64748b; text-align: center; line-height: 1.6;">
          <strong>Voice Era Tech LLC</strong> • Direct VoIP Transmission &amp; Wholesale Termination<br/>
          Direct: <a href="tel:+15123332777" style="color: #2563eb; text-decoration: none;">+1 (512) 333-2777</a> • Support: <a href="mailto:${supportEmail}" style="color: #2563eb; text-decoration: none;">${supportEmail}</a><br/>
          <a href="https://voiceeratech.com" style="color: #2563eb; text-decoration: none;">voiceeratech.com</a>
        </div>
      </div>
    </div>
  `;
}

function getKycCustomerHtml(kyc: KycSubmission, pdfFilename: string, kycEmail: string): string {
  const isWholesale = kyc.category === "wholesaler";
  const categoryLabel = isWholesale ? "Wholesale Carrier Application" : "End-User KYC Application";
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; color: #0f172a; background-color: #f8fafc;">
      <div style="background-color: #0f172a; padding: 28px 24px; border-radius: 12px 12px 0 0; color: #ffffff;">
        <div style="display: inline-block; background-color: #10b981; color: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">
          Application Confirmed
        </div>
        <h1 style="margin: 0; font-size: 22px; font-weight: 700; line-height: 1.3;">Carrier Onboarding &amp; KYC Submission Received</h1>
        <p style="margin: 8px 0 0 0; font-size: 13px; color: #94a3b8;">Application Reference ID: <strong style="color: #38bdf8;">${kyc.referenceId}</strong></p>
      </div>

      <div style="border: 1px solid #e2e8f0; border-top: none; padding: 28px 24px; border-radius: 0 0 12px 12px; background: #ffffff;">
        <p style="font-size: 15px; margin-top: 0; color: #0f172a; line-height: 1.5;">Dear <strong>${kyc.signatoryName}</strong>,</p>
        <p style="font-size: 14px; color: #334155; line-height: 1.6;">
          Thank you for submitting your <strong>${categoryLabel}</strong> for <strong>${kyc.companyName}</strong>. Your onboarding documentation and electronic compliance attestations have been successfully logged.
        </p>

        <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 14px 16px; margin: 20px 0; font-size: 13px; color: #065f46;">
          📎 <strong>Official Certified PDF Attached:</strong> Your complete signed verification record (<code>${pdfFilename}</code>) is attached to this email for your corporate and legal compliance files.
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
          <tr>
            <td style="padding: 6px 0; color: #64748b; width: 160px; font-weight: 600;">Entity Legal Name:</td>
            <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${kyc.companyName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Application Ref ID:</td>
            <td style="padding: 6px 0; color: #0f172a; font-family: monospace;">${kyc.referenceId}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Authorized Signatory:</td>
            <td style="padding: 6px 0; color: #0f172a;">${kyc.signatoryName} (${kyc.signatoryTitle})</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Submission Date:</td>
            <td style="padding: 6px 0; color: #0f172a;">${kyc.signatureDate}</td>
          </tr>
        </table>

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
          <div style="font-size: 13px; color: #0f172a; font-weight: 600; margin-bottom: 6px;">Next Onboarding Steps:</div>
          <ol style="margin: 0; padding-left: 20px; font-size: 13px; color: #475569; line-height: 1.6;">
            <li>Compliance review of corporate tax IDs and regulatory attestation.</li>
            <li>Carrier NOC interconnect provisioning (Signaling IPs, SIP credentials, and trunk setup).</li>
            <li>Test call validation and commercial traffic activation.</li>
          </ol>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 12px; color: #64748b; text-align: center; line-height: 1.6;">
          <strong>Voice Era Tech LLC Carrier Compliance Desk</strong><br/>
          Direct: <a href="tel:+15123332777" style="color: #2563eb; text-decoration: none;">+1 (512) 333-2777</a> • Compliance: <a href="mailto:${kycEmail}" style="color: #2563eb; text-decoration: none;">${kycEmail}</a><br/>
          <a href="https://voiceeratech.com" style="color: #2563eb; text-decoration: none;">voiceeratech.com</a>
        </div>
      </div>
    </div>
  `;
}

export async function sendInquiryEmail(inquiry: Inquiry) {
  const supportEmail = process.env.SUPPORT_EMAIL || "support@voiceeratech.com";
  const fromEmail = process.env.SMTP_FROM || `"Voice Era Tech" <no-reply@voiceeratech.com>`;
  const transporter = getTransporter();

  // 1. Internal Team Email Template (To Us)
  const teamHtmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #111; line-height: 1.6;">
      <div style="background-color: #0f172a; padding: 20px; border-radius: 8px 8px 0 0; color: #fff;">
        <h2 style="margin: 0; font-size: 20px;">Voice Era Tech LLC - Direct Telephony Inquiry</h2>
        <p style="margin: 5px 0 0 0; font-size: 12px; color: #94a3b8;">Ticket ID: ${inquiry.id}</p>
      </div>
      <div style="border: 1px solid #e2e8f0; border-top: none; padding: 25px; border-radius: 0 0 8px 8px; background: #fafafa;">
        <h3 style="margin-top: 0; color: #0f172a;">Inquiry Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #64748b; font-size: 13px;">Full Name:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0f172a;">${inquiry.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b; font-size: 13px;">Corporate Email:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0f172a;"><a href="mailto:${inquiry.email}" style="color: #2563eb;">${inquiry.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b; font-size: 13px;">Contact Phone:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0f172a;">${inquiry.phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b; font-size: 13px;">Company Name:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0f172a;">${inquiry.company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b; font-size: 13px;">Received At:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0f172a;">${new Date(inquiry.createdAt).toLocaleString()}</td>
          </tr>
        </table>

        <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin-top: 15px;">
          <div style="font-weight: bold; font-size: 13px; color: #64748b; margin-bottom: 6px;">Message / Operation Requirements:</div>
          <div style="font-size: 14px; color: #1e293b; white-space: pre-wrap;">${inquiry.message}</div>
        </div>

        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
          Sent from Voice Era Tech Direct Transmission Engine • +1 (512) 333-2777 • support@voiceeratech.com • Admin Portal: <a href="https://voiceeratech.com/admin" style="color: #2563eb;">voiceeratech.com/admin</a>
        </div>
      </div>
    </div>
  `;

  // 2. Customer Confirmation Email Template (To User)
  const customerHtmlBody = getInquiryCustomerHtml(inquiry, supportEmail);

  if (transporter) {
    try {
      // Send Email 1: To Support Desk
      await transporter.sendMail({
        from: fromEmail,
        to: supportEmail,
        replyTo: inquiry.email,
        subject: `[New Inquiry] ${inquiry.company} - ${inquiry.name} (${inquiry.id})`,
        html: teamHtmlBody,
      });

      await recordMailLog({
        type: "inquiry",
        to: supportEmail,
        subject: `[New Inquiry] ${inquiry.company} - ${inquiry.name}`,
        hasAttachment: false,
        status: "sent",
      });

      // Send Email 2: Confirmation to User
      try {
        await transporter.sendMail({
          from: fromEmail,
          to: inquiry.email,
          replyTo: supportEmail,
          subject: `We received your inquiry - Voice Era Tech LLC [Ticket #${inquiry.id}]`,
          html: customerHtmlBody,
        });

        await recordMailLog({
          type: "inquiry",
          to: inquiry.email,
          subject: `Inquiry Confirmation - Ticket #${inquiry.id}`,
          hasAttachment: false,
          status: "sent",
        });
      } catch (clientMailErr) {
        console.error("Warning: Failed to send customer confirmation email:", clientMailErr);
        await recordMailLog({
          type: "inquiry",
          to: inquiry.email,
          subject: `Inquiry Confirmation - Ticket #${inquiry.id}`,
          hasAttachment: false,
          status: "simulated_awaiting_smtp",
          error: clientMailErr instanceof Error ? clientMailErr.message : String(clientMailErr),
        });
      }

      return { success: true, mode: "live" };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error("SMTP Error sending inquiry email to team:", errorMsg);
      await recordMailLog({
        type: "inquiry",
        to: supportEmail,
        subject: `[New Inquiry] ${inquiry.company} - ${inquiry.name}`,
        hasAttachment: false,
        status: "simulated_awaiting_smtp",
        error: errorMsg,
      });
      return { success: false, mode: "error", error: errorMsg };
    }
  } else {
    // Graceful simulation: record both logs in Admin Panel
    console.log(`[MAIL SANDBOX] Inquiry received for ${supportEmail} & confirmation for ${inquiry.email}. Live SMTP not configured. Stored in Admin Panel.`);
    
    // Log to Team
    await recordMailLog({
      type: "inquiry",
      to: supportEmail,
      subject: `[New Inquiry] ${inquiry.company} - ${inquiry.name}`,
      hasAttachment: false,
      status: "simulated_awaiting_smtp",
    });

    // Log to User
    await recordMailLog({
      type: "inquiry",
      to: inquiry.email,
      subject: `Inquiry Confirmation - Ticket #${inquiry.id}`,
      hasAttachment: false,
      status: "simulated_awaiting_smtp",
    });

    return { success: true, mode: "simulated" };
  }
}

export async function sendKycEmail(
  kyc: KycSubmission,
  pdfBuffer: Buffer,
  pdfFilename: string
) {
  const kycEmail = process.env.KYC_EMAIL || "kyc@voiceeratech.com";
  const fromEmail = process.env.SMTP_FROM || `"Voice Era Tech KYC" <kyc@voiceeratech.com>`;
  const transporter = getTransporter();

  const isWholesale = kyc.category === "wholesaler";
  const categoryLabel = isWholesale ? "Wholesale Carrier Application" : "End-User KYC Application";
  const badgeBg = isWholesale ? "#d97706" : "#2563eb";
  const services = Array.isArray(kyc.servicesRequested) ? kyc.servicesRequested.join(", ") : (isWholesale ? "Wholesale SIP Trunking" : "Direct VoIP Routes");

  // 1. Team Email (To Us / Compliance)
  const teamHtmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; color: #111; line-height: 1.6;">
      <div style="background-color: #0f172a; padding: 22px; border-radius: 8px 8px 0 0; color: #fff;">
        <div style="display: inline-block; background-color: ${badgeBg}; color: #fff; font-size: 11px; font-weight: bold; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; margin-bottom: 8px;">
          ${categoryLabel}
        </div>
        <h2 style="margin: 0; font-size: 22px;">New ${categoryLabel} Received</h2>
        <p style="margin: 6px 0 0 0; font-size: 13px; color: #94a3b8;">Ref ID: <strong>${kyc.referenceId}</strong> | Date: ${new Date(kyc.createdAt).toLocaleDateString()}</p>
      </div>

      <div style="border: 1px solid #e2e8f0; border-top: none; padding: 25px; border-radius: 0 0 8px 8px; background: #fafafa;">
        <div style="background: #e0f2fe; border: 1px solid #bae6fd; border-radius: 6px; padding: 12px 16px; margin-bottom: 20px; font-size: 13px; color: #0369a1;">
          📎 <strong>Official KYC PDF Attached:</strong> The complete signed and certified onboarding verification document (${pdfFilename}) has been generated and attached to this email.
        </div>

        <h3 style="margin-top: 0; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">Entity &amp; Signatory Summary</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 6px 0; font-weight: bold; width: 160px; color: #64748b; font-size: 13px;">Company Legal Name:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: bold;">${kyc.companyName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #64748b; font-size: 13px;">Registration / Tax ID:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a;">${kyc.registrationNumber} (Tax: ${kyc.taxId})</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #64748b; font-size: 13px;">Jurisdiction / Country:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a;">${kyc.country}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #64748b; font-size: 13px;">Corporate Website:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a;"><a href="${kyc.website}" target="_blank" style="color: #2563eb;">${kyc.website}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #64748b; font-size: 13px;">Authorized Signatory:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a;">${kyc.signatoryName} (${kyc.signatoryTitle})</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #64748b; font-size: 13px;">Signatory Email:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a;"><a href="mailto:${kyc.signatoryEmail}" style="color: #2563eb;">${kyc.signatoryEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #64748b; font-size: 13px;">Signatory Phone:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a;">${kyc.signatoryPhone}</td>
          </tr>
        </table>

        <h3 style="margin-top: 15px; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">Carrier Traffic Profile</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 6px 0; font-weight: bold; width: 160px; color: #64748b; font-size: 13px;">Services Requested:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a;">${services}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #64748b; font-size: 13px;">Monthly Volume:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a;">${kyc.estimatedMonthlyMinutes} (${kyc.concurrentChannels} concurrent channels)</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #64748b; font-size: 13px;">Traffic Profile:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #0f172a;">${kyc.trafficType}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #64748b; font-size: 13px;">Signaling IPs:</td>
            <td style="padding: 6px 0; font-size: 13px; font-family: monospace; color: #0f172a;">${kyc.signalingIps}</td>
          </tr>
        </table>

        <div style="background: #f1f5f9; border-radius: 6px; padding: 12px; margin-top: 15px; font-size: 12px; color: #475569;">
          <strong>Electronic Attestation:</strong> STIR/SHAKEN Level-A, TCPA / TSR compliance, and truth-in-traffic agreements were confirmed and digitally signed by <em>${kyc.digitalSignature}</em> on ${kyc.signatureDate}.
        </div>

        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
          Voice Era Tech Carrier Compliance Team • +1 (512) 333-2777 • kyc@voiceeratech.com • Review in Admin Panel: <a href="https://voiceeratech.com/admin" style="color: #2563eb;">voiceeratech.com/admin</a>
        </div>
      </div>
    </div>
  `;

  // 2. Customer Confirmation Email (To Signatory with PDF)
  const customerHtmlBody = getKycCustomerHtml(kyc, pdfFilename, kycEmail);

  if (transporter) {
    try {
      // Send Email 1: To Compliance Desk
      await transporter.sendMail({
        from: fromEmail,
        to: kycEmail,
        replyTo: kyc.signatoryEmail,
        subject: `[Carrier KYC Application] ${kyc.companyName} (${kyc.referenceId})`,
        html: teamHtmlBody,
        attachments: [
          {
            filename: pdfFilename,
            content: pdfBuffer,
            contentType: "application/pdf",
          },
        ],
      });

      await recordMailLog({
        type: "kyc",
        to: kycEmail,
        subject: `[Carrier KYC Application] ${kyc.companyName}`,
        hasAttachment: true,
        status: "sent",
      });

      // Send Email 2: Confirmation & PDF Copy to Signatory
      try {
        await transporter.sendMail({
          from: fromEmail,
          to: kyc.signatoryEmail,
          replyTo: kycEmail,
          subject: `Carrier KYC Submission Confirmation - Voice Era Tech LLC [Ref: ${kyc.referenceId}]`,
          html: customerHtmlBody,
          attachments: [
            {
              filename: pdfFilename,
              content: pdfBuffer,
              contentType: "application/pdf",
            },
          ],
        });

        await recordMailLog({
          type: "kyc",
          to: kyc.signatoryEmail,
          subject: `Carrier KYC Confirmation - Ref: ${kyc.referenceId}`,
          hasAttachment: true,
          status: "sent",
        });
      } catch (clientMailErr) {
        console.error("Warning: Failed to send customer KYC confirmation email:", clientMailErr);
        await recordMailLog({
          type: "kyc",
          to: kyc.signatoryEmail,
          subject: `Carrier KYC Confirmation - Ref: ${kyc.referenceId}`,
          hasAttachment: true,
          status: "simulated_awaiting_smtp",
          error: clientMailErr instanceof Error ? clientMailErr.message : String(clientMailErr),
        });
      }

      return { success: true, mode: "live" };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error("SMTP Error sending KYC email to compliance:", errorMsg);
      await recordMailLog({
        type: "kyc",
        to: kycEmail,
        subject: `[Carrier KYC Application] ${kyc.companyName}`,
        hasAttachment: true,
        status: "simulated_awaiting_smtp",
        error: errorMsg,
      });
      return { success: false, mode: "error", error: errorMsg };
    }
  } else {
    // Graceful simulation: record both logs in Admin Panel
    console.log(`[MAIL SANDBOX] KYC Application received for ${kycEmail} & confirmation for ${kyc.signatoryEmail} with PDF (${pdfFilename}). Live SMTP not configured. Stored in Admin Panel.`);
    
    // Log to Compliance Desk
    await recordMailLog({
      type: "kyc",
      to: kycEmail,
      subject: `[Carrier KYC Application] ${kyc.companyName}`,
      hasAttachment: true,
      status: "simulated_awaiting_smtp",
    });

    // Log to Signatory
    await recordMailLog({
      type: "kyc",
      to: kyc.signatoryEmail,
      subject: `Carrier KYC Confirmation - Ref: ${kyc.referenceId}`,
      hasAttachment: true,
      status: "simulated_awaiting_smtp",
    });

    return { success: true, mode: "simulated" };
  }
}

