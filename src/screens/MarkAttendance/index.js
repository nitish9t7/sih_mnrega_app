import axios from 'axios';
import React, {useState, useCallback, useEffect} from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import DocumentPicker, {types} from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import API from '../../constants/api';
import {uploadPhoto} from '../../helpers/uploadS3';
import styles from './styles';

const MarkAttendance = () => {
  const [fileResponse, setFileResponse] = useState([]);
  const [fileData, setFileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [work, setWork] = useState(null);
  const [singleFile, setSingleFile] = useState(null);

  const [singleFileName, setsingleFileName] = useState(null);

  const [selectWork, setSelectWork] = useState(null);

  const [selectPhotoUrl, setselectPhotoUrl] = useState(null);

  const markAttendance = async function () {
    try {
      console.log('SELECT_WORK : ' + selectWork);
      console.log('SELECT_PHOTO_URL : ' + selectPhotoUrl);
      setselectPhotoUrl(
        'https://utkarsh16718.s3.ap-south-1.amazonaws.com/' + singleFileName,
      );
      if (selectPhotoUrl != null) {
        const response = await axios.post(API.MARK_ATTENDANCE, {
          workId: selectWork,
          groupPhotoUrl: selectPhotoUrl,
        });
        console.log(response);
        alert('Attendence marked');
      } else {
        console.log('URL NOT RECIEVED');
      }
    } catch (error) {
      throw error;
    }
  };

  const uploadImage = async () => {
    // Check if any file is selected or not
    console.log('singleFile: ' + singleFile);
    if (singleFile != null) {
      const fileToUpload = singleFile;
      const data = new FormData();
      // data.append('file', fileToUpload);
      data.append('file', {
        uri: fileToUpload,
        type: 'image/png',
        name: singleFileName,
      });
      // data.append('supervisorId', '123');
      await axios({
        method: 'post',
        url: 'http://172.21.3.215:3000/upload/',
        data: data,
        headers: {'Content-Type': 'multipart/form-data'},
      })
        .then(function (response) {
          //handle success
          console.log('RESPONSE: ' + JSON.stringify(response));
          console.log('URL :' + response.data.url);
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
  const getWork = async function () {
    try {
      const {data} = await axios.get(API.GET_ATTACHED_WORK);
      setWork(data);
    } catch (error) {
      throw error;
    }
  };
  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.images],
      });
      setFileResponse(response);
      console.log(response[0]);
      const details = await RNFS.readFile(response[0].uri, 'base64');
      setFileData(details);
      setSingleFile(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  useEffect(() => {
    getWork();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mark Attendance</Text>
      <Text style={styles.subtitle}>Select work</Text>
      {work?.map((w, index) => {
        return (
          <Text
            style={styles.fieldview}
            key={index}
            onPress={() => {
              setSelectWork(w.workId);
            }}>
            {w.workDesciption}
          </Text>
        );
      })}
      <Button
        style={styles.button}
        title="Select Photo 📑"
        onPress={selectFile}
        // onPress={handleDocumentSelection}
      />

      <Button
        title="Submit"
        onPress={async () => {
          await uploadImage();
          markAttendance();
        }}
      />
    </View>
  );
};

export default MarkAttendance;
