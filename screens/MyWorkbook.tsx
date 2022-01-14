import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useInfiniteQuery, useQuery } from 'react-query';
import { getMyWorkbooks } from '../api/workbooks';
import FloatingButton from '../components/common/FloatingButton';
import WorkbookItem from '../components/WorkbookItem';
import colorPalette from '../theme/colorPalette';
import { Item, WorkbookListResult } from '../types';
import { RootStackNavigationProp } from './RootStack';

function MyWorkbook() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const { data, isLoading, isError } = useQuery('getMyWorkbooks', () =>
    getMyWorkbooks({ cursor: 1 }),
  );
  if (isLoading) {
    return <Text>loading</Text>;
  }

  return (
    <View style={styles.block}>
      {data!.items.length ? (
        <FlatList
          data={data!.items}
          renderItem={({ item }) => <WorkbookItem item={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListHeaderComponent={() => <View style={styles.separator} />}
          ListFooterComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.noItemBlock}>
          <Image source={require('../assets/images/blank_canvas.png')} />
          <Text style={styles.noItemText}>문제집이 없습니다</Text>
        </View>
      )}

      <FloatingButton
        title="문제집 추가"
        onPress={() => navigation.navigate('WorkbookWrite')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colorPalette.gray0,
  },
  separator: {
    height: 16,
  },
  noItemBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noItemText: {
    fontSize: 14,
    color: colorPalette.gray5,
    marginTop: 24,
  },
});

export default MyWorkbook;
