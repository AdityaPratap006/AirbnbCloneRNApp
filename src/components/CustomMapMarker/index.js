import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';

export const CustomMapMarker = ({
    coordinate,
    price,
    isSelected,
    onSelect,
}) => {
    return (
        <Marker coordinate={coordinate} onPress={onSelect}>
            <View style={styles(isSelected).marker}>
                <Text style={styles(isSelected).markerText}>
                    {`$ ${price}`}
                </Text>
            </View>
        </Marker>
    );
};

const styles = (/** @type {Boolean} */ isSelected) => {
    return StyleSheet.create({
        marker: {
            backgroundColor: isSelected ? '#000' : '#fff',
            padding: 8,
            borderRadius: 20,
            borderColor: isSelected ? '#eee' : '#333',
            borderWidth: 1,
        },
        markerText: {
            fontWeight: 'bold',
            color: isSelected ? '#fff' : '#000',
        },
    });
};
