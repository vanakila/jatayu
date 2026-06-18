import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";

export const metadata = { title: "Berita | Jatayu Pomosda" };

export default async function BeritaPage() {
  const posts = await prisma.post.findMany({
    where: { type: "BERITA", published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Berita</h1>
      <p className="mt-2 text-gray-600">Kabar dan kegiatan terbaru dari Pondok Jatayu Pomosda.</p>

      {posts.length === 0 ? (
        <p className="mt-8 text-gray-500">Belum ada berita.</p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              basePath="berita"
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              createdAt={post.createdAt}
            />
          ))}
        </div>
      )}
    </div>
  );
}
