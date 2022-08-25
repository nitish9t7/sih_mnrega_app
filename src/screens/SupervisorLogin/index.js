import {StyleSheet, Text, SafeAreaView, Button} from 'react-native';
import React, {useState, useCallback} from 'react';
import DocumentPicker, {types} from 'react-native-document-picker';
import {TextInput} from 'react-native';
import {uploadToS3} from '../../helpers/uploadS3';
import RNFS from 'react-native-fs';
import axios from 'axios';
import API from '../../constants/api';
import SCREENS from '../../constants/screen';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const SuperVisorLogin = () => {
  const navigation = useNavigation();
  const [empId, setEmpId] = useState(null);
  const [password, setPassword] = useState(null);

  const loginEmployee = async function () {
    try {
      console.log('logging in');
      const response = await axios
        .post(API.LOGIN, {
          empId,
          password,
        })
        .then(function (response) {
          console.log('Login Success');
          navigation.navigate(SCREENS.SUPERVISOR_SCREEN);
        });
      console.log(response);
    } catch (error) {
      throw error;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Supervisor Login</Text>
      <TextInput
      style={styles.input1}
        placeholder="Enter Supervisor Id"
        onChangeText={e => {
          setEmpId(e);
        }}
      />
      <TextInput
      style={styles.input2}
        placeholder="Enter Password"
        onChangeText={e => {
          setPassword(e);
        }}
      />
      <Button
        title="Login"
        style={styles.button1}
        onPress={async () => {
          await loginEmployee();
        }}
      />
    </SafeAreaView>
  );
};
export default SuperVisorLogin;


