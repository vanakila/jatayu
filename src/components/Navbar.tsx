"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const links: NavLink[] = [
  { href: "/", label: "Beranda" },
  {
    href: "/profil",
    label: "Profil",
    children: [
      { href: "/profil", label: "Profil Pondok" },
      { href: "/profil/visi-misi", label: "Visi dan Misi" },
    ],
  },
  { href: "/berita", label: "Berita" },
  { href: "/artikel", label: "Artikel" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b-4 border-yellow-500 bg-black bg-repeat text-white"
      style={{ backgroundImage: "url(/social-bg.jpg)", backgroundSize: "auto 100%" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Logo Jatayu Pomosda" width={44} height={44} />
          <div className="leading-tight">
            <p className="text-xl font-bold text-yellow-400 tracking-wide">JATAYU</p>
            <p className="text-xs text-gray-300">Jamaah Tatanan Wahyu</p>
          </div>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {links.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 py-2 text-gray-200 transition hover:text-yellow-400"
                >
                  {link.label}
                  <span className="text-[10px]">&#9662;</span>
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-[180px] rounded-md border border-yellow-900/40 bg-black py-1 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-gray-200 transition hover:bg-yellow-500/10 hover:text-yellow-400"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-gray-200 transition hover:text-yellow-400"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center text-gray-200 md:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-yellow-900/40 px-4 py-3 text-sm font-medium md:hidden">
          {links
            .flatMap((link) => link.children ?? [link])
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-gray-200 transition hover:bg-yellow-500/10 hover:text-yellow-400"
              >
                {link.label}
              </Link>
            ))}
        </nav>
      )}
    </header>
  );
}
