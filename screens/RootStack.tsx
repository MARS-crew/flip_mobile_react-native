import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import LearnScreen from './LearnScreen';
import MainTab from './MainTab';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import WorkbookWriteScreen from './WorkbookWriteScreen';

type RootStackParamList = {
  MainTab: undefined;
  SignUp: undefined;
  SignIn: undefined;
  WorkbookWrite: undefined;
  Learn: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Learn"
        component={LearnScreen}
        options={{
          title: '학습하기',
          headerLeft: () => <View />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="WorkbookWrite" component={WorkbookWriteScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
