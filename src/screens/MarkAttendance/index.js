import axios from 'axios';
import React, {useState, useCallback, useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
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

  const [selectWork, setSelectWork] = useState(null);

  const markAttendance = async function () {
    try {
      console.log(selectWork);
      const response = await axios.post(API.MARK_ATTENDANCE, {
        workId: selectWork,
      });

      console.log(response);
    } catch (error) {
      throw error;
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
      });
      setFileResponse(response);
      console.log(response[0]);
      const details = await RNFS.readFile(response[0].uri, 'base64');
      setFileData(details);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  useEffect(() => {
    getWork();
  }, []);
  return (
    <View
    style={styles.container}
    >
      <Text
      style={styles.title}
      >Mark Attendance</Text>
      <Text
      style={styles.subtitle}
      >Select work</Text>
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
        onPress={handleDocumentSelection}
      />

      <Button
        title="Submit"
        onPress={async () => {
          await uploadPhoto(fileData);
          await markAttendance();
        }}
      />
    </View>
  );
};

export default MarkAttendance;


