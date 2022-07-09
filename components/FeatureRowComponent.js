import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient, { urlFor } from "../sanity";

export const FeatureRowComponent = ({
  title,
  description,
  featuredCategory,
  id,
}) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
            
    *[_type == "featurted" && _id == $id]{
        ...,
        restaurants[]->{
            ...,
            dishes[]->,
            type->{
                name
            }
        },
    }[0]
    `,
        { id: id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  return (
    <>
      <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
          <Text className="font-bold text-lg">{title}</Text>
          <ArrowRightIcon color="#00CCBB" />
        </View>
        <Text className="text-sm text-gray-400 px-4">{description}</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          className="pt-4"
        >
          {restaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={urlFor(restaurant.image).toString()}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type.name}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};
