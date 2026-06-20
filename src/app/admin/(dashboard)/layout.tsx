import Link from "next/link";
import { auth, signOut } from "@/lib/auth";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/slider", label: "Slider Beranda" },
  { href: "/admin/profil", label: "Profil" },
  { href: "/admin/visi-misi", label: "Visi & Misi" },
  { href: "/admin/posts", label: "Berita & Artikel" },
  { href: "/admin/galeri", label: "Galeri" },
];

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-56 shrink-0 bg-black text-white">
        <div className="border-b border-yellow-900/40 px-4 py-4">
          <p className="font-bold text-yellow-400">JATAYU POMOSDA</p>
          <p className="text-xs text-gray-400">Admin Panel</p>
        </div>
        <nav className="flex flex-col gap-1 p-3 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-gray-200 transition hover:bg-yellow-500 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
          <p className="text-sm text-gray-600">{session?.user?.email}</p>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/admin/login" });
            }}
          >
            <button
              type="submit"
              className="text-sm font-semibold text-gray-600 hover:text-red-600"
            >
              Keluar
            </button>
          </form>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
