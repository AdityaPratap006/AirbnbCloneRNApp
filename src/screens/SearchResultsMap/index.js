import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { feed } from '../../../assets/data/feed';
import { CustomMapMarker } from '../../components/CustomMapMarker';

export const SearchResultsMap = () => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

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
});
