import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

function CustomButton({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.Teal000,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.White000,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
