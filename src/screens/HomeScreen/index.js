import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export const HomeScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/wallpaper.jpg')}
                style={styles.backgroundImage}
            >
                <View style={styles.headerContent}>
                    <Text style={styles.title}>Go Near</Text>
                    <Pressable
                        android_ripple={{ color: '#aaa', borderless: false }}
                        style={styles.button}
                        onPress={() => {}}
                    >
                        <Text style={styles.buttonText}>
                            Explore nearby stays
                        </Text>
                    </Pressable>
                </View>
            </ImageBackground>
            <Pressable
                style={styles.searchButton}
                onPress={() => {
                    navigation.navigate('Destination Search');
                }}
            >
                <Fontisto name="search" size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>
                    Where are you going?
                </Text>
            </Pressable>
        </View>
    );
};
