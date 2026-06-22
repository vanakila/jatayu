"use client";

import { useState } from "react";
import { compressImage } from "@/lib/compressImage";

type GalleryUploadFormProps = {
  action: (formData: FormData) => void;
  showCaption?: boolean;
};

export default function GalleryUploadForm({ action, showCaption = true }: GalleryUploadFormProps) {
  const [url, setUrl] = useState("");
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
      setUrl(data.url);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Gagal upload gambar");
      e.target.value = "";
    } finally {
      setUploading(false);
    }
  }

  return (
    <form
      action={action}
      className="mt-6 flex max-w-xl flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Pilih Foto</label>
        <input type="hidden" name="url" value={url} />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="mt-1 block w-full text-sm"
        />
        {uploading && <p className="mt-1 text-sm text-gray-500">Mengupload gambar...</p>}
        {url && !uploading && (
          <img src={url} alt="Pratinjau" className="mt-2 h-24 w-auto rounded-md border border-gray-200" />
        )}
      </div>
      {showCaption && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Keterangan (opsional)</label>
          <input
            type="text"
            name="caption"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none"
          />
        </div>
      )}
      <button
        type="submit"
        disabled={uploading || !url}
        className="self-start rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400 disabled:opacity-50"
      >
        Unggah
      </button>
    </form>
  );
}
