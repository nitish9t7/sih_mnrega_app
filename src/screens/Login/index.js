import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import SCREENS from '../../constants/screen';
const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MNREGA ATTENDANCE</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(SCREENS.EMPLOYEE_DETAILS_SCREEN);
        }}>
        <Text style={styles.buttonText}>Get Employee Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(SCREENS.SUPERVISOR_LOGIN);
        }}>
        <Text style={styles.buttonText}>Supervisor Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
