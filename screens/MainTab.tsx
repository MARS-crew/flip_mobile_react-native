import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import MyScreen from './MyScreen';
import SettingsScreen from './SettingsScreen';
import colorPalette from '../theme/colorPalette';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyWorkbook from './MyWorkbook';

type MainTabParamList = {
  Home: undefined;
  MyWorkbook: undefined;
  Settings: undefined;
};

export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colorPalette.primary,
        tabBarInactiveTintColor: colorPalette.gray5,
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="MyWorkbook"
        component={MyWorkbook}
        options={{
          title: '내 문제집',
          tabBarIcon: ({ color, size }) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'FLIP',
          headerTintColor: colorPalette.primary,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: '설정',
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
