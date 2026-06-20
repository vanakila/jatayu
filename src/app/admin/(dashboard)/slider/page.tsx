import { prisma } from "@/lib/prisma";
import GalleryUploadForm from "@/components/admin/GalleryUploadForm";
import { createHeroSlide, deleteHeroSlide } from "./actions";

export default async function AdminSliderPage() {
  const slides = await prisma.heroSlide.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Slider Beranda</h1>
      <p className="mt-1 text-sm text-gray-500">
        Gambar yang tampil bergeser di bagian atas halaman beranda. Maksimal 6 gambar (
        {slides.length}/6 terisi).
      </p>

      {slides.length < 6 && <GalleryUploadForm action={createHeroSlide} showCaption={false} />}

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {slides.map((slide) => (
          <div key={slide.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <img src={slide.imageUrl} alt="" className="aspect-video w-full object-cover" />
            <form action={deleteHeroSlide.bind(null, slide.id)} className="p-2">
              <button type="submit" className="text-xs font-semibold text-red-600 hover:underline">
                Hapus
              </button>
            </form>
          </div>
        ))}
        {slides.length === 0 && <p className="text-gray-500">Belum ada gambar slider.</p>}
      </div>
    </div>
  );
}
