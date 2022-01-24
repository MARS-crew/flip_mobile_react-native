import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyWorkbookList from '../components/MyWorkbookList';
import WorkBookList from '../components/WorkBookList';
import colorPalette from '../theme/colorPalette';

function HomeScreen() {
  return (
    <View style={styles.block}>
      <MyWorkbookList />
      <WorkBookList title="🔥 인기 문제집" />
      <WorkBookList title="🌱 최신 문제집" />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: colorPalette.gray1,
  },
});

export default HomeScreen;
