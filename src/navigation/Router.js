import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DestinationSearchScreen } from '../screens/DestinationSearchScreen';
import { GuestsFilterScreen } from '../screens/GuestsFilterScreen';
import { HomeTabNavigator } from './HomeTabNavigator';

const Stack = createStackNavigator();

export const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Home'}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={'Destination Search'}
                    component={DestinationSearchScreen}
                    options={{
                        title: 'Search your destination',
                    }}
                />
                <Stack.Screen
                    name={'Guests'}
                    component={GuestsFilterScreen}
                    options={{
                        title: 'How many people?',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
