import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import WorkbookItem from '../components/WorkbookItem';
import colorPalette from '../theme/colorPalette';
import { RootStackNavigationProp } from './RootStack';

function MyWorkbook() {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <View style={styles.block}>
      <FlatList
        data={list}
        renderItem={() => <WorkbookItem />}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        ListHeaderComponent={() => <View style={styles.seperator} />}
        ListFooterComponent={() => <View style={{ height: 64 }} />}
      />
      <Pressable
        style={styles.floatingButton}
        onPress={() => navigation.navigate('WorkbookWrite')}>
        <Text style={styles.buttonText}>문제 추가</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: 16,
    backgroundColor: colorPalette.gray0,
  },
  seperator: {
    height: 16,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 12,
    left: 32,
    right: 32,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorPalette.primary,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: colorPalette.gray0,
    fontWeight: 'bold',
  },
});

export default MyWorkbook;
