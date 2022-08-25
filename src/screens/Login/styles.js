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
    margin: 20,
    backgroundColor: '#CB701D',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    fontFamily: 'serif',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 60,
    paddingRight: 60,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    
  },
  title: {
    //fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 30,

  },
});

export default styles;
