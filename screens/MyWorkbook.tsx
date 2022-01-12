import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import FloatingButton from '../components/common/FloatingButton';
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
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => <View style={styles.separator} />}
        ListFooterComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton
        title="문제집 추가"
        onPress={() => navigation.navigate('WorkbookWrite')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: 16,
    backgroundColor: colorPalette.gray0,
  },
  separator: {
    height: 16,
  },
});

export default MyWorkbook;
