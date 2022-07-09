import { Text, TouchableOpacity, View, Image } from "react-native";
import React, { Component } from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bol">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
