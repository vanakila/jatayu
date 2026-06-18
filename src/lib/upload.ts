import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function saveUploadedFile(file: File): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

  const { error } = await supabase.storage.from("uploads").upload(filename, file, {
    contentType: file.type,
  });

  if (error) {
    throw new Error(`Gagal upload gambar: ${error.message}`);
  }

  const { data } = supabase.storage.from("uploads").getPublicUrl(filename);
  return data.publicUrl;
}
