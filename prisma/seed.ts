import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("jatayu123", 10);
  await prisma.admin.upsert({
    where: { email: "admin@jatayupomosda.id" },
    update: {},
    create: {
      email: "admin@jatayupomosda.id",
      password: passwordHash,
    },
  });

  await prisma.post.upsert({
    where: { slug: "pelantikan-pengurus-jatayu-2026" },
    update: {},
    create: {
      type: "BERITA",
      title: "Pelantikan Pengurus Cakra Surya Dinata Jatayu Periode 2026",
      slug: "pelantikan-pengurus-jatayu-2026",
      excerpt:
        "Pondok Jatayu Pomosda resmi melantik jajaran pengurus baru Cakra Surya Dinata untuk periode 2026 dalam upacara yang berlangsung khidmat.",
      content:
        "Bertempat di halaman utama Pondok Jatayu Pomosda, prosesi pelantikan pengurus baru Cakra Surya Dinata periode 2026 berlangsung dengan khidmat. Acara dihadiri oleh segenap asatidz, santri, serta perwakilan wali santri.\n\nDalam sambutannya, pengasuh pondok berpesan agar para pengurus baru senantiasa berpegang pada tiga pilar utama: Alkitab-Jamaah, Alhikmah-Tatanan, dan Annubuwah-Wahyu sebagai landasan dalam menjalankan amanah organisasi.\n\nProsesi ditutup dengan doa bersama dan penyerahan pataka pataka organisasi kepada ketua umum terpilih.",
      coverImage: null,
      published: true,
    },
  });

  await prisma.post.upsert({
    where: { slug: "kegiatan-bakti-sosial-ramadhan" },
    update: {},
    create: {
      type: "BERITA",
      title: "Bakti Sosial Ramadhan: Santri Jatayu Berbagi dengan Sesama",
      slug: "kegiatan-bakti-sosial-ramadhan",
      excerpt:
        "Santri Jatayu Pomosda menggelar bakti sosial pembagian sembako kepada warga sekitar pondok menjelang akhir bulan Ramadhan.",
      content:
        "Sebagai wujud kepedulian sosial, santri Pondok Jatayu Pomosda menggelar kegiatan bakti sosial berupa pembagian paket sembako kepada warga kurang mampu di sekitar lingkungan pondok.\n\nKegiatan ini merupakan bagian dari program tahunan yang rutin dilaksanakan menjelang Hari Raya Idul Fitri, sebagai bentuk implementasi nilai-nilai kepedulian yang diajarkan dalam kurikulum pondok.",
      coverImage: null,
      published: true,
    },
  });

  await prisma.post.upsert({
    where: { slug: "makna-cakra-surya-dinata" },
    update: {},
    create: {
      type: "ARTIKEL",
      title: "Memaknai Lambang Cakra Surya Dinata dalam Kehidupan Santri",
      slug: "makna-cakra-surya-dinata",
      excerpt:
        "Setiap elemen dalam lambang Cakra Surya Dinata menyimpan makna filosofis yang menjadi pedoman hidup santri Jatayu Pomosda.",
      content:
        "Lambang Cakra Surya Dinata yang menjadi identitas Pondok Jatayu Pomosda bukan sekadar simbol estetika, melainkan representasi nilai dan ajaran yang dipegang erat oleh seluruh civitas pondok.\n\nPedang yang menjulang ke atas melambangkan ketegasan dalam menegakkan kebenaran, sementara cakra atau roda di tengahnya merepresentasikan keseimbangan dan keberlanjutan ajaran dari generasi ke generasi.\n\nTiga frasa yang melingkari lambang -- Alkitab-Jamaah, Alhikmah-Tatanan, dan Annubuwah-Wahyu -- menjadi pedoman utama: berpegang pada kitab suci dan kebersamaan jamaah, mengamalkan hikmah dalam tatanan kehidupan, serta meneladani kenabian melalui wahyu yang diturunkan.",
      coverImage: null,
      published: true,
    },
  });

  await prisma.post.upsert({
    where: { slug: "tips-menghafal-alquran-santri" },
    update: {},
    create: {
      type: "ARTIKEL",
      title: "Tips Menghafal Al-Qur'an ala Santri Jatayu Pomosda",
      slug: "tips-menghafal-alquran-santri",
      excerpt:
        "Beberapa metode menghafal Al-Qur'an yang diterapkan dan terbukti efektif bagi para santri di Pondok Jatayu Pomosda.",
      content:
        "Menghafal Al-Qur'an membutuhkan konsistensi dan metode yang tepat. Di Pondok Jatayu Pomosda, para santri dibimbing menggunakan beberapa pendekatan berikut:\n\n1. Murajaah rutin setiap pagi dan sore secara berjamaah.\n2. Metode talaqqi langsung bersama asatidz pembimbing tahfidz.\n3. Target hafalan harian yang disesuaikan dengan kemampuan masing-masing santri.\n4. Evaluasi mingguan untuk memastikan kualitas hafalan tetap terjaga.\n\nDengan konsistensi dan bimbingan yang tepat, banyak santri Jatayu Pomosda berhasil menyelesaikan hafalan 30 juz selama masa pendidikan di pondok.",
      coverImage: null,
      published: true,
    },
  });

  console.log("Seed selesai. Admin login: admin@jatayupomosda.id / jatayu123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
