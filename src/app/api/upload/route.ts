import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { saveUploadedFile } from "@/lib/upload";

export async function POST(request: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file || file.size === 0) {
    return NextResponse.json({ error: "Tidak ada file" }, { status: 400 });
  }

  try {
    const url = await saveUploadedFile(file);
    return NextResponse.json({ url });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Gagal upload" },
      { status: 500 },
    );
  }
}
