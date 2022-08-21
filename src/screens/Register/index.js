import {StyleSheet, Text, SafeAreaView, Button} from 'react-native';
import React, {useState, useCallback} from 'react';
import DocumentPicker, {types} from 'react-native-document-picker';
import {TextInput} from 'react-native';

const Register = () => {
  const [name, setName] = useState(null);
  const [aadharNumber, setAadharNumber] = useState(null);
  const [fileResponse, setFileResponse] = useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      setFileResponse(response);
      console.log(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
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
      <Button
        style={styles.button}
        title="Select Video 📑"
        onPress={handleDocumentSelection}
      />

      <Button
        title="Register"
        style={styles.button}
        onPress={() => {
          console.log(name, aadharNumber, fileResponse);
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
    backgroundColor:"red"
  },
});
