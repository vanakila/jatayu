"use client";

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
        {defaultValues?.coverImage && (
          <img
            src={defaultValues.coverImage}
            alt="Sampul saat ini"
            className="mt-2 h-32 w-auto rounded-md border border-gray-200"
          />
        )}
        <input
          type="file"
          name="coverImage"
          accept="image/*"
          className="mt-1 block w-full text-sm"
        />
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
        className="rounded-md bg-yellow-500 px-5 py-2 font-semibold text-black hover:bg-yellow-400"
      >
        {submitLabel}
      </button>
    </form>
  );
}
