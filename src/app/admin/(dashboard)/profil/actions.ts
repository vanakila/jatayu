"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function updateProfile(formData: FormData) {
  const content = formData.get("content") as string;

  await prisma.profile.upsert({
    where: { id: "main-profile" },
    update: { content },
    create: { id: "main-profile", content },
  });

  revalidatePath("/profil");
  revalidatePath("/admin/profil");
}
