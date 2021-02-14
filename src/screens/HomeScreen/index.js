import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { styles } from './styles';

export const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/wallpaper.jpg')}
                style={styles.backgroundImage}
            >
                <View style={styles.headerContent}>
                    <Text style={styles.title}>Go Near</Text>
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            console.warn('Explore Btn clicked!');
                        }}
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
                    console.warn('Search Btn clicked!');
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
