"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function updateVisiMisi(formData: FormData) {
  const content = formData.get("content") as string;

  await prisma.visiMisi.upsert({
    where: { id: "main-visimisi" },
    update: { content },
    create: { id: "main-visimisi", content },
  });

  revalidatePath("/profil/visi-misi");
  revalidatePath("/admin/visi-misi");
}
