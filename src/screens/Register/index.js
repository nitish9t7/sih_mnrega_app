import {StyleSheet, Text, SafeAreaView, Button} from 'react-native';
import React, {useState, useCallback} from 'react';
import DocumentPicker, {types} from 'react-native-document-picker';
import {TextInput} from 'react-native';
import {uploadToS3} from '../../helpers/uploadS3';
import RNFS from 'react-native-fs';
import axios from 'axios';
import API from '../../constants/api';
import styles from './styles';
const Register = () => {
  const [name, setName] = useState(null);
  const [aadharNumber, setAadharNumber] = useState(null);
  const [empId, setEmpId] = useState(null);
  const [phone,setPhone] = useState(null);
  const [city, setCity] = useState(null);
  const [supervisorId, setSupervisorId] = useState(null);
  const [workId, setWorkId] = useState(null);
  const [doB, setDoB] = useState(null);

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
      <Text
      style={styles.title}
      >Register New Employee</Text>
      <TextInput
      style={styles.input}
        placeholder="Enter name"
        onChangeText={e => {
          setName(e);
        }}
      />
      <TextInput
      style={styles.input}
        placeholder="Enter Aadhar Number"
        onChangeText={e => {
          setAadharNumber(e);
        }}
      />
      <TextInput
      style={styles.input}
        placeholder="Enter Emp Id"
        onChangeText={e => {
          setEmpId(e);
        }}
      />
       <TextInput
      style={styles.input}
        placeholder="Enter PhoneNo."
        onChangeText={e => {
          setPhone(e);
        }}
      />
       <TextInput
      style={styles.input}
        placeholder="Enter City"
        onChangeText={e => {
          setCity(e);
        }}
      />
       <TextInput
      style={styles.input}
        placeholder="Enter Supervisor Id"
        onChangeText={e => {
          setSupervisorId(e);
        }}
      />
       <TextInput
      style={styles.input}
        placeholder="Enter Work Id"
        onChangeText={e => {
          setWorkId(e);
        }}
      />
       <TextInput
      style={styles.input1}
        placeholder="DOB"
        onChangeText={e => {
          setDoB(e);
        }}
      />

      <Button
        style={styles.button}
        title="Select Image 📑"
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


