export const metadata = { title: "Kontak | Jatayu Pomosda" };

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Kontak Kami</h1>
      <p className="mt-4 text-gray-700">
        Silakan hubungi kami melalui informasi berikut untuk pertanyaan seputar pendaftaran,
        kegiatan, atau kerja sama dengan Pondok Jatayu Pomosda.
      </p>

      <div className="mt-8 space-y-4 rounded-lg border border-gray-200 p-6">
        <div>
          <p className="text-sm font-semibold text-gray-500">Alamat</p>
          <p className="text-gray-800">
            Pondok Modern Sumber Daya At-Taqwa (POMOSDA), Jl. KH Wachid Hasyim No. 312,
            Tanjunganom, Kabupaten Nganjuk, Jawa Timur
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500">Email</p>
          <p className="text-gray-800">info@jatayupomosda.id</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500">Telepon / WhatsApp</p>
          <p className="text-gray-800">+62 812-0000-0000</p>
        </div>
      </div>
    </div>
  );
}
