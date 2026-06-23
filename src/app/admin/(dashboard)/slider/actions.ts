"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

const MAX_SLIDES = 6;

export async function createHeroSlide(formData: FormData) {
  const imageUrl = formData.get("url") as string;
  const imageUrlMobile = (formData.get("urlMobile") as string) || null;
  if (!imageUrl) return;

  const count = await prisma.heroSlide.count();
  if (count >= MAX_SLIDES) {
    throw new Error(`Maksimal ${MAX_SLIDES} gambar slider. Hapus salah satu dulu.`);
  }

  await prisma.heroSlide.create({ data: { imageUrl, imageUrlMobile } });
  revalidatePath("/");
  revalidatePath("/admin/slider");
}

export async function deleteHeroSlide(id: string) {
  await prisma.heroSlide.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/slider");
}
