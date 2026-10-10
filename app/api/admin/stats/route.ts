import { NextRequest, NextResponse } from "next/server";
import { getInquiries, getKycList } from "@/lib/db";
import { getMailLogs } from "@/lib/mailer";
import { requireAdminAuth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const auth = requireAdminAuth(req);
  if (!auth.authenticated) {
    return auth.response;
  }

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

    const tursoConfigured = Boolean(process.env.TURSO_DATABASE_URL);
    const databaseType = tursoConfigured ? "Turso Cloud (libSQL)" : "Local SQLite (File Storage)";
    const databaseUrlMasked = process.env.TURSO_DATABASE_URL
      ? process.env.TURSO_DATABASE_URL.replace(/\/\/.*@/, "//***@")
      : "file:data/voice_era_tech.db";

    return NextResponse.json({
      success: true,
      stats: {
        inquiries: inquiryStats,
        kyc: kycStats,
        mailLogsCount: mailLogs.length,
        smtpConfigured,
        tursoConfigured,
        databaseType,
        databaseUrlMasked,
        supportEmail: process.env.SUPPORT_EMAIL || "support@voiceeratech.com",
        kycEmail: process.env.KYC_EMAIL || "kyc@voiceeratech.com",
      },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to load stats";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
