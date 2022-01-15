import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { getMyWorkbooks } from '../api/workbooks';
import Button from '../components/common/Button';
import FloatingButton from '../components/common/FloatingButton';
import LabelWithInput from '../components/common/LabelWithInput';
import WorkbookItem from '../components/WorkbookItem';
import useCreateWorkbook from '../hooks/useCreateWorkbook';
import colorPalette from '../theme/colorPalette';

function MyWorkbook() {
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState('');

  const { data, isLoading } = useQuery('myWorkbook', () =>
    getMyWorkbooks({ cursor: 1 }),
  );

  const { mutate: createWorkbook, isLoading: isCreatLoading } =
    useCreateWorkbook();

  const init = () => {
    setTitle('');
    setToggle(false);
  };

  const onCancel = () => {
    setToggle(false);
    init();
  };

  const onCreateWorkbook = () => {
    if (isCreatLoading) {
      return;
    }
    if (title === '') {
      return;
    }
    createWorkbook({ title });
    init();
  };

  if (isLoading) {
    return <Text>loading</Text>;
  }
  return (
    <>
      <View style={styles.block}>
        {toggle && (
          <View style={styles.createBlock}>
            <View style={styles.createContainer}>
              <LabelWithInput
                label="내 문제집 생성"
                placeholder="문제집 이름을 입력해주세요"
                value={title}
                onChangeText={setTitle}
              />
              <View style={styles.buttonWrap}>
                <Button text="취소" color="transparent" onPress={onCancel} />
                <Button text="확인" hasMarginLeft onPress={onCreateWorkbook} />
              </View>
            </View>
          </View>
        )}
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

        <FloatingButton title="문제집 추가" onPress={() => setToggle(true)} />
      </View>
    </>
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
  createBlock: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#00000088',
    zIndex: 999,
    alignItems: 'center',
  },
  createContainer: {
    width: '80%',
    marginTop: 80,
    padding: 16,
    paddingTop: 0,
    borderRadius: 8,
    backgroundColor: colorPalette.gray0,
  },
  buttonWrap: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default MyWorkbook;
