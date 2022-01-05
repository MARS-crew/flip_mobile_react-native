import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import MyScreen from './MyScreen';

type MainTabParamList = {
  Home: undefined;
  My: undefined;
};

export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{title: '홈'}} />
      <Tab.Screen
        name="My"
        component={MyScreen}
        options={{title: '마이페이지'}}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
