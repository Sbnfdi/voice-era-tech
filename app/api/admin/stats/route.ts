import { NextResponse } from "next/server";
import { getInquiries, getKycList } from "@/lib/db";
import { getMailLogs } from "@/lib/mailer";

export async function GET() {
  try {
    const inquiries = await getInquiries();
    const kycs = await getKycList();
    const mailLogs = await getMailLogs();

    const inquiryStats = {
      total: inquiries.length,
      new: inquiries.filter((i) => i.status === "new").length,
      contacted: inquiries.filter((i) => i.status === "contacted").length,
      in_progress: inquiries.filter((i) => i.status === "in_progress").length,
      closed: inquiries.filter((i) => i.status === "closed").length,
    };

    const kycStats = {
      total: kycs.length,
      pending: kycs.filter((k) => k.status === "pending").length,
      under_review: kycs.filter((k) => k.status === "under_review").length,
      approved: kycs.filter((k) => k.status === "approved").length,
      rejected: kycs.filter((k) => k.status === "rejected").length,
      info_requested: kycs.filter((k) => k.status === "info_requested").length,
    };

    const smtpConfigured = Boolean(
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
    );

    return NextResponse.json({
      success: true,
      stats: {
        inquiries: inquiryStats,
        kyc: kycStats,
        mailLogsCount: mailLogs.length,
        smtpConfigured,
        supportEmail: process.env.SUPPORT_EMAIL || "support@voiceeratech.com",
        kycEmail: process.env.KYC_EMAIL || "kyc@voiceeratech.com",
      },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to load stats";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
