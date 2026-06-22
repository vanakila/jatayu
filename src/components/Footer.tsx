import { socials } from "@/lib/socials";

export default function Footer() {
  return (
    <footer className="border-t-4 border-yellow-500 bg-black text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="font-bold text-yellow-400">JATAYU POMOSDA</p>
            <p className="mt-1">Jamaah Tatanan Wahyu</p>
            <div className="mt-3 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:opacity-80 ${s.bg}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-yellow-400">Kontak</p>
            <p className="mt-1">Pondok Modern Sumber Daya At-Taqwa (POMOSDA)</p>
            <p>Jl. KH Wachid Hasyim No. 312, Tanjunganom, Kabupaten Nganjuk, Jawa Timur</p>
            <p>yayasanylm@gmail.com</p>
            <p>+62 852-3291-2963</p>
          </div>
          <div>
            <p className="font-bold text-yellow-400">Tautan</p>
            <div className="mt-1 grid grid-cols-2 gap-x-2 sm:gap-x-4">
              <ul className="space-y-1">
                <li><a href="/" className="hover:text-yellow-400">Beranda</a></li>
                <li><a href="/profil" className="hover:text-yellow-400">Profil Pondok</a></li>
                <li><a href="/profil/visi-misi" className="hover:text-yellow-400">Visi dan Misi</a></li>
                <li><a href="/berita" className="hover:text-yellow-400">Berita</a></li>
              </ul>
              <ul className="space-y-1">
                <li><a href="/artikel" className="hover:text-yellow-400">Artikel</a></li>
                <li><a href="/galeri" className="hover:text-yellow-400">Galeri</a></li>
                <li><a href="/kontak" className="hover:text-yellow-400">Kontak</a></li>
                <li><a href="/admin/login" className="hover:text-yellow-400">Admin</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-6 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Pondok Jatayu Pomosda. Seluruh hak cipta dilindungi. &middot;
          Developed by{" "}
          <a
            href="http://stt-developer.pomosda.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            STT-DEVELOPER
          </a>
        </p>
      </div>
    </footer>
  );
}
