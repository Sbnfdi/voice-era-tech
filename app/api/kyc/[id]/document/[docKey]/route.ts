import { NextRequest, NextResponse } from "next/server";
import { getKycDocument } from "@/lib/db";
import { requireAdminAuth } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; docKey: string }> }
) {
  // 1. Authenticate administrative operator
  const auth = requireAdminAuth(req);
  if (!auth.authenticated) {
    return auth.response;
  }

  try {
    const { id, docKey } = await params;
    const doc = await getKycDocument(id, docKey);

    if (!doc) {
      return NextResponse.json(
        { success: false, error: "Requested verification document not found." },
        { status: 404 }
      );
    }

    // 2. Parse Base64 data URI (data:image/png;base64,...)
    let mimeType = doc.fileType || "application/octet-stream";
    let base64Content = doc.data;

    const dataUriMatch = doc.data.match(/^data:([^;]+);base64,(.+)$/s);
    if (dataUriMatch) {
      mimeType = dataUriMatch[1];
      base64Content = dataUriMatch[2];
    }

    const fileBuffer = Buffer.from(base64Content, "base64");
    const isDownload = req.nextUrl.searchParams.get("download") === "1";
    const dispositionType = isDownload ? "attachment" : "inline";
    const safeFilename = encodeURIComponent(doc.fileName).replace(/['()]/g, escape);

    return new NextResponse(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        "Content-Type": mimeType,
        "Content-Disposition": `${dispositionType}; filename="${doc.fileName}"; filename*=UTF-8''${safeFilename}`,
        "Content-Length": String(fileBuffer.length),
        "Cache-Control": "private, no-cache, no-store, must-revalidate",
      },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to retrieve KYC document";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
