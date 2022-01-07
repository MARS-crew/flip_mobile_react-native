import React from 'react';
import { Text, View } from 'react-native';
import WorkBookList from '../components/WorkBookList';

function HomeScreen() {
  return (
    <View>
      <WorkBookList title="🔥 인기 문제집" />
      <WorkBookList title="👋 최신 문제집" />
    </View>
  );
}

export default HomeScreen;
