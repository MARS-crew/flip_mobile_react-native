import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LabelWithInput from '../components/common/LabelWithInput';
import colorPalette from '../theme/colorPalette';

function QuizeWriteScreen() {
  return (
    <>
      <KeyboardAvoidingView style={styles.block}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <LabelWithInput label="문제" placeholder="문제를 입력해주세요" />
          <LabelWithInput
            label="정답"
            placeholder="정답을 입력해주세요"
            multiline
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
    backgroundColor: colorPalette.gray0,
  },
});

export default QuizeWriteScreen;
