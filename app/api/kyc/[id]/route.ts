import { NextRequest, NextResponse } from "next/server";
import { getKycById, updateKyc, deleteKyc } from "@/lib/db";
import { requireAdminAuth } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = requireAdminAuth(req);
  if (!auth.authenticated) {
    return auth.response;
  }

  try {
    const { id } = await params;
    const kyc = await getKycById(id);
    if (!kyc) {
      return NextResponse.json({ success: false, error: "KYC record not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, kyc });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to fetch KYC";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = requireAdminAuth(req);
  if (!auth.authenticated) {
    return auth.response;
  }

  try {
    const { id } = await params;
    const body = await req.json();
    const { status, adminNotes } = body;

    const updated = await updateKyc(id, { status, adminNotes });
    if (!updated) {
      return NextResponse.json({ success: false, error: "KYC record not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, kyc: updated });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to update KYC";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = requireAdminAuth(req);
  if (!auth.authenticated) {
    return auth.response;
  }

  try {
    const { id } = await params;
    const deleted = await deleteKyc(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: "KYC record not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "KYC record deleted successfully" });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to delete KYC";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
