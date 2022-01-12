import { useNavigation } from '@react-navigation/native';
import { useMutation } from 'react-query';
import { signUp } from '../api/auth';
import { applyToken, clearToken } from '../api/client';
import { RootStackNavigationProp } from '../screens/RootStack';
import authStorage from '../storages/authStorage';
import { AuthError } from '../types';
import Toast from 'react-native-toast-message';
import { StyleProp, ViewStyle } from 'react-native';
import colorPalette from '../theme/colorPalette';
import { getErrorMessage } from '../utils';

export default function useSignUp() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const mutation = useMutation(signUp, {
    onSuccess: data => {
      authStorage.set(data);
      applyToken(data.accessToken);
      navigation.navigate('MainTab');
    },
    onError: (error: AuthError) => {
      authStorage.clear();
      clearToken();
      Toast.show({
        type: 'error',
        text1: getErrorMessage(error),
      });
    },
  });
  return mutation;
}
