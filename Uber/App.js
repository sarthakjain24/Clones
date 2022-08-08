import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import { store } from './store';


export default function App() {
  return (
    <Provider store={store}>
    <HomeScreen />
    {/* <View style={styles.container}>
      <Text>Hi, this is us making Uber!</Text>
      <StatusBar style="auto" />
    </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});