import React from 'react';
import { View, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './styles';

export const DestinationSearchRow = ({ item }) => {
    return (
        <View style={styles.searchResultRow}>
            <View style={styles.iconContainer}>
                <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
        </View>
    );
};
