import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
// import { HomeScreen } from './src/screens/HomeScreen';
// import SearchResultsScreen from './src/screens/SearchResultsScreen';
import { DestinationSearchScreen } from './src/screens/DestinationSearchScreen';

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.appContainer}>
                {/* <HomeScreen /> */}
                {/* <SearchResultsScreen /> */}
                <DestinationSearchScreen />
            </SafeAreaView>
        </>
    );
};

export default App;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
});
