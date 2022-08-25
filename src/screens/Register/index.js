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
  const [phone, setPhone] = useState(null);
  const [city, setCity] = useState(null);
  const [supervisorId, setSupervisorId] = useState(null);
  const [workId, setWorkId] = useState(null);
  const [doB, setDoB] = useState(null);

  const [fileResponse, setFileResponse] = useState([]);
  const [fileData, setFileData] = useState(null);

  const [singleFile, setSingleFile] = useState(null);

  const [singleFileName, setsingleFileName] = useState(null);

  const [selectPhotoUrl, setselectPhotoUrl] = useState(null);

  // const registerEmployee = async function () {
  //   try {
  //     console.log("registering")
  //     const response = await axios.post(API.REGISTER_EMPLOYEE, {
  //       empId,
  //       name,
  //       aadharNumber,
  //       registrationVideoLink: `https://videotofotos.s3.us-west-2.amazonaws.com/registrationVideo/${empId}.mp4`,
  //     });

  //     console.log(response);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // const handleDocumentSelection = useCallback(async () => {
  //   try {
  //     const response = await DocumentPicker.pick({
  //       presentationStyle: 'fullScreen',
  //     });
  //     setFileResponse(response);
  //     console.log(response[0]);
  //     const details = await RNFS.readFile(response[0].uri, 'base64');
  //     setFileData(details);
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // }, []);

  const register = async () => {
    // Check if any file is selected or not
    console.log('singleFile: ' + singleFile);
    if (singleFile != null) {
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('empId', empId);
      data.append('name', name);
      data.append('aadharNumber', aadharNumber);
      data.append('phone', phone);
      data.append('city', city);
      data.append('supervisorId', supervisorId);
      data.append('doB', doB);
      data.append('workId', workId);
      data.append('file', {
        uri: fileToUpload,
        type: 'image/png',
        name: singleFileName,
      });
      // data.append('supervisorId', '123');
      await axios({
        method: 'post',
        url: API.REGISTER,
        data: data,
        headers: {'Content-Type': 'multipart/form-data'},
      })
        .then(function (response) {
          //handle success
          console.log('RESPONSE: ' + JSON.stringify(response));
          // console.log('URL :' + response.data.url);
          setselectPhotoUrl(response.data.url);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
      });
      console.log('res : ' + JSON.stringify(res));
      console.log(res[0].uri);
      setSingleFile(res[0].uri);
      setsingleFileName(res[0].name);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register New Employee</Text>
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
        onPress={selectFile}
      />
      <Button
        title="Register"
        style={styles.button}
        onPress={async () => {
          await register();
        }}
      />
    </SafeAreaView>
  );
};

export default Register;
