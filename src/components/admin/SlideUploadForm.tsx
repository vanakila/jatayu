"use client";

import { useState } from "react";
import { compressImage } from "@/lib/compressImage";

type SlideUploadFormProps = {
  action: (formData: FormData) => void;
};

export default function SlideUploadForm({ action }: SlideUploadFormProps) {
  const [url, setUrl] = useState("");
  const [urlMobile, setUrlMobile] = useState("");
  const [uploading, setUploading] = useState<"desktop" | "mobile" | null>(null);

  async function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>,
    which: "desktop" | "mobile",
  ) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(which);
    try {
      const compressed = await compressImage(file);
      const body = new FormData();
      body.append("file", compressed);
      const res = await fetch("/api/upload", { method: "POST", body });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      if (which === "desktop") setUrl(data.url);
      else setUrlMobile(data.url);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Gagal upload gambar");
      e.target.value = "";
    } finally {
      setUploading(null);
    }
  }

  return (
    <form
      action={action}
      className="mt-6 flex max-w-xl flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Gambar Desktop</label>
        <input type="hidden" name="url" value={url} />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "desktop")}
          disabled={uploading !== null}
          className="mt-1 block w-full text-sm"
        />
        {uploading === "desktop" && <p className="mt-1 text-sm text-gray-500">Mengupload...</p>}
        {url && uploading !== "desktop" && (
          <img src={url} alt="Pratinjau desktop" className="mt-2 h-20 w-auto rounded-md border border-gray-200" />
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Gambar Mobile <span className="text-gray-400">(opsional, kalau tidak diisi pakai gambar desktop)</span>
        </label>
        <input type="hidden" name="urlMobile" value={urlMobile} />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "mobile")}
          disabled={uploading !== null}
          className="mt-1 block w-full text-sm"
        />
        {uploading === "mobile" && <p className="mt-1 text-sm text-gray-500">Mengupload...</p>}
        {urlMobile && uploading !== "mobile" && (
          <img src={urlMobile} alt="Pratinjau mobile" className="mt-2 h-20 w-auto rounded-md border border-gray-200" />
        )}
      </div>

      <button
        type="submit"
        disabled={uploading !== null || !url}
        className="self-start rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400 disabled:opacity-50"
      >
        Unggah
      </button>
    </form>
  );
}
