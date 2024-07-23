import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, SafeAreaView, StyleSheet, Touchable, TouchableHighlight, TouchableOpacity } from "react-native";
import Home from "./homePage";
import ApartmentsList from "./apartmentsList";
import { Link, NativeRouter, Route, Routes } from "react-router-native";
import ApartmentDetails from './apartmentDetails';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {


  return (
    <SafeAreaView>
      <NativeRouter>
        <SafeAreaView style={styles.nav}>
          <Link underlayColor="rgba(30, 65, 100, 0.2)" to="/">
            <Image style={styles.logo} source={require('../assets/nawy.png')} />
          </Link>
          <Image style={styles.user} source={require('../assets/user.png')} />
        </SafeAreaView>
        <Routes>
          <Route
            path="/"
            Component={Home}
          />
          <Route
            path="/apartment/*"
            Component={ApartmentDetails}
          />
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  user: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
