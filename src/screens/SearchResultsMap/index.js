import React, { useState } from 'react';
import { StyleSheet, View, FlatList, useWindowDimensions } from 'react-native';
import MapView from 'react-native-maps';
import { feed } from '../../../assets/data/feed';
import { AccommodationCarouselItem } from '../../components/AccomodationCarouselItem';
import { CustomMapMarker } from '../../components/CustomMapMarker';

export const SearchResultsMap = () => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const { width: deviceWidth } = useWindowDimensions();

    const onSelectPlaceHandler = (placeId) => {
        setSelectedPlaceId(placeId);
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: feed[0].coordinate.latitude,
                    longitude: feed[0].coordinate.longitude,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {feed.map((accommodation) => (
                    <CustomMapMarker
                        key={accommodation.id}
                        coordinate={accommodation.coordinate}
                        price={accommodation.newPrice}
                        isSelected={accommodation.id === selectedPlaceId}
                        onSelect={() => onSelectPlaceHandler(accommodation.id)}
                    />
                ))}
            </MapView>
            <View style={styles.carousel}>
                <FlatList
                    data={feed}
                    renderItem={({ item }) => (
                        <AccommodationCarouselItem accommodation={item} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={deviceWidth - 60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    carousel: {
        position: 'absolute',
        bottom: 10,
    },
});
