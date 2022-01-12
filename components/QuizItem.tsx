import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackNavigationProp } from '../screens/RootStack';
import colorPalette from '../theme/colorPalette';

function QuizItem() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      style={styles.block}
      onPress={() => navigation.navigate('QuizWrite')}>
      <Text style={styles.quizeText}>퀴즈아이템</Text>
      <Text style={styles.answerText}>
        어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구
        어쩌구 저쩌구 어쩌...
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: colorPalette.gray0,
    padding: 16,
    borderWidth: 1,
    borderColor: colorPalette.gray3,
    borderRadius: 8,
  },
  header: {
    justifyContent: 'space-between',
  },
  quizeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colorPalette.gray6,
    marginBottom: 8,
  },
  answerText: {
    fontSize: 16,
    color: colorPalette.gray6,
  },
});

export default QuizItem;
