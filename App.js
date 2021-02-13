import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Airbnb Clone</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
