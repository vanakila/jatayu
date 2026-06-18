import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/types";

export default async function ArtikelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post || post.type !== "ARTIKEL" || !post.published) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm font-medium text-gray-500">{formatDate(post.createdAt)}</p>
      <h1 className="mt-1 text-3xl font-bold text-gray-900">{post.title}</h1>
      {post.coverImage && (
        <div className="relative mt-6 aspect-video overflow-hidden rounded-lg">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>
      )}
      <div className="mt-6 space-y-4 whitespace-pre-line text-gray-800">{post.content}</div>
    </article>
  );
}
