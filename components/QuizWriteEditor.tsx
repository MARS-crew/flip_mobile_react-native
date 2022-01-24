import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LabelWithInput from '../components/common/LabelWithInput';
import colorPalette from '../theme/colorPalette';

interface QuizWriteEditorProps {
  question: string;
  result: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

function QuizWriteEditor({
  question,
  result,
  setQuestion,
  setResult,
}: QuizWriteEditorProps) {
  return (
    <KeyboardAvoidingView style={styles.block}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LabelWithInput
          label="문제"
          placeholder="문제를 입력해주세요"
          value={question}
          onChangeText={setQuestion}
        />
        <LabelWithInput
          label="정답"
          placeholder="정답을 입력해주세요"
          value={result}
          onChangeText={setResult}
          multiline
        />
      </ScrollView>
    </KeyboardAvoidingView>
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

export default QuizWriteEditor;
