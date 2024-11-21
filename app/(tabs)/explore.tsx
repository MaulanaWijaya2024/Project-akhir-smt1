import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function AboutAppScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-6">
      {/* App Logo */}
      <View className="items-center mb-6">
        <Image
          className="w-40 h-40 rounded-lg"
          source={require('../../assets/images/iconprofil.png')}
        />
      </View>

      {/* App Name */}
      <Text className="text-2xl font-bold text-gray-800 text-center mb-4">
        Indonesia New's App
      </Text>

      {/* App Description */}
      <Text className="text-lg text-gray-600 leading-7 mb-6">
         "Indonesia New's: Berita terbaru, terkini, terviral!"
      </Text>

      {/* Features Section */}
      <Text className="text-xl font-bold text-gray-800 mb-4">Features:</Text>
      <View className="space-y-2">
        <Text className="text-lg text-gray-600">- Interface yang mudah dibaca</Text>
        <Text className="text-lg text-gray-600">- Berita</Text>
        <Text className="text-lg text-gray-600">- info tentang Berita</Text>
        <Text className="text-lg text-gray-600">- gambar Berita</Text>
      </View>

      {/* Team Section */}
      <Text className="text-xl font-bold text-gray-800 mt-8 mb-4">
        About Indonesia New's:
      </Text>
      <Text className="text-lg text-gray-600 leading-7">
      Indonesia New's, didirikan pada 2002, menjadi tempat penyiar berita terbaru, terkini, terviral. 
      </Text>
    </ScrollView>
  );
}