import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/screens/Splash';
import SCREENS from './src/constants/screen';
import Login from './src/screens/Login';
import SuperVisorLogin from './src/screens/SupervisorLogin';
import EmployeeDetails from './src/screens/EmployeeDetails';
import Register from './src/screens/Register';
import MarkAttendance from './src/screens/MarkAttendance';
import MyEmployeeAttendance from './src/screens/MyEmployeeAttendance';
import SupervisorScreen from './src/screens/SupervisorScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.SPLASH}>
        <Stack.Screen
          name={SCREENS.SPLASH}
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.LOGIN}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.SUPERVISOR_LOGIN}
          component={SuperVisorLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.EMPLOYEE_DETAILS_SCREEN}
          component={EmployeeDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.REGISTER}
          component={Register}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={SCREENS.MARK_ATTENDANCE}
          component={MarkAttendance}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.MY_EMPLOYEE_ATTENDANCE}
          component={MyEmployeeAttendance}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.SUPERVISOR_SCREEN}
          component={SupervisorScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
