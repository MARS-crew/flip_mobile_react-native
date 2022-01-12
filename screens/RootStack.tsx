import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import LearnScreen from './LearnScreen';
import MainTab from './MainTab';
import QuizeWriteScreen from './QuizeWriteScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import WorkbookWriteScreen from './WorkbookWriteScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconButton from '../components/common/IconButton';
import colorPalette from '../theme/colorPalette';
import { useNavigation } from '@react-navigation/native';
import authStorage from '../storages/authStorage';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';
import useUser from '../hooks/useUser';

type RootStackParamList = {
  MainTab: undefined;
  SignUp: undefined;
  SignIn: undefined;
  WorkbookWrite: undefined;
  Learn: undefined;
  QuizWrite: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const user = useUser();
  useAuthLoadEffect();
  return (
    <Stack.Navigator>
      {!user && (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false, gestureEnabled: false }}
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
          headerLeft: () => <View />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="WorkbookWrite"
        component={WorkbookWriteScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="QuizWrite"
        component={QuizeWriteScreen}
        options={{
          title: '퀴즈 추가',
          gestureEnabled: false,
          headerLeft: () => <View />,
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <IconButton
                name="delete"
                color={colorPalette.danger}
                onPress={() => navigation.goBack()}
              />
              <IconButton
                name="check"
                color={colorPalette.success}
                hasMarginLeft
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
