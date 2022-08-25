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
  title: {
    fontWeight: 'bold',
    marginBottom: 30,
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    margin: 20,
    backgroundColor: 'red',
  },
  input: {
    fontSize: 16,
    width: '70%',
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 3,
    textAlign: 'center',
  },
  input1:{
    fontSize: 16,
    width: '70%',
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 3,
    textAlign: 'center',
    marginBottom: 30,
  }
});

export default styles;
