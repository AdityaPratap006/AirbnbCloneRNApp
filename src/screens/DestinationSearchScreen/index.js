import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { DestinationSearchRow } from '../../components/DestinationSearchRow';
import { styles } from './styles';
import { GOOGLE_API_KEY } from '../../../secrets';

export const DestinationSearchScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder="Where are you going?"
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    navigation.navigate('Guests');
                }}
                query={{
                    key: GOOGLE_API_KEY,
                    language: 'en',
                    types: '(cities)',
                }}
                styles={{
                    textInput: styles.textInput,
                }}
                renderRow={(item) => <DestinationSearchRow item={item} />}
                suppressDefaultStyles
                fetchDetails
            />
        </View>
    );
};
