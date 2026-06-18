import { prisma } from "@/lib/prisma";
import { updateProfile } from "./actions";

export default async function AdminProfilPage() {
  const profile = await prisma.profile.findFirst();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Profil Pondok</h1>
      <p className="mt-1 text-sm text-gray-500">
        Isi bebas (boleh ganti baris baru untuk paragraf), tampil langsung di halaman publik
        /profil.
      </p>

      <form action={updateProfile} className="mt-6 max-w-2xl space-y-4">
        <textarea
          name="content"
          rows={20}
          required
          defaultValue={profile?.content ?? ""}
          className="w-full rounded-md border border-gray-300 px-3 py-2 font-mono text-sm focus:border-yellow-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-md bg-yellow-500 px-5 py-2 font-semibold text-black hover:bg-yellow-400"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
