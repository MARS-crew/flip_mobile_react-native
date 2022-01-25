import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import LearnScreen from './LearnScreen';
import MainTab from './MainTab';
import QuizeWriteScreen from './QuizeWriteScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import WorkbookWriteScreen from './WorkbookWriteScreen';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';
import { Quiz, Workbook } from '../types';
import useUser from '../hooks/useUser';
import GoBack from '../components/common/GoBack';

export type RootStackParamList = {
  Splash: undefined;
  MainTab: undefined;
  SignUp: undefined;
  SignIn: undefined;
  WorkbookWrite: {
    id: number;
  };
  Learn: {
    item: Workbook;
  };
  QuizWrite: {
    quiz: Quiz | null;
    workbookId: number;
  };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const { data: user } = useUser();
  useAuthLoadEffect();
  return (
    <Stack.Navigator>
      {!user && (
        <>
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
        </>
      )}
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Learn"
        component={LearnScreen}
        options={{
          title: '학습하기',
          headerLeft: () => <GoBack />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="WorkbookWrite"
        component={WorkbookWriteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizWrite"
        component={QuizeWriteScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
