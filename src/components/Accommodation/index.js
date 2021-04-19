import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

export const Accommodation = ({ accommodation = {} }) => {
    console.log(accommodation);
    const {
        type,
        title,
        bed,
        bedroom,
        oldPrice,
        newPrice,
        totalPrice,
        image,
    } = accommodation;

    return (
        <View style={styles.container}>
            {/* Image */}
            <Image
                style={styles.image}
                source={{
                    uri: image,
                }}
            />

            {/* Bed and Bedroom */}
            <Text style={styles.bedrooms}>
                {bed} beds {bedroom} bedrooms
            </Text>

            {/* Type and Title */}
            <Text style={styles.typeAndTitle} numberOfLines={2}>
                {type}: {title}
            </Text>

            {/* Old price and New price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${oldPrice} </Text>
                <Text style={styles.newPrice}> ${newPrice}</Text> / night
            </Text>
            {/* Total price */}
            <Text style={styles.totalPrice}>${totalPrice} total</Text>
        </View>
    );
};
