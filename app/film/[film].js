import { View, Text, Image } from "react-native-web";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCard from "../../components/FilmCard";

const DATA = [
  {
    id: "1",
    name: "Timnas",
    logo: "https://img.okezone.com/content/2024/11/19/51/3087545/update-ranking-fifa-timnas-indonesia-setelah-menang-2-0-atas-arab-saudi-di-kualifikasi-piala-dunia-2026-melesat-tajam-lewati-malaysia-7ERFvRjbvU.jpg",
    text: "Timnas Indonesia setelah menang 2-0 atas arab saudi di matchday keenam Grub c kualifikasi Piala Dunia 2026. Timnas Indonesia naik dari peringkat 132 ke 127 dunia berkat kemenangan ini.",
  },
  {
    id: "2",
    name: "Jadwal Terbaru Timnas",
    logo: "https://statik.tempo.co/data/2024/11/19/id_1354986/1354986_720.jpg",
    text: "20 Maret 2025 Australia vs Indonesia, 25 Maret 2025 Indonesia vs Bahrain, 5 Juni 2025 Indonesia vs China, 10 Juni 2025 Jepang vs Indonesia.",
  },
  {
    id: "3",
    name: "Penyerang Asal Surabaya",
    logo: "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2024/11/19/20241119_194131jpg-20241119074350.jpg",
    text: "marselino bagaikan anak emas shin tae yong berkat mencetak 2 poin atas pertandingan melawan arab saudi.",
  },
  {
    id: "4",
    name: "Coach shin",
    logo: "https://cdn1-production-images-kly.akamaized.net/RMv01nDacvttHsg7VwMDT2hvgEI=/0x0:3500x2333/640x360/filters:quality(75):strip_icc():format(webp):watermark(kly-media-production/assets/images/watermarks/liputan6/watermark-color-landscape-new.png,540,20,0)/kly-media-production/medias/5005625/original/089351400_1731587285-20241114BL_Prematch_Preskon_Timnas_Indonesia_Jelang_Vs_Jepang3.JPG",
    text: "shin Tae yong menanggapi komentar negatif dari netizen dengan melakukan evaluasi pada pemain pemain indonesia.",
  },
  {
    id: "5",
    name: "Kata kata Coach shin",
    logo: "https://awsimages.detik.net.id/community/media/visual/2024/01/27/shin-tae-yong-1_169.jpeg?w=1200",
    text: "shin Tae yong memberikan pesan kepada netizen, ia meminta maaf kepada fans sepak bola indonesia dan berkata sabar dan terus beri semangat.",
  },
  {
    id: "1",
    name: "Futsal Putri",
    logo: "https://pict.sindonews.net/webp/732/pena/news/2024/11/20/11/1491533/hasil-piala-aff-futsal-putri-2024-timnas-indonesia-gebuk-filipina-21-mni.webp",
    text: "Timnas Futsal Putri Indonesia menmang 2-1 atas Filipina dalam ASEAN women's Futsal Championship 2024.",
  },
  {
    id: "2",
    name: "Futsal Putra",
    logo:"https://pict.sindonews.net/webp/732/pena/news/2024/11/10/11/1486171/futsal-pra.webp",
    text: "Futsal indonesia mendapat juara dari kekalahan Thailand.",
  },
  {
    id: "3",
    name: "Federasi Futsal",
    logo:"https://pict.sindonews.net/webp/732/pena/news/2024/11/18/11/1490261/pengurus-federasi-futsal-indonesia-resmi-dilantik-pssi-ipn.webp",
    text: "Ketum PSSI Erick Tohir telah resmi melantik Federasi Futsal Indonesia berlangsung di Menara Danareksa.",
  },
  {
    id: "4",
    name: "Gebrakkan Pak Erick Tohir",
    logo: "https://media.suara.com/pictures/653x366/2023/09/17/85155-biodata-profil-erick-thohir-dokpssi.jpg",
    text: "Pak Erick resmi melantik kepengurusan (FFI), POsisi ketua umum kali ini dipegang Michael Sianipar. Selebriti Atta Halilintar naik menjadi waketum.",
  },
  {
    id: "5",
    name: "Amanah Pak Erick",
    logo: "https://img.antaranews.com/cache/1200x800/2024/11/18/IMG_20241118_193724.jpg.webp",
    text: "Pak Erick menargetkan Federasi Futsal Indonesia mempertahankan gelar juara Piala AFF.",
  },
  {
    id: "1",
    name: "System zonasi sekolah",
    logo: "https://news.unair.ac.id/wp-content/uploads/2019/07/Ilustrasi-oleh-Beritatagar.png",
    text: "Mendikdasmen RI, mengungkap sistem zonasi pada PPDB sedang dirombak.",
  },
  {
    id: "2",
    name: "AI dan Coding",
    logo: "https://akcdn.detik.net.id/community/media/visual/2019/06/17/16518357-6de7-4fbc-9566-da49ae47e4b2_169.jpeg?w=700&q=90",
    text: "Menteri Pendidikan Dasar dan Menengah, Menyatakan [elajara AI dan Coding hanya akan diajarkan di sekolah terpilih.",
  },
  {
    id: "3",
    name: "Marak kasus kekerasan pada",
    logo: "https://assets.kompasiana.com/items/album/2023/11/01/kekerasan-pendidikan-6541c920040c8759d5059cd2.jpeg?t=o&v=300",
    text: "Wakil Ketua MPR RI, menekankan perlunya penguatan sistem untuk mencegah tindak kekerasan di lingkungan sekolah.",
  },
  {
    id: "4",
    name: "Digitalisasi Pendidikan",
    logo: "https://img.antaranews.com/cache/1200x800/2024/08/16/Mockup_Rekomendasi-Belajar.jpeg.webp",
    text: "Kemendikbud menyatakan terus berkomitmen mempercepat transmofmasi pendidikan, salah satunya melalui pemanfaatan sejumlah platform digital untuk memperkuat ekosistem pendidikan..",
  },
  {
    id: "5",
    name: "Kolaborasi SMK Telkom Sidoarjo",
    logo: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/85/2024/10/30/IMG-20241030-WA0033-2852097228.jpg",
    text: "SMK Telkom Sidoarjo menerima kunjungan dari Administration Departemen Research Department Chief, Kano untuk membahas program Specified Skill Worker di bidang kontruksi Jepang.",
  },
  {
    id: "1",
    name: "Bencana Bandung",
    logo: "https://cdn.rri.co.id/berita/Bandung/o/1732111464717-WhatsApp_Image_2024-11-20_at_21.03.27/sso1qeztknhlvhu.jpeg",
    text: "BPBD Bandung Barat mencatat, selama satu bulan terakhir bencana seperti angin kencang, banjir, hingg longsor sudah menerjang wilayah Bandung Barat",
  },
  { 
    id: "2",
    name: "Bencana Lampung",
    logo: "https://img.antaranews.com/cache/1200x800/2024/11/20/IMG-20241120-WA0012_4.jpg.webp",
    text: "Provinsi Lampung telah menyiapkan berbagai jalur evakuasi bagi masyarakat di daerah setempat untuk mengantisipasi terjadinya bencana alam, terutama tsunami.",
  },
  { 
    id: "3",
    name: "Bencana Jelang Pilkada 2024",
    logo: "https://cdn0-production-images-kly.akamaized.net/jXYwbPdC3SGt9n_5exYcg2aB5EM=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2778500/original/093810700_1555297243-IMG-20190415-0006.jpg",
    text: "BPBD Bogor mencatat ada 174 desa di Kabupaten Bogor, Jawa Barat yang rawan bencana alam dan berpotensi mengganggu jalannya Pilkada Serentak 2024.",
  },
  { 
    id: "4",
    name: "Bencana Dramaga Bogor Diterjang Angin Kencang",
    logo: "https://mediaindonesia.com/cdn-cgi/image/width=800,quality=80,format=webp/https://asset.mediaindonesia.com/news/2024/11/20/1732111701_cb70555542cbba2a43e7.png",
    text: "Peristiwa bencana alam tersebut terjadi di tiga kampung wilayah Desa Petir, Kecamatan Dramaga.",
  },
  { 
    id: "5",
    name: "320 Keluarga Terdampak Banjir Rob di Bekasi",
    logo: "https://statik.tempo.co/data/2017/12/06/id_667936/667936_720.jpg",
    text: "Banjir Rob di wilayah Kampung Sembilangan Desa Hurip Jaya, Kecamatan Babelan, Kab. Bekasi.",
  },
];

const FilmDetail = () => {
    const { film } = useLocalSearchParams();
    const selectedFilm = DATA.filter(function (item) {
      return item.name === film;
    });
  
    console.log(selectedFilm);
  
    return (
      <SafeAreaView
        style={{
          backgroundColor: "grey",
          flex: 1,
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FilmCard item={selectedFilm[0]} />
      </SafeAreaView>
    );
  };
  
  export default FilmDetail;