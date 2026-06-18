import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/types";
import { deletePost } from "./actions";

export default async function AdminPostsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const filterType = type === "ARTIKEL" ? "ARTIKEL" : type === "BERITA" ? "BERITA" : undefined;

  const posts = await prisma.post.findMany({
    where: filterType ? { type: filterType } : undefined,
    orderBy: { createdAt: "desc" },
  });

  const tabs = [
    { href: "/admin/posts", label: "Semua", active: !filterType },
    { href: "/admin/posts?type=BERITA", label: "Berita", active: filterType === "BERITA" },
    { href: "/admin/posts?type=ARTIKEL", label: "Artikel", active: filterType === "ARTIKEL" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Berita & Artikel</h1>
        <Link
          href="/admin/posts/new"
          className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400"
        >
          + Tambah
        </Link>
      </div>

      <div className="mt-4 flex gap-2 text-sm">
        {tabs.map((tab) => (
          <Link
            key={tab.label}
            href={tab.href}
            className={`rounded-md px-3 py-1.5 ${
              tab.active ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-500">
            <tr>
              <th className="px-4 py-3">Judul</th>
              <th className="px-4 py-3">Tipe</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Tanggal</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t border-gray-100">
                <td className="px-4 py-3 font-medium text-gray-900">{post.title}</td>
                <td className="px-4 py-3 text-gray-600">{post.type}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      post.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {post.published ? "Terbit" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{formatDate(post.createdAt)}</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/admin/posts/${post.id}`}
                    className="mr-3 font-semibold text-yellow-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <form action={deletePost.bind(null, post.id)} className="inline">
                    <button type="submit" className="font-semibold text-red-600 hover:underline">
                      Hapus
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                  Belum ada data.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
