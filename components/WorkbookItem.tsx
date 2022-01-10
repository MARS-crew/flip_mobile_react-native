import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import colorPalette from '../theme/colorPalette';

interface IWorkbookItem {
  itemWidth?: number;
  gap?: number;
}

function WorkbookItem({ itemWidth, gap }: IWorkbookItem) {
  return (
    <View
      style={[
        styles.block,
        { width: itemWidth ?? 'auto', marginHorizontal: gap ?? 0 },
      ]}>
      <Pressable>
        <View style={styles.headerBlock}>
          <Text style={styles.titleText}>문제집 이름</Text>
        </View>
        <View style={styles.bodyBlock}>
          <View style={styles.defaultThumbnail}>
            <Text style={styles.firstText}>N</Text>
          </View>
          <View>
            <Text style={styles.nickname}>narc2ss</Text>
            <Text style={styles.dateText}>21. 12. 20 · 총 0개의 문제</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    paddingRight: 8,
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
    alignItems: 'center',
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
