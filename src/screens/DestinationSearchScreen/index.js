import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './styles';
import { searchList as searchResults } from '../../../assets/data/search';

export const DestinationSearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (val) => {
        setSearchTerm(val);
    };

    return (
        <View style={styles.container}>
            {/* Input */}
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                value={searchTerm}
                onChangeText={handleSearchTermChange}
            />

            {/* List of destinations */}
            <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.searchResultRow}>
                        <View style={styles.iconContainer}>
                            <Entypo name="location-pin" size={30} />
                        </View>
                        <Text style={styles.locationText}>
                            {item.description}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};
