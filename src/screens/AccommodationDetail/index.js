import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { feed } from '../../../assets/data/feed';
import { DetailedAccommodation } from '../../components/DetailedAccommodation';

export const AccommodationDetail = () => {
    const route = useRoute();

    const accommodation = feed.find(
        (acc) => acc.id === route.params?.accommodationId,
    );

    return (
        <View>
            <DetailedAccommodation accommodation={accommodation} />
        </View>
    );
};
