import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { RootStackNavigationProp } from '../screens/RootStack';
import colorPalette from '../theme/colorPalette';
import { Workbook } from '../types';
import FloatingButton from './common/FloatingButton';
import LabelWithInput from './common/LabelWithInput';
import QuizItem from './QuizItem';

interface WorkbookWriteEditorProps {
  item: Workbook | null;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

function WorkbookWriteEditor({
  item,
  title,
  setTitle,
}: WorkbookWriteEditorProps) {
  const navigation = useNavigation<RootStackNavigationProp>();
  useEffect(() => {
    navigation.setOptions({ title: '문제집 수정' });
  }, [navigation]);

  return (
    <>
      <View style={styles.block}>
        {item ? (
          <LabelWithInput label="문제집 이름" placeholder={item.title} />
        ) : (
          <LabelWithInput
            label="문제집 이름"
            placeholder="문제집 이름을 입력해주세요"
            value={title}
            onChangeText={setTitle}
          />
        )}
        <Text style={styles.quizListLabel}>퀴즈 목록</Text>
        {item?.cards.length ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={item!.cards}
            renderItem={() => <QuizItem />}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={() => <View style={styles.separator} />}
          />
        ) : (
          <View style={styles.noQuizBlock}>
            <Image source={require('../assets/images/toy_car.png')} />
            <Text style={styles.noQuizText}>퀴즈가 없습니다</Text>
          </View>
        )}
      </View>
      <FloatingButton
        title="문제 추가"
        onPress={() => navigation.navigate('QuizWrite')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colorPalette.gray0,
  },
  quizListLabel: {
    fontSize: 14,
    marginTop: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color: colorPalette.gray6,
  },
  separator: {
    height: 16,
  },
  noQuizBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noQuizText: {
    fontSize: 14,
    color: colorPalette.gray4,
    marginTop: 16,
  },
});

export default WorkbookWriteEditor;
