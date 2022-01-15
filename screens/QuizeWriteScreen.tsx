import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colorPalette from '../theme/colorPalette';
import { RootStackParamList } from './RootStack';
import QuizWriteHeader from '../components/QuizWriteHeader';
import QuizWriteEditor from '../components/QuizWriteEditor';
import useAddQuiz from '../hooks/useAddQuiz';
import useModifyQuiz from '../hooks/useModifyQuiz';

type QuizeWriteParams = RouteProp<RootStackParamList, 'QuizWrite'>;

function QuizeWriteScreen() {
  const { params } = useRoute<QuizeWriteParams>();
  const quiz = params.quiz;
  const workbookId = params.workbookId;
  const { mutate: addQuiz, isLoading: isAddLoading } = useAddQuiz();
  const { mutate: modifyQuiz, isLoading: isModifyLoading } = useModifyQuiz();
  const [question, setQuestion] = useState('');
  const [result, setReuslt] = useState('');

  const onSave = () => {
    if (isAddLoading && isModifyLoading) return;
    if (question === '' || result === '') return;

    if (quiz) {
      if (question === quiz.question && result === quiz.result) return;
      modifyQuiz({
        cardId: quiz.id,
        quiz: { question, result },
      });
    } else {
      addQuiz({
        workbookId,
        quiz: { question, result },
      });
    }
  };

  useEffect(() => {
    if (quiz) {
      setQuestion(quiz.question);
      setReuslt(quiz.result);
    }
  }, [quiz]);

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <QuizWriteHeader onSave={onSave} />
      <QuizWriteEditor
        question={question}
        result={result}
        setQuestion={setQuestion}
        setResult={setReuslt}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
    backgroundColor: colorPalette.gray0,
  },
  row: {
    flexDirection: 'row',
  },
});

export default QuizeWriteScreen;
