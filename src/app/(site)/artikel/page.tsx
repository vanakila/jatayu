import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";

export const metadata = { title: "Artikel | Jatayu Pomosda" };

export default async function ArtikelPage() {
  const posts = await prisma.post.findMany({
    where: { type: "ARTIKEL", published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Artikel</h1>
      <p className="mt-2 text-gray-600">Tulisan dan opini keislaman dari Pondok Jatayu Pomosda.</p>

      {posts.length === 0 ? (
        <p className="mt-8 text-gray-500">Belum ada artikel.</p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              basePath="artikel"
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              createdAt={post.createdAt}
              coverImage={post.coverImage}
            />
          ))}
        </div>
      )}
    </div>
  );
}
