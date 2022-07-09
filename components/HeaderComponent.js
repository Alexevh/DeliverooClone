import React from 'react'
import { Text, Image, View, StyleSheet, TextInput } from 'react-native'
import {
    ChevronDownIcon,
    UserIcon,
    SearchIcon,
    AdjustmentsIcon,
  } from "react-native-heroicons/outline";


const HeaderComponent = () => {
  return (
    <>
       <View>
        {/* Header*/}
        <View style={styles.container} className="space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full ml-2"
          />
          <View style={styles.title}>
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!!
            </Text>
            <Text className="font-bold text-xl">
              Current location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
           
          </View>
          <View className="mr-2">
          <UserIcon size={35} color="#00CCBB"  />
          </View>
          
        </View>
        {/* searach */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3" >
                <SearchIcon color="gray" size={20}/>
                <TextInput  placeholder='Restaurants' keyboardType='default'/>
            </View>
            <AdjustmentsIcon  color="#00CCBB" />
        </View>
        
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignContent: "center",
        paddingBottom: 3,
        marginLeft: 1,
        marginRight: 1,


    },
    title: {
        flex: 1,

    }

})

export default HeaderComponent