import { prisma } from "@/lib/prisma";
import { updateVisiMisi } from "./actions";

export default async function AdminVisiMisiPage() {
  const visiMisi = await prisma.visiMisi.findFirst();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Visi dan Misi</h1>
      <p className="mt-1 text-sm text-gray-500">
        Isi bebas (boleh ganti baris baru untuk paragraf), tampil langsung di halaman publik
        /profil/visi-misi.
      </p>

      <form action={updateVisiMisi} className="mt-6 max-w-2xl space-y-4">
        <textarea
          name="content"
          rows={20}
          required
          defaultValue={visiMisi?.content ?? ""}
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
