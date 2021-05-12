import React from 'react';
import {
    Text,
    View,
    Image,
    useWindowDimensions,
    Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export const AccommodationCarouselItem = ({ accommodation }) => {
    const { type, title, bed, bedroom, newPrice, image } = accommodation;
    const { width: deviceWidth } = useWindowDimensions();
    const navigation = useNavigation();

    const goToAccommodationScreen = () => {
        navigation.navigate('Accommodation', {
            accommodationId: accommodation.id,
        });
    };

    return (
        <Pressable
            style={[styles.container, { width: deviceWidth - 60 }]}
            onPress={goToAccommodationScreen}
        >
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
        </Pressable>
    );
};
