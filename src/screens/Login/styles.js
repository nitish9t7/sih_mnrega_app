import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#CB701D',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'poppins',
  },
  title: {
    //fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 22,
  },
});

export default styles;
