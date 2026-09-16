import { NextRequest, NextResponse } from "next/server";
import { getKycById, updateKyc } from "@/lib/db";
import { generateKycPdf } from "@/lib/pdf";
import fs from "fs/promises";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const kyc = await getKycById(id);

    if (!kyc) {
      return NextResponse.json({ success: false, error: "KYC record not found" }, { status: 404 });
    }

    let fileBuffer: Buffer | null = null;

    // Check if existing PDF is on disk
    if (kyc.pdfPath) {
      try {
        fileBuffer = await fs.readFile(kyc.pdfPath);
      } catch {
        fileBuffer = null;
      }
    }

    // If not found on disk, regenerate dynamically!
    if (!fileBuffer) {
      const generated = await generateKycPdf(kyc);
      fileBuffer = generated.buffer;
      await updateKyc(kyc.id, { pdfPath: generated.filePath });
    }

    const filename = `${kyc.referenceId}.pdf`;

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename}"`,
        "Cache-Control": "no-cache",
      },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to load KYC PDF";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
