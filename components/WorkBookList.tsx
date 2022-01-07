import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorPalette from '../theme/colorPalette';
import WorkbookItem from './WorkbookItem';

interface WorkBookListProps {
  title: string;
}

function WorkBookList({ title }: WorkBookListProps) {
  return (
    <View style={styles.block}>
      <Text style={styles.titleText}>{title}</Text>
      <WorkbookItem />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: colorPalette.gray0,
    marginBottom: 16,
    padding: 16,
    borderBottomColor: colorPalette.gray3,
    borderBottomWidth: 1,
  },
  titleText: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: 'bold',
    color: colorPalette.gray6,
  },
});

export default WorkBookList;
