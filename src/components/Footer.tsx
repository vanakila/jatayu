export default function Footer() {
  return (
    <footer className="border-t-2 border-yellow-500 bg-black text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="font-bold text-yellow-400">JATAYU POMOSDA</p>
            <p className="mt-1">Jamaah Tatanan Wahyu</p>
            <p className="mt-2 text-gray-400">
              Alkitab-Jamaah &middot; Alhikmah-Tatanan &middot; Annubuwah-Wahyu
            </p>
          </div>
          <div>
            <p className="font-bold text-yellow-400">Kontak</p>
            <p className="mt-1">Pondok Modern Sumber Daya At-Taqwa (POMOSDA)</p>
            <p>Jl. KH Wachid Hasyim No. 312, Tanjunganom, Kabupaten Nganjuk, Jawa Timur</p>
            <p>info@jatayupomosda.id</p>
          </div>
          <div>
            <p className="font-bold text-yellow-400">Tautan</p>
            <ul className="mt-1 space-y-1">
              <li><a href="/profil" className="hover:text-yellow-400">Profil Pondok</a></li>
              <li><a href="/berita" className="hover:text-yellow-400">Berita</a></li>
              <li><a href="/artikel" className="hover:text-yellow-400">Artikel</a></li>
              <li><a href="/admin/login" className="hover:text-yellow-400">Admin</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-6 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Pondok Jatayu Pomosda. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
