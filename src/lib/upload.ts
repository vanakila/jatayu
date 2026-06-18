import { put } from "@vercel/blob";

export async function saveUploadedFile(file: File): Promise<string> {
  const blob = await put(file.name, file, { access: "public" });
  return blob.url;
}
