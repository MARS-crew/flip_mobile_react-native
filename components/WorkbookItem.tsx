import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colorPalette from '../theme/colorPalette';

function WorkbookItem() {
  const [editable, setEditable] = useState(true);
  const [toggle, setToggle] = useState(true);

  const onEditPress = () => {
    console.log('수정');
  };
  const onRemovePress = () => {
    console.log('삭제');
  };

  return (
    <View style={styles.block}>
      <Pressable>
        <View style={styles.headerBlock}>
          <Text style={styles.titleText}>문제집 이름</Text>
          {editable && (
            <Pressable style={styles.icon} onPress={() => setToggle(!toggle)}>
              <Icon name="more-vert" color={colorPalette.gray6} size={24} />
            </Pressable>
          )}
          {editable && toggle && (
            <View style={styles.more}>
              <Pressable style={{ padding: 8 }}>
                <Text onPress={onEditPress}>수정</Text>
              </Pressable>
              <Pressable style={{ padding: 8 }}>
                <Text onPress={onRemovePress}>삭제</Text>
              </Pressable>
            </View>
          )}
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
    shadowColor: colorPalette.gray6,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 3,
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
