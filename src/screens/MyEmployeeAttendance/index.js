import React, {useState} from 'react';
import {} from 'react-native';
import axios from 'axios';
import API from '../../constants/api';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  View,
} from 'react-native';

const MyEmployeeAttendance = () => {
  const [loading, setLoading] = useState(true);
  const [attendance, setAttendance] = useState(null);
  const [date, setDate] = useState(null);

  const getAttendance = async function () {
    try {
      const {data} = await axios.get(
        `${API.GET_MY_EMPLOYEE_ATTENDANCE}?supervisorId=1&workId=8&date=${date}`,
      );

      setAttendance(data.data);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  return (
    <View>
      <Text>My employee attendance</Text>

      <TextInput
        placeholder="Enter date in YYYY-MM-DD"
        onChangeText={e => {
          setDate(e);
        }}
      />

      <Button
        title="Get Details"
        style={styles.button}
        onPress={async () => {
          console.log(date);
          await getAttendance();
        }}
      />
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <View>
          {attendance?.map((emp, index) => {
            return (
              <View
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Text>Name : {emp.name} </Text>
                {emp.present ? (
                  <Text style={{color: 'green'}}>present</Text>
                ) : (
                  <Text style={{color: 'red'}}>absent</Text>
                )}
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default MyEmployeeAttendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
  },
  button: {
    margin: 20,
    backgroundColor: 'red',
  },
});
