import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import MainTab from './MainTab';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

type RootStackParamList = {
  MainTab: undefined;
  SignUp: undefined;
  SignIn: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
}

export default RootStack;
