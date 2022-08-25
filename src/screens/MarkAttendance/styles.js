import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding:10,
      margin: 10,
    },
    button: {
      margin: 10,
      backgroundColor: 'red',
    },
    title: {
      fontWeight: 'bold',
      marginBottom: 10,
      fontSize: 30,
      textAlign: 'center',
    },
    subtitle: {
      marginBottom: 10,
      fontSize: 20,
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
    fieldview: {
  
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 7
    },
  });
  
  export default styles;