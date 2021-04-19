import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { Accommodation } from './src/components/Accommodation';
// import { HomeScreen } from './src/screens/HomeScreen';
import { feed } from './assets/data/feed';

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.appContainer}>
                {/* <HomeScreen /> */}
                <ScrollView>
                    {feed.map((accommodation) => (
                        <Accommodation
                            key={accommodation.id}
                            accommodation={accommodation}
                        />
                    ))}
                </ScrollView>
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
