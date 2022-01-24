import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from './RootStack';
import QuizWriteHeader from '../components/QuizWriteHeader';
import QuizWriteEditor from '../components/QuizWriteEditor';
import useAddQuiz from '../hooks/useAddQuiz';
import useModifyQuiz from '../hooks/useModifyQuiz';
import useDeleteQuiz from '../hooks/useDeleteQuiz';

type QuizeWriteParams = RouteProp<RootStackParamList, 'QuizWrite'>;

function QuizeWriteScreen() {
  const { params } = useRoute<QuizeWriteParams>();
  const navigation = useNavigation();
  const quiz = params.quiz;
  const workbookId = params.workbookId;

  const [question, setQuestion] = useState('');
  const [result, setReuslt] = useState('');

  const { mutate: addQuiz, isLoading: isAddLoading } = useAddQuiz();
  const { mutate: modifyQuiz, isLoading: isModifyLoading } = useModifyQuiz();
  const { mutate: deleteQuze, isLoading: isDeleteLoading } = useDeleteQuiz();

  const onSave = () => {
    if (isAddLoading && isModifyLoading) return;
    if (question === '' || result === '') return;

    if (quiz) {
      if (question === quiz.question && result === quiz.result)
        return navigation.goBack();
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

  const onDelete = () => {
    if (isDeleteLoading) return;
    if (quiz) {
      deleteQuze(quiz!.id);
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
      <QuizWriteHeader onSave={onSave} onDelete={onDelete} />
      <QuizWriteEditor
        question={question}
        result={result}
        setQuestion={setQuestion}
        setResult={setReuslt}
      />
    </SafeAreaView>
  );
}

export default QuizeWriteScreen;
