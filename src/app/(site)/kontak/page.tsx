export const metadata = { title: "Kontak | Jatayu Pomosda" };

const ADDRESS =
  "Pondok Modern Sumber Daya At-Taqwa (POMOSDA), Jl. KH Wachid Hasyim No. 312, Tanjunganom, Kabupaten Nganjuk, Jawa Timur";

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Kontak Kami</h1>
      <p className="mt-4 text-gray-700">
        Silakan hubungi kami melalui informasi berikut untuk pertanyaan seputar pendaftaran,
        kegiatan, atau kerja sama dengan Pondok Jatayu Pomosda.
      </p>

      <div className="mt-8 space-y-4 rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-yellow-600">Informasi Kontak</h2>
        <div>
          <p className="text-sm font-semibold text-gray-500">Alamat</p>
          <p className="text-gray-800">{ADDRESS}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500">Email</p>
          <p className="text-gray-800">yayasanylm@gmail.com</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500">Telepon / WhatsApp</p>
          <p className="text-gray-800">+62 852-3291-2963</p>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
        <iframe
          title="Lokasi Pondok Jatayu Pomosda"
          src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
