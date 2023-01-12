import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import RegistrationForm from './src/components/RegistrationForm';
import Colors from './src/constants/Colors';

function App() {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <RegistrationForm />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.Black100,
  },
});
