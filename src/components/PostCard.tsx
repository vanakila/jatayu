import Link from "next/link";
import { formatDate } from "@/lib/types";

type PostCardProps = {
  basePath: "berita" | "artikel";
  slug: string;
  title: string;
  excerpt: string | null;
  createdAt: Date;
};

export default function PostCard({ basePath, slug, title, excerpt, createdAt }: PostCardProps) {
  return (
    <Link
      href={`/${basePath}/${slug}`}
      className="block rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-yellow-500"
    >
      <p className="text-xs font-medium text-gray-500">{formatDate(createdAt)}</p>
      <h3 className="mt-1 text-lg font-bold text-gray-900">{title}</h3>
      {excerpt && <p className="mt-2 line-clamp-3 text-sm text-gray-600">{excerpt}</p>}
      <span className="mt-3 inline-block text-sm font-semibold text-yellow-600">
        Baca selengkapnya &rarr;
      </span>
    </Link>
  );
}
