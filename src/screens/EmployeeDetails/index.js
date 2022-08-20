import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import axios from 'axios';
import API from '../../constants/api';

const EmployeeDetails = () => {
  const [searchString, setSearchString] = useState(null);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);

  const searchEmployee = async function () {
    try {
      setLoading(true);
      const {data} = await axios.get(
        `${API.GET_EMPLOYEE_PROFILE}?empId=${searchString}`,
      );

      setDetails(data);
      setLoading(false);

      console.log(data);
    } catch (error) {
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
        }}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
      {details ? (
        <View>
          <Text>Name : {details[0]?.name}</Text>
          <Text>Aadhar Number : {details[0]?.aadharNumber}</Text>
          <Text>City : {details[0]?.city}</Text>
        </View>
      ) : (
        <Text>No profile found</Text>
      )}
    </View>
  );
};

export default EmployeeDetails;
