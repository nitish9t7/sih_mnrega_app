import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import SCREENS from '../../constants/screen';

const Splash = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const validateLogin = async function () {
    setTimeout(() => {
      navigation.navigate(SCREENS.LOGIN);
    }, 2000);
  };

  useEffect(() => {
    validateLogin();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MNREGA ATTENDANCE SYSTEM</Text>
    </View>
  );
};

export default Splash;
