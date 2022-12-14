import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';
import 'intl';


const data = [
  {
    id: "Uber-X",
    title: "UberX",
    multiplier: 1,
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
  },
  {
    id: "Uber-XL",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
  },
  {
    id: "Uber-LUX",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
  },
];


//For SURGE pricing
const SURGE_CHARGE_RATE = 1.5;



const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View >
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${id == selected?.id && "bg-gray-200"}`}
          >

            <Image style={{
              width: 100,
              height: 100,
              resizeMode: "contain"
            }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
            
              {/* {new Intl.NumberFormat("en-gb", {
                style: 'currency',
                currency: 'GBP',
              }).format(
                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
              )} */}


              {new Intl.NumberFormat('en-gb',{
                style: 'currency',
                currency: 'GBP',
              }).format(

                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100

              )}



              
            </Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity 
        disabled={!selected}
        style={tw`bg-black ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}> Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})