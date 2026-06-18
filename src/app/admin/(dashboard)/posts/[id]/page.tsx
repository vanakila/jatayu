import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PostForm from "@/components/admin/PostForm";
import { updatePost } from "../actions";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });

  if (!post) notFound();

  const action = updatePost.bind(null, id);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Edit Berita / Artikel</h1>
      <div className="mt-6">
        <PostForm action={action} defaultValues={post} submitLabel="Perbarui" />
      </div>
    </div>
  );
}
