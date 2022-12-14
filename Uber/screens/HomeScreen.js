import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import React from 'react';
import NavOptions from '../Components/NavOptions';
import NavFavorites from '../Components/NavFavorites';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';


const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>

                <Image
                    style={{
                        width: 100, height: 100, resizeMode: 'contain'
                    }}
                    source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
                    }}
                />


                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    styles={
                        {
                            container: {
                                flex: 0,
                            },
                            textInput: {
                                fontSize: 18
                            },
                        }
                    }
                    onPress={(data, details = null) => {
                        // console.log("data");
                        // console.log(data)
                        // console.log("this is details below")
                        // console.log(details)
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            })
                        );
                        dispatch(setDestination(null));
                    }}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    minLength={2}
                    returnKeyType={"search"}
                    query={
                        {
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en'
                        }
                    }
                    nearbyPlacesAPI='GooglePlacesSearch'
                    //Will show results 400 milliseconds after stopped typing
                    debounce={400}
                />
                <NavOptions />
                <NavFavorites />
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});