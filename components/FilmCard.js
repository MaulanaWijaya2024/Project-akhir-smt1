import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const FilmCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/film/[film]",
        params: { film: item.name },
      }}
    >
      <View className="p-4 m-2 bg-blue-400 rounded-xl">
        <Image
          className="rounded-xl"
          source={{
            uri: item.logo,
            height: 150,
            width: 150,
          }}
        />
        <Text className="text-center font-bold text-white font-mono text-sm">
        {item.id}. {item.name}
        </Text>
        <Text className="text-center font-bold text-white font-mono text-sm">
            {item.text}
        </Text>
      </View>
    </Link>
  );
};
export default FilmCard;