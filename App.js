import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Router } from './src/navigation/Router';

const App = () => {
    return (
        <React.Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.appContainer}>
                <Router />
            </SafeAreaView>
        </React.Fragment>
    );
};

export default App;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
});
