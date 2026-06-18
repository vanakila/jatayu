"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { saveUploadedFile } from "@/lib/upload";
import { slugify } from "@/lib/types";

function revalidatePublicPaths(type: string, slug?: string) {
  revalidatePath("/");
  revalidatePath(type === "BERITA" ? "/berita" : "/artikel");
  if (slug) revalidatePath(`/${type === "BERITA" ? "berita" : "artikel"}/${slug}`);
}

export async function createPost(formData: FormData) {
  const type = formData.get("type") as string;
  const title = formData.get("title") as string;
  const excerpt = (formData.get("excerpt") as string) || null;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";
  const coverFile = formData.get("coverImage") as File | null;

  let coverImage: string | null = null;
  if (coverFile && coverFile.size > 0) {
    coverImage = await saveUploadedFile(coverFile);
  }

  const baseSlug = slugify(title);
  let slug = baseSlug;
  let counter = 1;
  while (await prisma.post.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${counter++}`;
  }

  await prisma.post.create({
    data: { type, title, slug, excerpt, content, coverImage, published },
  });

  revalidatePublicPaths(type, slug);
  redirect("/admin/posts");
}

export async function updatePost(id: string, formData: FormData) {
  const existing = await prisma.post.findUniqueOrThrow({ where: { id } });

  const type = formData.get("type") as string;
  const title = formData.get("title") as string;
  const excerpt = (formData.get("excerpt") as string) || null;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";
  const coverFile = formData.get("coverImage") as File | null;

  let coverImage = existing.coverImage;
  if (coverFile && coverFile.size > 0) {
    coverImage = await saveUploadedFile(coverFile);
  }

  await prisma.post.update({
    where: { id },
    data: { type, title, excerpt, content, published, coverImage },
  });

  revalidatePublicPaths(type, existing.slug);
  revalidatePublicPaths(existing.type, existing.slug);
  redirect("/admin/posts");
}

export async function deletePost(id: string) {
  const post = await prisma.post.delete({ where: { id } });
  revalidatePublicPaths(post.type, post.slug);
  redirect("/admin/posts");
}
