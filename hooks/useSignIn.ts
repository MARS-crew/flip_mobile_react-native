import { useNavigation } from '@react-navigation/native';
import { useMutation } from 'react-query';
import { signIn } from '../api/auth';
import { applyToken, clearToken } from '../api/client';
import { RootStackNavigationProp } from '../screens/RootStack';
import authStorage from '../storages/authStorage';
import { Error, SignInResult } from '../types';
import { customToast } from '../utils/toastConfig';

export default function useSignIn() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const mutation = useMutation(signIn, {
    onSuccess: (data: SignInResult) => {
      authStorage.set(data);
      applyToken(data.accessToken);
      navigation.navigate('MainTab');
    },
    onError: (error: Error) => {
      authStorage.clear();
      clearToken();
      customToast.error(error);
    },
  });
  return mutation;
}
