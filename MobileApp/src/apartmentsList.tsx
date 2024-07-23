/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import { Image } from 'react-native';
import { apartment } from '../types';
import { apartmentsDummy } from './data';
import { Link } from 'react-router-native';

function ApartmentsList(): React.JSX.Element {


  const [apartments, setApartments] = useState<apartment[]>([]);
  useEffect(() => {
    fetch('http://localhost:3001/apartments')
      .then((response) => response.json())
      .then((apts) => setApartments(apts.data))
      .catch(() => setApartments(apartmentsDummy));
  }, []);
  return (
    // <ScrollView style={styles.sectionContainer}>
    <>
      <Text style={styles.headerText}>Apartments</Text>
      {apartments.map((aprtmnt, index) =>
        <Link key={index} underlayColor="rgba(30, 65, 100, 0.2)" to={`apartment/${aprtmnt._id}`}>
          <View style={styles.apartmentContainer}>
            <Image source={{ uri: aprtmnt.images[0] }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={{ fontSize: 25, fontWeight: 700 }}>{aprtmnt.name}</Text>
              <Text><Text style={styles.title}>Location:</Text> {aprtmnt.location}</Text>
              <Text><Text style={styles.title}>Size:</Text> {aprtmnt.size}m</Text>
              <Text><Text style={styles.title}>Price:</Text> {aprtmnt.price}$</Text>
              <Text><Text style={styles.title}>Number of bedrooms:</Text> {aprtmnt.bedrooms}</Text>
              <Text><Text style={styles.title}>Number of bathrooms:</Text> {aprtmnt.bathrooms}</Text>
            </View>
          </View>
        </Link>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    objectFit: 'cover',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 10,
  },
  apartmentContainer: {
    marginVertical: 10,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  infoContainer: {
    marginLeft: 10,
  },
  title: {
    fontWeight: '500',
    textDecorationLine: 'underline',
  },

});

export default ApartmentsList;
