import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MyWorkbookList from '../components/MyWorkbookList';
import RecentWorkbookList from '../components/RecentWorkbookList';
import TopWorkbookList from '../components/TopWorkbookList';
import colorPalette from '../theme/colorPalette';

function HomeScreen() {
  return (
    <ScrollView style={styles.block}>
      <MyWorkbookList />
      <TopWorkbookList />
      <RecentWorkbookList />
      <View style={{ height: 16 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: colorPalette.gray1,
    paddingBottom: 16,
  },
});

export default HomeScreen;
