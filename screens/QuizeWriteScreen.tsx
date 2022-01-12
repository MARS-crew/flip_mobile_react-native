import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import FloatingButton from '../components/common/FloatingButton';
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
