import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../constants/screen';
const SupervisorScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Supervisor Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(SCREENS.MY_EMPLOYEE_ATTENDANCE);
        }}>
        <Text style={styles.button}>View My Employee Attendance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(SCREENS.MARK_ATTENDANCE);
        }}>
        <Text style={styles.button}>Mark My Employee Attendance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(SCREENS.REGISTER);
        }}>
        <Text style={styles.button}>Register Employee</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(SCREENS.HIRE);
        }}>
        <Text style={styles.button}>Hire Employee</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SupervisorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
    margin: 50,
  },
  button: {
    margin: 20,
    backgroundColor: 'red',
  },
});
