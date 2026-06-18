import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil" },
  { href: "/berita", label: "Berita" },
  { href: "/artikel", label: "Artikel" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b-2 border-yellow-500">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo Jatayu Pomosda" width={44} height={44} />
          <div className="leading-tight">
            <p className="font-bold text-yellow-400 tracking-wide">JATAYU POMOSDA</p>
            <p className="text-xs text-gray-300">Cakra Surya Dinata</p>
          </div>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-200 transition hover:text-yellow-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="flex flex-wrap justify-center gap-4 border-t border-yellow-900/40 px-4 py-2 text-xs font-medium md:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-200 transition hover:text-yellow-400"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
