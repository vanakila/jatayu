import { prisma } from "@/lib/prisma";

export default async function AdminDashboardPage() {
  const [beritaCount, artikelCount, galeriCount] = await Promise.all([
    prisma.post.count({ where: { type: "BERITA" } }),
    prisma.post.count({ where: { type: "ARTIKEL" } }),
    prisma.galleryImage.count(),
  ]);

  const cards = [
    { label: "Berita", value: beritaCount },
    { label: "Artikel", value: artikelCount },
    { label: "Foto Galeri", value: galeriCount },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <div key={card.label} className="rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">{card.label}</p>
            <p className="mt-1 text-3xl font-bold text-gray-900">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
