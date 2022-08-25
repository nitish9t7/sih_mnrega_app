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
  searchButton: {
    marginTop: 20,
    backgroundColor: '#CB701D',
    borderRadius: 10,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'serif',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 60,
    paddingRight: 60,
    marginBottom: 30,

  },
  searchButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  title:{
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 25,
    marginTop: -25,
  },
  input:{
    fontSize: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 60,
    paddingRight: 60,
    borderWidth: 1
  },
  text1:{
    paddingTop: 5,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Sans-Serif',
  },
  detailing: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Sans-Serif',
  },
});

export default styles;
