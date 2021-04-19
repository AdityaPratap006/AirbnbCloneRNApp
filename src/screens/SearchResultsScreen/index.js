import React from 'react';
import { View, FlatList } from 'react-native';
import { feed } from '../../../assets/data/feed';
import { Accommodation } from '../../components/Accommodation';

const SearchResultsScreen = () => {
    return (
        <View>
            <FlatList
                data={feed}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <Accommodation accommodation={item} />
                )}
            />
        </View>
    );
};

export default SearchResultsScreen;
