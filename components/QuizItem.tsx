import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { RootStackNavigationProp } from '../screens/RootStack';
import colorPalette from '../theme/colorPalette';
import { Quiz } from '../types';

interface QuizItemProps {
  quiz: Quiz;
  inx: number;
  workbookId: number;
}

function QuizItem({ quiz, inx, workbookId }: QuizItemProps) {
  const navigation = useNavigation<RootStackNavigationProp>();
  const turncate = (text: string) => {
    const replaced = text.replace(/\n/g, ' ');
    if (replaced.length <= 80) {
      return replaced;
    }
    return replaced.slice(0, 80).concat('...');
  };
  return (
    <Pressable
      style={styles.block}
      onPress={() => navigation.navigate('QuizWrite', { quiz, workbookId })}>
      <Text style={styles.quizeText}>
        {inx + 1}. {quiz.question}
      </Text>
      <Text style={styles.answerText}>{turncate(quiz.result)}</Text>
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
