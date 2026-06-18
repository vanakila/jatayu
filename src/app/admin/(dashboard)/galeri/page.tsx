import { prisma } from "@/lib/prisma";
import GalleryUploadForm from "@/components/admin/GalleryUploadForm";
import { createGalleryImage, deleteGalleryImage } from "./actions";

export default async function AdminGaleriPage() {
  const images = await prisma.galleryImage.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Galeri</h1>

      <GalleryUploadForm action={createGalleryImage} />

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img) => (
          <div key={img.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <img src={img.url} alt={img.caption ?? ""} className="aspect-square w-full object-cover" />
            <div className="flex items-center justify-between p-2">
              <p className="truncate text-xs text-gray-600">{img.caption}</p>
              <form action={deleteGalleryImage.bind(null, img.id)}>
                <button type="submit" className="text-xs font-semibold text-red-600 hover:underline">
                  Hapus
                </button>
              </form>
            </div>
          </div>
        ))}
        {images.length === 0 && <p className="text-gray-500">Belum ada foto.</p>}
      </div>
    </div>
  );
}
