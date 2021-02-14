import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Accommodation } from './src/components/Accommodation';
import { HomeScreen } from './src/screens/HomeScreen';

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.appContainer}>
                {/* <HomeScreen /> */}
                <Accommodation />
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
