import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList, useWindowDimensions } from 'react-native';
import MapView from 'react-native-maps';
import { feed } from '../../../assets/data/feed';
import { AccommodationCarouselItem } from '../../components/AccomodationCarouselItem';
import { CustomMapMarker } from '../../components/CustomMapMarker';

export const SearchResultsMap = () => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const { width: deviceWidth } = useWindowDimensions();
    const flatListRef = useRef(null);
    const viewConfig = useRef({
        itemVisiblePercentThreshold: 80,
    });
    const onViewChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length === 2) {
            console.log(viewableItems);
            const selectedPlace = viewableItems[1].item;
            setSelectedPlaceId(selectedPlace.id);
        } else if (viewableItems.length > 0) {
            console.log(viewableItems);
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id);
        }
    });
    const mapRef = useRef(null);

    const onSelectPlaceHandler = (placeId) => {
        setSelectedPlaceId(placeId);
    };

    useEffect(() => {
        if (!selectedPlaceId || !flatListRef || !mapRef) {
            return;
        }
        const index = feed.findIndex((place) => place.id === selectedPlaceId);
        flatListRef.current.scrollToIndex({ index });

        const selectedPlace = feed[index];
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        };

        mapRef.current.animateToRegion(region);
    }, [selectedPlaceId]);

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                    latitude: feed[0].coordinate.latitude,
                    longitude: feed[0].coordinate.longitude,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
                // region={{}}
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
                    ref={flatListRef}
                    data={feed}
                    renderItem={({ item }) => (
                        <AccommodationCarouselItem accommodation={item} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={deviceWidth - 60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    onViewableItemsChanged={onViewChanged.current}
                    viewabilityConfig={viewConfig.current}
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
