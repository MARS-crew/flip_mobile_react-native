import { useNavigation } from '@react-navigation/native';
import { useMutation } from 'react-query';
import { signUp } from '../api/auth';
import { applyToken, clearToken } from '../api/client';
import { RootStackNavigationProp } from '../screens/RootStack';
import authStorage from '../storages/authStorage';
import { Error } from '../types';
import { customToast } from '../utils/toastConfig';

export default function useSignUp() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const mutation = useMutation(signUp, {
    onSuccess: data => {
      authStorage.set(data);
      applyToken(data.accessToken);
      customToast.success('🎉환영합니다!🎉');
      navigation.reset({ routes: [{ name: 'MainTab' }] });
    },
    onError: (error: Error) => {
      authStorage.clear();
      clearToken();
      customToast.error(error);
    },
  });
  return mutation;
}
