import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greetings.js';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>UGH!</Text>
      <Greeting weather = "raining cats and dogs" nominee="Bernie"/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
