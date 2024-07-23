/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Image } from 'react-native';
import ApartmentsList from './apartmentsList';

function Home(): React.JSX.Element {

  return (
    <ScrollView style={styles.sectionContainer}>

      <Image
        source={{
          uri: 'https://www.nawy.com/_next/static/media/landing-background.edcd0e3d.webp',
        }}
        style={styles.heroImage}
      />
      <ApartmentsList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {},
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
  heroImage: {
    alignSelf: 'stretch',
    height: 400,
    resizeMode: 'cover',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default Home;
