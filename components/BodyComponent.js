import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import CategoryComponent from "./CategoryComponent";
import { FeatureRowComponent } from "./FeatureRowComponent";
import sanityClient from "../sanity";

const BodyComponent = () => {
  const [featuredCategories, setFeatureCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
            
            *[_type == "featurted"]{
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->
                }
            }
            `
      )
      .then((data) => {
        setFeatureCategories(data);
      });
  }, []);

  return (
    <>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <CategoryComponent />

        {featuredCategories?.map((category) => (
          <FeatureRowComponent
            key={category._id}
            title={category.name}
            description={category.short_descriptions}
            featuredCategory="Featured"
            id={category._id}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default BodyComponent;
