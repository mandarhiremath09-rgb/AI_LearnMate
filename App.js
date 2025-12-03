import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import PasswordSuccessScreen from './screens/PasswordSuccessScreen';
import StudentHome from './screens/StudentHome';
import VideoDetail from './screens/VideoDetail';
import ProfileScreen from './screens/ProfileScreen';
import UploadLecture from './screens/UploadLecture';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="PasswordSuccess" component={PasswordSuccessScreen} />
        <Stack.Screen name="StudentHome" component={StudentHome} />
        <Stack.Screen name="VideoDetail" component={VideoDetail} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="UploadLecture" component={UploadLecture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
