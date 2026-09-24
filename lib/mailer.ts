import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";
import { DATA_DIR, Inquiry, KycSubmission } from "./db";

const MAIL_LOGS_FILE = path.join(DATA_DIR, "mail-logs.json");

interface MailLog {
  id: string;
  type: "inquiry" | "kyc";
  to: string;
  subject: string;
  sentAt: string;
  hasAttachment: boolean;
  status: "sent" | "simulated_awaiting_smtp";
  error?: string;
}

async function recordMailLog(log: Omit<MailLog, "id" | "sentAt">) {
  try {
    let logs: MailLog[] = [];
    try {
      const data = await fs.readFile(MAIL_LOGS_FILE, "utf-8");
      logs = JSON.parse(data);
    } catch {
      logs = [];
    }
    const newEntry: MailLog = {
      ...log,
      id: `mail_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      sentAt: new Date().toISOString(),
    };
    logs.unshift(newEntry);
    await fs.writeFile(MAIL_LOGS_FILE, JSON.stringify(logs.slice(0, 100), null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to record mail log:", err);
  }
}

export async function getMailLogs(): Promise<MailLog[]> {
  try {
    const data = await fs.readFile(MAIL_LOGS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

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

export async function sendInquiryEmail(inquiry: Inquiry) {
  const supportEmail = process.env.SUPPORT_EMAIL || "support@voiceeratech.com";
  const fromEmail = process.env.SMTP_FROM || `"Voice Era Tech" <no-reply@voiceeratech.com>`;
  const transporter = getTransporter();

  const htmlBody = `
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

  if (transporter) {
    try {
      await transporter.sendMail({
        from: fromEmail,
        to: supportEmail,
        replyTo: inquiry.email,
        subject: `[New Inquiry] ${inquiry.company} - ${inquiry.name} (${inquiry.id})`,
        html: htmlBody,
      });
      await recordMailLog({
        type: "inquiry",
        to: supportEmail,
        subject: `[New Inquiry] ${inquiry.company} - ${inquiry.name}`,
        hasAttachment: false,
        status: "sent",
      });
      return { success: true, mode: "live" };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error("SMTP Error sending inquiry email:", errorMsg);
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
    // Graceful simulation: record in log
    console.log(`[MAIL SANDBOX] Inquiry received for ${supportEmail}. Live SMTP not configured. Stored in Admin Panel.`);
    await recordMailLog({
      type: "inquiry",
      to: supportEmail,
      subject: `[New Inquiry] ${inquiry.company} - ${inquiry.name}`,
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

  const htmlBody = `
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

  if (transporter) {
    try {
      await transporter.sendMail({
        from: fromEmail,
        to: kycEmail,
        replyTo: kyc.signatoryEmail,
        subject: `[Carrier KYC Application] ${kyc.companyName} (${kyc.referenceId})`,
        html: htmlBody,
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
      return { success: true, mode: "live" };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error("SMTP Error sending KYC email:", errorMsg);
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
    console.log(`[MAIL SANDBOX] KYC Application received for ${kycEmail} with PDF attachment (${pdfFilename}). Live SMTP not configured. Stored in Admin Panel.`);
    await recordMailLog({
      type: "kyc",
      to: kycEmail,
      subject: `[Carrier KYC Application] ${kyc.companyName}`,
      hasAttachment: true,
      status: "simulated_awaiting_smtp",
    });
    return { success: true, mode: "simulated" };
  }
}
