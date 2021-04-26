import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SearchResultsScreen } from '../screens/SearchResultsScreen';
import { SearchResultsMap } from '../screens/SearchResultsMap';

const TopTabs = createMaterialTopTabNavigator();

export const SearchResultsTab = () => {
    return (
        <TopTabs.Navigator
            tabBarOptions={{
                activeTintColor: '#f15454',
                indicatorStyle: {
                    backgroundColor: '#f15454',
                },
            }}
        >
            <TopTabs.Screen name="list" component={SearchResultsScreen} />
            <TopTabs.Screen name="map" component={SearchResultsMap} />
        </TopTabs.Navigator>
    );
};
