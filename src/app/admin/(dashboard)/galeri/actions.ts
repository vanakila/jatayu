"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function createGalleryImage(formData: FormData) {
  const url = formData.get("url") as string;
  const caption = (formData.get("caption") as string) || null;

  if (!url) return;

  await prisma.galleryImage.create({ data: { url, caption } });

  revalidatePath("/galeri");
  revalidatePath("/admin/galeri");
}

export async function deleteGalleryImage(id: string) {
  await prisma.galleryImage.delete({ where: { id } });
  revalidatePath("/galeri");
  revalidatePath("/admin/galeri");
}
