import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { HomeScreen } from '../screens/HomeScreen';
import { ExploreNavigator } from './ExploreNavigator';
import { SearchResultsMap } from '../screens/SearchResultsMap';

const Tab = createBottomTabNavigator();

export const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#f15454',
            }}
        >
            <Tab.Screen
                name={'Explore'}
                component={SearchResultsMap}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Fontisto name="search" size={25} color={color} />
                        );
                    },
                }}
            />
            <Tab.Screen
                name={'Saved'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <FontAwesome
                                name="heart-o"
                                size={25}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name={'Trips'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <FontAwesome5
                                name="airbnb"
                                size={25}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name={'Inbox'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Feather
                                name="message-square"
                                size={25}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name={'Profile'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <EvilIcons name="user" size={25} color={color} />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};
