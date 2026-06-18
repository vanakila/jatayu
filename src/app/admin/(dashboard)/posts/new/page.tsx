import PostForm from "@/components/admin/PostForm";
import { createPost } from "../actions";

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Tambah Berita / Artikel</h1>
      <div className="mt-6">
        <PostForm action={createPost} submitLabel="Simpan" />
      </div>
    </div>
  );
}
