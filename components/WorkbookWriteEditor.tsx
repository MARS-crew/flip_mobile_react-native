import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { RootStackNavigationProp } from '../screens/RootStack';
import colorPalette from '../theme/colorPalette';
import FloatingButton from './common/FloatingButton';
import LabelWithInput from './common/LabelWithInput';
import QuizItem from './QuizItem';

function WorkbookWriteEditor() {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <>
      <View style={styles.block}>
        <LabelWithInput
          label="문제집 이름"
          placeholder="문제집 이름을 입력해주세요"
        />
        <Text style={styles.quizListLabel}>문제 목록</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={() => <QuizItem />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={() => <View style={styles.separator} />}
        />
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
});

export default WorkbookWriteEditor;
