import {StyleSheet, Text, SafeAreaView, Button} from 'react-native';
import React, {useState, useCallback} from 'react';
import DocumentPicker, {types} from 'react-native-document-picker';
import {TextInput} from 'react-native';
import {uploadToS3} from '../../helpers/uploadS3';
import RNFS from 'react-native-fs';
import axios from 'axios';
import API from '../../constants/api';
const Register = () => {
  const [name, setName] = useState(null);
  const [aadharNumber, setAadharNumber] = useState(null);
  const [empId, setEmpId] = useState(null);
  const [fileResponse, setFileResponse] = useState([]);
  const [fileData, setFileData] = useState(null);

  const registerEmployee = async function () {
    try {
      console.log("registering")
      const response = await axios.post(API.REGISTER_EMPLOYEE, {
        empId,
        name,
        aadharNumber,
        registrationVideoLink: `https://videotofotos.s3.us-west-2.amazonaws.com/registrationVideo/${empId}.mp4`,
      });

      console.log(response);
    } catch (error) {
      throw error;
    }
  };

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      setFileResponse(response);
      console.log(response[0]);
      const details = await RNFS.readFile(response[0].uri, 'base64');
      setFileData(details);
    } catch (err) {
      console.warn(err);
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Register New Employee</Text>
      <TextInput
        placeholder="Enter name"
        onChangeText={e => {
          setName(e);
        }}
      />
      <TextInput
        placeholder="Enter Aadhar Number"
        onChangeText={e => {
          setAadharNumber(e);
        }}
      />
      <TextInput
        placeholder="Enter Emp Id"
        onChangeText={e => {
          setEmpId(e);
        }}
      />
      <Button
        style={styles.button}
        title="Select Video 📑"
        onPress={handleDocumentSelection}
      />
      <Button
        title="Register"
        style={styles.button}
        onPress={async () => {
          await uploadToS3(fileData, `${empId}.mp4`);
          await registerEmployee();
        }}
      />
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
  },
  button: {
    margin: 20,
    backgroundColor: 'red',
  },
});
