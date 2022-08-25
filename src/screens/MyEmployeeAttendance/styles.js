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
      marginTop: 10,
      backgroundColor: 'red',
    },
    title:{
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: -25,
      fontSize: 30,
      textAlign: 'center',
    },
    input: {
      fontSize: 20,
      paddingTop: 8,
      paddingBottom: 8,
      borderWidth: 1,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 3,
      textAlign: 'center',
    },
    loading: {
      fontSize: 15,
      marginTop: 10,
    },
    detailing: {
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'Sans-Serif',
    },
  });
  
export default styles;