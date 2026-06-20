import Link from "next/link";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";
import HeroSlider from "@/components/HeroSlider";
import SocialLinks from "@/components/SocialLinks";

export default async function HomePage() {
  const [berita, artikel, slides] = await Promise.all([
    prisma.post.findMany({
      where: { type: "BERITA", published: true },
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
    prisma.post.findMany({
      where: { type: "ARTIKEL", published: true },
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
    prisma.heroSlide.findMany({ orderBy: { createdAt: "asc" } }),
  ]);

  return (
    <div>
      <HeroSlider images={slides.map((s) => s.imageUrl)} />

      <SocialLinks />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Berita Terbaru</h2>
          <Link href="/berita" className="text-sm font-semibold text-yellow-600 hover:underline">
            Lihat semua &rarr;
          </Link>
        </div>
        {berita.length === 0 ? (
          <p className="text-gray-500">Belum ada berita.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {berita.map((post) => (
              <PostCard
                key={post.id}
                basePath="berita"
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                createdAt={post.createdAt}
                coverImage={post.coverImage}
              />
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Artikel Pilihan</h2>
          <Link href="/artikel" className="text-sm font-semibold text-yellow-600 hover:underline">
            Lihat semua &rarr;
          </Link>
        </div>
        {artikel.length === 0 ? (
          <p className="text-gray-500">Belum ada artikel.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artikel.map((post) => (
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
      </section>
    </div>
  );
}
