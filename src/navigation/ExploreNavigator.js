import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { SearchResultsScreen } from '../screens/SearchResultsScreen';

const Stack = createStackNavigator();

export const ExploreNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Welcome'}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={'Search Results'}
                component={SearchResultsScreen}
                options={{
                    title: 'Accommodations',
                }}
            />
        </Stack.Navigator>
    );
};
