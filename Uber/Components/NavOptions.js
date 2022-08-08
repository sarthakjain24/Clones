import { Text, View } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-web';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png",
        screen: "EatsScreen",
    },
];


const NavOptions = () => {
  return (
    <FlatList
        data={data}
        horizontal 
        renderItem = {({item}) => (
            <TouchableOpacity>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions
