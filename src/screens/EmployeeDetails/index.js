import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import axios from 'axios';
import API from '../../constants/api';

const EmployeeDetails = () => {
  const [searchString, setSearchString] = useState(null);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);
  const [attendance, setAttendance] = useState(null);

  const getAttendance = async function () {
    try {
      const {data} = await axios.get(
        `${API.GET_EMPLOYEE_ATTENDENCE}?empId=${searchString}`,
      );
      console.log(data);
      setAttendance(data);
    } catch (error) {
      console.log(error);
      setAttendance(null)
      throw error;
    }
  };

  const searchEmployee = async function () {
    try {
      setLoading(true);
      const {data} = await axios.get(
        `${API.GET_EMPLOYEE_PROFILE}?empId=${searchString}`,
      );

      setDetails(data);
      setLoading(false);

      console.log(details);
    } catch (error) {
      setDetails(null);
      console.log(error);
    }
  };

  useEffect(() => {}, [details]);
  return (
    <View style={styles.container}>
      <Text>Employee details screen</Text>
      <TextInput
        placeholder="Search employee"
        onChangeText={e => {
          setSearchString(e);
        }}
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={async () => {
          await searchEmployee();
          await getAttendance();
        }}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
      <View>
        {details ? (
          <View>
            <Text>Name : {details?.name}</Text>
            <Text>Aadhar Number : {details?.aadharNumber}</Text>
            <Text>City : {details?.city}</Text>
          </View>
        ) : (
          <Text>No profile found</Text>
        )}
      </View>
      {attendance?.length ? (
        <View>
          <Text>Attendance (Present Days)</Text>
          {attendance.map((ele, index) => {
            let date = new Date(ele.dateTime).toUTCString();
            return (
              <View key={index}>
                <Text>{date}</Text>
              </View>
            );
          })}
        </View>
      ) : (
        <View>
          <Text>Attendance not found</Text>
        </View>
      )}
    </View>
  );
};

export default EmployeeDetails;
