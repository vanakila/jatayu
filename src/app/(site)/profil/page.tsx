import { prisma } from "@/lib/prisma";

export const metadata = { title: "Profil Pondok | Jatayu Pomosda" };

export default async function ProfilPage() {
  const profile = await prisma.profile.findFirst();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Profil Pondok Jatayu Pomosda</h1>
      <div className="mt-4 space-y-4 whitespace-pre-line text-gray-700">
        {profile?.content ?? "Profil belum diisi."}
      </div>
    </div>
  );
}
