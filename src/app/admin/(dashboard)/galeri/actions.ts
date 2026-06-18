"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { saveUploadedFile } from "@/lib/upload";

export async function createGalleryImage(formData: FormData) {
  const file = formData.get("image") as File | null;
  const caption = (formData.get("caption") as string) || null;

  if (!file || file.size === 0) return;

  const url = await saveUploadedFile(file);
  await prisma.galleryImage.create({ data: { url, caption } });

  revalidatePath("/galeri");
  revalidatePath("/admin/galeri");
}

export async function deleteGalleryImage(id: string) {
  await prisma.galleryImage.delete({ where: { id } });
  revalidatePath("/galeri");
  revalidatePath("/admin/galeri");
}
