export const metadata = { title: "Profil Pondok | Jatayu Pomosda" };

export default function ProfilPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Profil Pondok Jatayu Pomosda</h1>
      <p className="mt-4 text-gray-700">
        Pondok Jatayu Pomosda merupakan bagian dari Pondok Modern Sumber Daya Atstaqwa (Pomosda)
        yang menaungi satuan organisasi santri bernama Cakra Surya Dinata. Lambang ini menjadi
        identitas dan pedoman nilai bagi seluruh civitas pondok dalam menjalankan kehidupan
        berasrama, belajar, dan berorganisasi.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Visi</h2>
      <p className="mt-2 text-gray-700">
        Mewujudkan generasi santri yang berakhlak mulia, berilmu, dan mampu menjadi teladan di
        tengah masyarakat dengan berpegang pada nilai-nilai keislaman dan kebangsaan.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Misi</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
        <li>Menyelenggarakan pendidikan agama dan umum secara seimbang.</li>
        <li>Membentuk karakter santri yang disiplin, mandiri, dan bertanggung jawab.</li>
        <li>Mengembangkan kemampuan kepemimpinan dan organisasi melalui kegiatan kesantrian.</li>
        <li>Menjaga kelestarian nilai-nilai tradisi pesantren yang relevan dengan zaman.</li>
      </ul>

      <h2 className="mt-8 text-xl font-bold text-gray-900">Filosofi Lambang</h2>
      <p className="mt-2 text-gray-700">
        Tiga pilar utama dalam lambang Cakra Surya Dinata &mdash; <strong>Alkitab-Jamaah</strong>,{" "}
        <strong>Alhikmah-Tatanan</strong>, dan <strong>Annubuwah-Wahyu</strong> &mdash; menjadi
        landasan filosofis yang dipegang erat dalam setiap aspek kehidupan di pondok, mulai dari
        kegiatan belajar mengajar hingga praktik berorganisasi sehari-hari.
      </p>
    </div>
  );
}
