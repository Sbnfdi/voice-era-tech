import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { targetEmail } = await req.json();
    const recipient = targetEmail || process.env.SUPPORT_EMAIL || "support@voiceeratech.com";

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      return NextResponse.json({
        success: false,
        mode: "simulated",
        message: "SMTP is running in sandbox simulation mode. To enable live email dispatch, add SMTP_HOST, SMTP_USER, and SMTP_PASS to your .env.local file.",
      });
    }

    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Voice Era Tech Test" <${user}>`,
      to: recipient,
      subject: `[Test] Voice Era Tech SMTP Verification (${new Date().toLocaleTimeString()})`,
      text: `Hello,\n\nThis is a verification test email from Voice Era Tech LLC administrative portal.\nYour SMTP configuration is working perfectly.\n\nTime: ${new Date().toISOString()}`,
    });

    return NextResponse.json({
      success: true,
      mode: "live",
      message: `Test email successfully delivered to ${recipient}`,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "SMTP verification failed";
    return NextResponse.json({ success: false, mode: "error", error: msg }, { status: 500 });
  }
}
