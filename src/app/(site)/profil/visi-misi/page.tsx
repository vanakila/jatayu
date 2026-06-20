import { prisma } from "@/lib/prisma";

export const metadata = { title: "Visi dan Misi | Jatayu Pomosda" };

export default async function VisiMisiPage() {
  const visiMisi = await prisma.visiMisi.findFirst();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Visi dan Misi</h1>
      <div className="mt-4 space-y-4 whitespace-pre-line text-gray-700">
        {visiMisi?.content ?? "Visi dan misi belum diisi."}
      </div>
    </div>
  );
}
