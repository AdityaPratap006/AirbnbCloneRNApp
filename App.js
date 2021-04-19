import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
// import { HomeScreen } from './src/screens/HomeScreen';
import SearchResultsScreen from './src/screens/SearchResultsScreen';

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.appContainer}>
                {/* <HomeScreen /> */}
                {/* <ScrollView>
                    {feed.map((accommodation) => (
                        <Accommodation
                            key={accommodation.id}
                            accommodation={accommodation}
                        />
                    ))}
                </ScrollView> */}
                <SearchResultsScreen />
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
