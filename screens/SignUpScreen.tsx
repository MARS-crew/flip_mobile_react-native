import { useNavigation } from '@react-navigation/native';
import React, { ChangeEvent, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/common/Button';
import LabelWithInput from '../components/common/LabelWithInput';
import useSignUp from '../hooks/useSignUp';
import colorPalette from '../theme/colorPalette';
import { ITerm } from '../types';
import { emailRegex, passwordRegex } from '../utils/regExp';
import { RootStackNavigationProp } from './RootStack';

function SignUpScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const { mutate: signUp, isLoading } = useSignUp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [emailTerm, setEmailTerm] = useState<ITerm>({
    message: '이메일 형식이 맞지 않습니다',
    value: false,
  });
  const [passwordTerm, setPasswordTerm] = useState<ITerm>({
    message: '문자, 숫자, 특수문자를 포함한 최소 8자리여야 합니다.',
    value: false,
  });
  const [passwordCheckTerm, setPasswordCheckTerm] = useState<ITerm>({
    message: '비밀번호가 서로 다릅니다',
    value: false,
  });

  const onChangeEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const { text } = e.nativeEvent;
    setEmail(text);
    emailRegex.test(text)
      ? setEmailTerm({ ...emailTerm, value: false })
      : setEmailTerm({ ...emailTerm, value: true });
  };

  const onChangePassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const { text } = e.nativeEvent;
    setPassword(text);
    passwordRegex.test(text)
      ? setPasswordTerm({ ...passwordTerm, value: false })
      : setPasswordTerm({ ...passwordTerm, value: true });

    if (passwordCheck === text)
      setPasswordCheckTerm({ ...passwordCheckTerm, value: false });
  };

  const onChangePasswordCheck = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const { text } = e.nativeEvent;
    setPasswordCheck(text);
    password === text
      ? setPasswordCheckTerm({ ...passwordCheckTerm, value: false })
      : setPasswordCheckTerm({ ...passwordCheckTerm, value: true });
  };

  const onPress = () => {
    if (isLoading) return;

    if (emailTerm.value || passwordTerm.value || passwordCheckTerm.value)
      return;

    signUp({ email, password });
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.select({ ios: -64, android: -16 })}
        style={styles.avoid}>
        <Text style={styles.title}>간편한 개념정리 !</Text>
        <Text style={styles.title}>면접질문 준비 !</Text>
        <Text style={styles.title}>암기 검증 !</Text>
        <View style={styles.logoBlock}>
          <Image source={require('../assets/images/Logo.png')} />
        </View>
        <LabelWithInput
          keyboardType="email-address"
          textContentType="emailAddress"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          term={emailTerm}
          value={email}
          onChange={e => onChangeEmail(e)}
        />
        <LabelWithInput
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          secureTextEntry
          term={passwordTerm}
          value={password}
          onChange={e => onChangePassword(e)}
        />
        <LabelWithInput
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요"
          hasMarginBottom
          secureTextEntry
          term={passwordCheckTerm}
          value={passwordCheck}
          onChange={e => onChangePasswordCheck(e)}
        />
        <Button text="회원가입" onPress={onPress} />
        <View style={styles.separator} />
        <Text style={styles.authText}>
          계정이 있으신가요?{' '}
          <Text
            style={styles.strongText}
            onPress={() => navigation.navigate('SignIn')}>
            로그인 하러가기
          </Text>
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    padding: 16,
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: colorPalette.gray4,
    marginVertical: 16,
  },
  authText: {
    color: colorPalette.gray5,
    textAlign: 'center',
  },
  strongText: {
    color: colorPalette.primary,
    fontWeight: 'bold',
  },
  title: {
    color: colorPalette.gray5,
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoBlock: {
    marginTop: 16,
    alignItems: 'center',
  },
});

export default SignUpScreen;
