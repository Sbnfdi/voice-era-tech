import { NextRequest, NextResponse } from "next/server";
import { createInquiry, getInquiries } from "@/lib/db";
import { sendInquiryEmail } from "@/lib/mailer";

export async function GET() {
  try {
    const inquiries = await getInquiries();
    return NextResponse.json({ success: true, inquiries });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to fetch inquiries";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, Company, Message)." },
        { status: 400 }
      );
    }

    // Save inquiry to persistent storage
    const inquiry = await createInquiry({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone || "").trim(),
      company: String(company).trim(),
      message: String(message).trim(),
    });

    // Send email to support and confirmation
    const emailResult = await sendInquiryEmail(inquiry);

    return NextResponse.json({
      success: true,
      inquiry,
      emailStatus: emailResult.mode,
      message: "Inquiry successfully submitted and queued for voice specialist review.",
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to submit inquiry";
    console.error("Error submitting inquiry:", error);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
