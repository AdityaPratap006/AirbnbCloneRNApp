import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

export const Accommodation = ({ accommodation = {} }) => {
    const {
        imageURL = 'https://a0.muscache.com/im/pictures/64e5d643-b2ad-49cc-b5a0-74fc4e493eab.jpg?im_w=960',
    } = accommodation;

    return (
        <View style={styles.container}>
            {/* Image */}
            <Image
                style={styles.image}
                source={{
                    uri: imageURL,
                }}
            />

            {/* Bed and Bedroom */}
            <Text style={styles.bedrooms}>2 beds 2 bedrooms</Text>

            {/* Type and Description */}
            <Text style={styles.description}>
                Wifi. Air Conditioning. Kitchen. Lift
            </Text>

            {/* Old price and New price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36 </Text>
                <Text style={styles.newPrice}> $30</Text> / night
            </Text>
            {/* Total price */}
            <Text style={styles.totalPrice}>$350 total</Text>
        </View>
    );
};
