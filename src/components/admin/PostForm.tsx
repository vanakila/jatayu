"use client";

import { useState } from "react";
import { compressImage } from "@/lib/compressImage";

type PostFormProps = {
  action: (formData: FormData) => void;
  defaultValues?: {
    type: string;
    title: string;
    excerpt: string | null;
    content: string;
    published: boolean;
    coverImage: string | null;
  };
  submitLabel: string;
};

export default function PostForm({ action, defaultValues, submitLabel }: PostFormProps) {
  const [coverImage, setCoverImage] = useState(defaultValues?.coverImage ?? "");
  const [uploading, setUploading] = useState(false);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const compressed = await compressImage(file);
      const body = new FormData();
      body.append("file", compressed);
      const res = await fetch("/api/upload", { method: "POST", body });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setCoverImage(data.url);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Gagal upload gambar");
      e.target.value = "";
    } finally {
      setUploading(false);
    }
  }

  return (
    <form action={action} className="max-w-2xl space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Tipe</label>
        <select
          name="type"
          defaultValue={defaultValues?.type ?? "BERITA"}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none"
        >
          <option value="BERITA">Berita</option>
          <option value="ARTIKEL">Artikel</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Judul</label>
        <input
          type="text"
          name="title"
          required
          defaultValue={defaultValues?.title}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Ringkasan (excerpt)</label>
        <textarea
          name="excerpt"
          rows={2}
          defaultValue={defaultValues?.excerpt ?? ""}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Konten</label>
        <textarea
          name="content"
          rows={10}
          required
          defaultValue={defaultValues?.content}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Gambar Sampul</label>
        {coverImage && (
          <img
            src={coverImage}
            alt="Sampul saat ini"
            className="mt-2 h-32 w-auto rounded-md border border-gray-200"
          />
        )}
        <input type="hidden" name="coverImage" value={coverImage} />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="mt-1 block w-full text-sm"
        />
        {uploading && <p className="mt-1 text-sm text-gray-500">Mengupload gambar...</p>}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="published"
          id="published"
          defaultChecked={defaultValues?.published ?? true}
          className="h-4 w-4"
        />
        <label htmlFor="published" className="text-sm text-gray-700">
          Terbitkan
        </label>
      </div>

      <button
        type="submit"
        disabled={uploading}
        className="rounded-md bg-yellow-500 px-5 py-2 font-semibold text-black hover:bg-yellow-400 disabled:opacity-50"
      >
        {submitLabel}
      </button>
    </form>
  );
}
