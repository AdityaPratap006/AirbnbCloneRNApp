import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export const GuestsFilterScreen = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                {/* Row 1: Adults */}
                <View style={styles.row}>
                    {/* Title */}
                    <View style={styles.title}>
                        <Text style={styles.guestType}>Adults</Text>
                        <Text style={styles.guestAge}>Ages 13 or above</Text>
                    </View>
                    {/* Buttons with value */}
                    <View style={styles.actions}>
                        {/* - Button */}
                        <Pressable
                            onPress={() =>
                                setAdults((prev) => Math.max(0, prev - 1))
                            }
                            style={styles.button}
                        >
                            <Entypo name="minus" size={20} />
                        </Pressable>
                        {/* Value */}
                        <Text style={styles.value}>{adults}</Text>
                        {/* + Button */}
                        <Pressable
                            onPress={() => setAdults((prev) => prev + 1)}
                            style={styles.button}
                        >
                            <Entypo name="plus" size={20} />
                        </Pressable>
                    </View>
                </View>
                {/* Row 1: Adults */}
                {/* Row 2: Children */}
                <View style={styles.row}>
                    {/* Title */}
                    <View style={styles.title}>
                        <Text style={styles.guestType}>Children</Text>
                        <Text style={styles.guestAge}>Ages 2-12</Text>
                    </View>
                    {/* Buttons with value */}
                    <View style={styles.actions}>
                        {/* - Button */}
                        <Pressable
                            onPress={() =>
                                setChildren((prev) => Math.max(0, prev - 1))
                            }
                            style={styles.button}
                        >
                            <Entypo name="minus" size={20} />
                        </Pressable>
                        {/* Value */}
                        <Text style={styles.value}>{children}</Text>
                        {/* + Button */}
                        <Pressable
                            onPress={() => setChildren((prev) => prev + 1)}
                            style={styles.button}
                        >
                            <Entypo name="plus" size={20} />
                        </Pressable>
                    </View>
                </View>
                {/* Row 2: Children */}
                {/* Row 3: Infants */}
                <View style={styles.row}>
                    {/* Title */}
                    <View style={styles.title}>
                        <Text style={styles.guestType}>Infants</Text>
                        <Text style={styles.guestAge}>Under 2</Text>
                    </View>
                    {/* Buttons with value */}
                    <View style={styles.actions}>
                        {/* - Button */}
                        <Pressable
                            onPress={() =>
                                setInfants((prev) => Math.max(0, prev - 1))
                            }
                            style={styles.button}
                        >
                            <Entypo name="minus" size={20} />
                        </Pressable>
                        {/* Value */}
                        <Text style={styles.value}>{infants}</Text>
                        {/* + Button */}
                        <Pressable
                            onPress={() => setInfants((prev) => prev + 1)}
                            style={styles.button}
                        >
                            <Entypo name="plus" size={20} />
                        </Pressable>
                    </View>
                </View>
                {/* Row 3: Infants */}
            </View>
            <View style={styles.searchContainer}>
                <Pressable
                    style={styles.searchButton}
                    onPress={() => {
                        navigation.navigate('Search Results');
                    }}
                >
                    <Text style={styles.searchText}>Search</Text>
                </Pressable>
            </View>
        </View>
    );
};
