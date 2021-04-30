import React from 'react';
import { Text, View, Image, useWindowDimensions } from 'react-native';
import { styles } from './styles';

export const AccommodationCarouselItem = ({ accommodation }) => {
    const { type, title, bed, bedroom, newPrice, image } = accommodation;
    const { width: deviceWidth } = useWindowDimensions();

    return (
        <View style={[styles.container, { width: deviceWidth - 60 }]}>
            <View style={styles.innerContainer}>
                {/* Image */}
                <Image
                    style={styles.image}
                    source={{
                        uri: image,
                    }}
                />

                <View style={styles.details}>
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
                        <Text style={styles.newPrice}> ${newPrice}</Text> /
                        night
                    </Text>
                </View>
            </View>
        </View>
    );
};
