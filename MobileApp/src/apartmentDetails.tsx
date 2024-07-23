/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Image } from 'react-native';
import { apartment } from '../types';
import { apartmentsDummy } from './data';
import { matchRoutes, useLocation } from 'react-router-native';
// import { useRoute } from '@react-navigation/native';

function ApartmentDetails(): React.JSX.Element {
    const location = useLocation()


    const [apartment, setApartment] = useState<apartment>();
    useEffect(() => {
        fetch(`http://localhost:3001/apartment/${location.pathname.split('/')[2]}`)
            .then((response) => response.json())
            .then((apt) => setApartment(apt))
            .catch(() => setApartment(apartmentsDummy[0]));
    }, []);
    return (
        <View style={styles.apartmentContainer}>
            {apartment &&
                <>
                    <Image source={{ uri: apartment.images[0] }} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={{ fontSize: 35, fontWeight: 700, color: "rgb(30, 65, 100)" }}>{apartment.name}</Text>
                        <Text style={styles.text}>{apartment.location}</Text>
                        <Text style={styles.text}>{apartment.size} m²</Text>
                        <Text style={styles.text}>{apartment.price} $</Text>
                        <Text style={styles.text}><Text style={styles.title}>Number of bedrooms:</Text> {apartment.bedrooms}</Text>
                        <Text style={styles.text}><Text style={styles.title}>Number of bathrooms:</Text> {apartment.bathrooms}</Text>
                    </View>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        alignSelf: "stretch",
        height: 350,
        objectFit: 'cover',
    },
    apartmentContainer: {
        marginVertical: 10,
        paddingVertical: 10,
    },
    infoContainer: {
        marginLeft: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
    text: {
        fontSize: 24,
    },
});

export default ApartmentDetails;
