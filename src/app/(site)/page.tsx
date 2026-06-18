import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import PostCard from "@/components/PostCard";

export default async function HomePage() {
  const [berita, artikel] = await Promise.all([
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
  ]);

  return (
    <div>
      <section className="bg-black text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center">
          <Image src="/logo.png" alt="Logo Jatayu Pomosda" width={120} height={120} />
          <h1 className="text-3xl font-bold text-yellow-400 sm:text-4xl">
            Pondok Jatayu Pomosda
          </h1>
          <p className="max-w-2xl text-gray-300">
            Cakra Surya Dinata &mdash; berlandaskan Alkitab-Jamaah, Alhikmah-Tatanan, dan
            Annubuwah-Wahyu dalam mendidik generasi santri yang berakhlak dan berilmu.
          </p>
          <div className="flex gap-3">
            <Link
              href="/profil"
              className="rounded-md bg-yellow-500 px-5 py-2 font-semibold text-black transition hover:bg-yellow-400"
            >
              Profil Pondok
            </Link>
            <Link
              href="/kontak"
              className="rounded-md border border-yellow-500 px-5 py-2 font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              Kontak Kami
            </Link>
          </div>
        </div>
      </section>

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
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
