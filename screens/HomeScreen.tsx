import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MyWorkbookList from '../components/MyWorkbookList';
import RecentWorkbookList from '../components/RecentWorkbookList';
import WorkBookList from '../components/WorkBookList';
import colorPalette from '../theme/colorPalette';

function HomeScreen() {
  return (
    <ScrollView style={styles.block}>
      <MyWorkbookList />
      {/* <WorkBookList title="🔥 인기 문제집" /> */}
      <RecentWorkbookList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: colorPalette.gray1,
  },
});

export default HomeScreen;
