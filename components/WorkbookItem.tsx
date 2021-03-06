import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import useToggleWorkbookLike from '../hooks/useToggleWorkbookLike';
import { RootStackNavigationProp } from '../screens/RootStack';
import colorPalette from '../theme/colorPalette';
import { Workbook } from '../types';
import { formatDate } from '../utils';
import IconButton from './common/IconButton';

interface IWorkbookItem {
  item: Workbook;
  itemWidth?: number;
  gap?: number;
}

function WorkbookItem({ item, itemWidth, gap }: IWorkbookItem) {
  const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute();

  const { mutate, isLoading } = useToggleWorkbookLike();

  const onPress = () => {
    route.name === 'MyWorkbook'
      ? navigation.navigate('WorkbookWrite', { id: item.id })
      : navigation.navigate('Learn', { item });
  };

  const onPressLike = () => {
    if (isLoading) return;
    mutate(item.id);
  };

  return (
    <View
      style={[
        styles.block,
        { width: itemWidth ?? 'auto', marginHorizontal: gap ?? 0 },
      ]}>
      <Pressable onPress={onPress}>
        <View style={styles.headerBlock}>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
        <View style={styles.bodyBlock}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.defaultThumbnail}>
              <Text style={styles.firstText}>
                {item.user.email[0].toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={styles.nickname}>{item.user.email}</Text>
              <Text style={styles.dateText}>
                {formatDate(item.createdAt)} · 좋아요 {item.likeCount}개 · 퀴즈{' '}
                {item.cards.length}개
              </Text>
            </View>
          </View>
          <View>
            {item.hasLike ? (
              <IconButton
                name="favorite"
                onPress={onPressLike}
                color={colorPalette.danger}
              />
            ) : (
              <IconButton name="favorite-border" onPress={onPressLike} />
            )}
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: colorPalette.gray0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colorPalette.gray3,
    zIndex: 999,
  },
  headerBlock: {
    flexDirection: 'row',
    height: 48,
    marginBottom: 8,
  },
  titleText: {
    flex: 1,
    color: colorPalette.gray7,
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  more: {
    position: 'absolute',
    top: 32,
    right: 16,
    backgroundColor: colorPalette.gray0,
    shadowColor: colorPalette.gray6,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  defaultThumbnail: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorPalette.gray4,
    marginRight: 8,
  },
  firstText: {
    fontSize: 18,
    color: colorPalette.gray0,
  },
  bodyBlock: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  nickname: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colorPalette.gray6,
    marginBottom: 4,
  },
  dateText: {
    fontSize: 12,
    color: colorPalette.gray5,
  },
});

export default WorkbookItem;
