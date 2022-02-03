import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, LabelWithInput } from '../components/common';
import useSignIn from '../hooks/useSignIn';
import colorPalette from '../theme/colorPalette';
import { RootStackNavigationProp } from './RootStack';

function SignInScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const { mutate: signIn, isLoading } = useSignIn();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const init = () => {
    setEmail('');
    setPassword('');
    Keyboard.dismiss();
  };

  const onPress = () => {
    if (isLoading) return;

    if (email === '' || password === '') return;

    signIn({ email, password });
    init();
  };

  const goToSignUpScreen = () => {
    navigation.navigate('SignUp');
    init();
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
          label="아이디"
          placeholder="아이디를 입력해주세요"
          value={email}
          onChangeText={setEmail}
        />
        <LabelWithInput
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          hasMarginBottom
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button text="로그인" onPress={onPress} />
        <View style={styles.separator} />
        <Text style={styles.authText}>
          계정이 없으신가요?{' '}
          <Text style={styles.strongText} onPress={goToSignUpScreen}>
            회원가입 하러가기
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

export default SignInScreen;
