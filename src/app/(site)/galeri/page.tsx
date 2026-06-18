import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Galeri | Jatayu Pomosda" };

export default async function GaleriPage() {
  const images = await prisma.galleryImage.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Galeri</h1>
      <p className="mt-2 text-gray-600">Dokumentasi kegiatan Pondok Jatayu Pomosda.</p>

      {images.length === 0 ? (
        <p className="mt-8 text-gray-500">Belum ada foto.</p>
      ) : (
        <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img) => (
            <figure key={img.id} className="overflow-hidden rounded-lg border border-gray-200">
              <div className="relative aspect-square">
                <Image src={img.url} alt={img.caption ?? "Galeri Jatayu Pomosda"} fill className="object-cover" />
              </div>
              {img.caption && (
                <figcaption className="px-2 py-1 text-xs text-gray-600">{img.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
