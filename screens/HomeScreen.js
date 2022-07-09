import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import HeaderComponent from "../components/HeaderComponent";
import BodyComponent from "../components/BodyComponent";
import CategoryComponent from "../components/CategoryComponent";
import { FeatureRowComponent } from "../components/FeatureRowComponent";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    // change option headers, ver por que el safe area en android simulator no anda
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 mt-6">
      <HeaderComponent />
      <BodyComponent />
    </SafeAreaView>
  );
};

export default HomeScreen;
