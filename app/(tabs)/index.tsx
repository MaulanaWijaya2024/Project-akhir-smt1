import { Link } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCard from "../../components/FilmCard";
import { useState } from "react";

const CATEGORIES = [
  {
    id: 1,
    name: "Kualifikasi Piaila Dunia 2026",
  },
  {
    id: 2,
    name: "Piala AFF Futsal",
  },
  {
    id: 3,
    name: "Pendidikan",
  },
  {
    id: 4,
    name: "Bencana Alam",
  }
];

const DATA = [
  {
    id: "1",
    category_id: "1",
    name: "Timnas",
    logo: "https://img.okezone.com/content/2024/11/19/51/3087545/update-ranking-fifa-timnas-indonesia-setelah-menang-2-0-atas-arab-saudi-di-kualifikasi-piala-dunia-2026-melesat-tajam-lewati-malaysia-7ERFvRjbvU.jpg",
  },
  {
    id: "2",
    category_id: "1",
    name: "Jadwal Terbaru Timnas",
    logo: "https://statik.tempo.co/data/2024/11/19/id_1354986/1354986_720.jpg",
  },
  {
    id: "3",
    category_id: "1",
    name: "Penyerang Asal Surabaya",
    logo: "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2024/11/19/20241119_194131jpg-20241119074350.jpg",
  },
  {
    id: "4",
    category_id: "1",
    name: "Coach shin",
    logo: "https://cdn1-production-images-kly.akamaized.net/RMv01nDacvttHsg7VwMDT2hvgEI=/0x0:3500x2333/640x360/filters:quality(75):strip_icc():format(webp):watermark(kly-media-production/assets/images/watermarks/liputan6/watermark-color-landscape-new.png,540,20,0)/kly-media-production/medias/5005625/original/089351400_1731587285-20241114BL_Prematch_Preskon_Timnas_Indonesia_Jelang_Vs_Jepang3.JPG",
  },
  {
    id: "5",
    category_id: "1",
    name: "Kata kata Coach shin",
    logo: "https://awsimages.detik.net.id/community/media/visual/2024/01/27/shin-tae-yong-1_169.jpeg?w=1200",
  },
  {
    id: "1",
    category_id: "2",
    name: "Futsal Putri",
    logo: "https://pict.sindonews.net/webp/732/pena/news/2024/11/20/11/1491533/hasil-piala-aff-futsal-putri-2024-timnas-indonesia-gebuk-filipina-21-mni.webp",
  },
  {
    id: "2",
    category_id: "2",
    name: "Futsal Putra",
    logo:"https://pict.sindonews.net/webp/732/pena/news/2024/11/10/11/1486171/futsal-pra.webp",
  },
  {
    id: "3",
    category_id: "2",
    name: "Federasi Futsal",
    logo:"https://pict.sindonews.net/webp/732/pena/news/2024/11/18/11/1490261/pengurus-federasi-futsal-indonesia-resmi-dilantik-pssi-ipn.webp",
  },
  {
    id: "4",
    category_id: "2",
    name: "Gebrakkan Pak Erick Tohir",
    logo: "https://media.suara.com/pictures/653x366/2023/09/17/85155-biodata-profil-erick-thohir-dokpssi.jpg",
  },
  {
    id: "5",
    category_id: "2",
    name: "Amanah Pak Erick",
    logo: "https://img.antaranews.com/cache/1200x800/2024/11/18/IMG_20241118_193724.jpg.webp",
  },
  {
    id: "1",
    category_id: "3",
    name: "System zonasi sekolah",
    logo: "https://news.unair.ac.id/wp-content/uploads/2019/07/Ilustrasi-oleh-Beritatagar.png",
  },
  {
    id: "2",
    category_id: "3",
    name: "AI dan Coding",
    logo: "https://akcdn.detik.net.id/community/media/visual/2019/06/17/16518357-6de7-4fbc-9566-da49ae47e4b2_169.jpeg?w=700&q=90",
  },
  {
    id: "3",
    category_id: "3",
    name: "Marak kasus kekerasan pada",
    logo: "https://assets.kompasiana.com/items/album/2023/11/01/kekerasan-pendidikan-6541c920040c8759d5059cd2.jpeg?t=o&v=300",
  },
  {
    id: "4",
    category_id: "3",
    name: "Digitalisasi Pendidikan",
    logo: "https://img.antaranews.com/cache/1200x800/2024/08/16/Mockup_Rekomendasi-Belajar.jpeg.webp",
  },
  {
    id: "5",
    category_id: "3",
    name: "Kolaborasi SMK Telkom Sidoarjo",
    logo: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/85/2024/10/30/IMG-20241030-WA0033-2852097228.jpg",
  },
  {
    id: "1",
    category_id: "4",
    name: "Bencana Bandung",
    logo: "https://cdn.rri.co.id/berita/Bandung/o/1732111464717-WhatsApp_Image_2024-11-20_at_21.03.27/sso1qeztknhlvhu.jpeg",
  },
  { 
    id: "2",
    category_id: "4",
    name: "Bencana Lampung",
    logo: "https://img.antaranews.com/cache/1200x800/2024/11/20/IMG-20241120-WA0012_4.jpg.webp",
  },
  { 
    id: "3",
    category_id: "4",
    name: "Bencana Jelang Pilkada 2024",
    logo: "https://cdn0-production-images-kly.akamaized.net/jXYwbPdC3SGt9n_5exYcg2aB5EM=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2778500/original/093810700_1555297243-IMG-20190415-0006.jpg",
  },
  { 
    id: "4",
    category_id: "4",
    name: "Bencana Dramaga Bogor Diterjang Angin Kencang",
    logo: "https://mediaindonesia.com/cdn-cgi/image/width=800,quality=80,format=webp/https://asset.mediaindonesia.com/news/2024/11/20/1732111701_cb70555542cbba2a43e7.png",
  },
  { 
    id: "5",
    category_id: "4",
    name: "320 Keluarga Terdampak Banjir Rob di Bekasi",
    logo: "https://statik.tempo.co/data/2017/12/06/id_667936/667936_720.jpg",
  },
];

export default function HomeScreen() {
  const [movies, setMovies] = useState(DATA);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filterMoviesS = (category) => {
    setSelectedCategory(category);
    if (category) {
      const filteredMovies = DATA.filter((movie) => movie.category_id === category.toString());
      setMovies(filteredMovies);
    } else {
      setMovies(DATA); // Show all movies if no category is selected
    }
  };

  return (
    <SafeAreaView className="p-4">
      <FlatList
        data={CATEGORIES}
        horizontal
        renderItem={({ item }) => (
          <Pressable onPress={() => filterMoviesS(item.id)}>
            <Text
              className={`m-2 border p-2 rounded-xl ${selectedCategory === item.id ? "bg-blue-500 text-white" : ""}`}
            >
              {item.name}
            </Text>
          </Pressable>
        )}
        className="space-x-4"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
      <FlatList
        data={movies}
        numColumns={6}
        renderItem={({ item }) => <FilmCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});