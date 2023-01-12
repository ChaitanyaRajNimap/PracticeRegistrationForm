import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import CustomButton from './CustomButton';
import Colors from '../constants/Colors';
import {validateInput, validateConfirmPassword} from './Validation';

function RegistrationForm() {
  const initialInputs = {
    fName: '',
    lName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  };

  const initialErros = {
    fNameError: '',
    lNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    phoneNumberError: '',
  };

  const [inputs, setInputs] = useState(initialInputs);
  const [errors, setErrors] = useState(initialErros);

  const textRegex = /^[A-Za-z][A-Za-z]{1,30}$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{4,6}$/;
  const phoneNumberRegex = /^[7-9]\d{9}$/;

  const submitHandler = () => {
    let isValidFName,
      isValidLName,
      isValidEmail,
      isValidPassword,
      isValidConfirmPassword,
      isValidPhoneNumber;

    isValidFName = validateInput(
      inputs.fName,
      textRegex,
      errors.fNameError,
      `Please enter valid first name`,
    );
    isValidLName = validateInput(
      inputs.fName,
      textRegex,
      errors.fNameError,
      `Please enter valid first name`,
    );
    isValidEmail = validateInput(
      inputs.email,
      emailRegex,
      errors.emailError,
      `Please enter valid email`,
    );
    isValidPassword = validateInput(
      inputs.password,
      passwordRegex,
      errors.confirmPasswordError,
      `Please enter a valid password`,
    );
    isValidConfirmPassword = validateConfirmPassword(
      inputs.confirmPassword,
      inputs.password,
      errors.confirmPasswordError,
      `Passwords didn't matched`,
    );
    isValidPhoneNumber = validateInput(
      inputs.phoneNumber,
      phoneNumberRegex,
      errors.phoneNumberError,
      `Please enter valid phone number`,
    );

    if (
      isValidFName &&
      isValidLName &&
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword &&
      isValidPhoneNumber
    ) {
      Alert.alert('Success!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ]);
    }
  };

  return (
    <ScrollView style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>First Name : </Text>
        <TextInput
          style={styles.input}
          onChangeText={text =>
            setInputs(prevInputs => {
              return {...prevInputs, fName: text};
            })
          }
        />
        <Text style={[styles.inputText, styles.error]}>
          {errors.fNameError}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Last Name : </Text>
        <TextInput
          style={styles.input}
          onChangeText={text =>
            setInputs(prevInputs => {
              return {...prevInputs, lName: text};
            })
          }
        />
        <Text style={[styles.inputText, styles.error]}>
          {errors.lNameError}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email : </Text>
        <TextInput
          style={styles.input}
          onChangeText={text =>
            setInputs(prevInputs => {
              return {...prevInputs, email: text};
            })
          }
        />
        <Text style={[styles.inputText, styles.error]}>
          {errors.emailError}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Password : </Text>
        <TextInput
          style={styles.input}
          onChangeText={text =>
            setInputs(prevInputs => {
              return {...prevInputs, password: text};
            })
          }
        />
        <Text style={[styles.inputText, styles.error]}>
          {errors.passwordError}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Confirm Password : </Text>
        <TextInput
          style={styles.input}
          onChangeText={text =>
            setInputs(prevInputs => {
              return {...prevInputs, confirmPassword: text};
            })
          }
        />
        <Text style={[styles.inputText, styles.error]}>
          {errors.confirmPasswordError}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Phone Number : </Text>
        <TextInput
          style={styles.input}
          onChangeText={text =>
            setInputs(prevInputs => {
              return {...prevInputs, phoneNumber: text};
            })
          }
        />
        <Text style={[styles.inputText, styles.error]}>
          {errors.phoneNumberError}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Submit" onPress={submitHandler} />
      </View>
    </ScrollView>
  );
}

export default RegistrationForm;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    padding: 15,
    borderRadius: 10,
    margin: 25,
    marginBottom: 10,
    backgroundColor: Colors.Black000,
  },
  buttonContainer: {
    padding: 15,
    margin: 25,
  },
  inputText: {
    marginBottom: 10,
    color: Colors.Grey100,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 10,
    backgroundColor: Colors.Black100,
    color: Colors.Teal000,
  },
  error: {
    marginBottom: 0,
    color: Colors.Red000,
    fontWeight: 'bold',
  },
});
