import { useNavigation } from '@react-navigation/native';
import { useMutation } from 'react-query';
import { signUp } from '../api/auth';
import { RootStackNavigationProp } from '../screens/RootStack';
import { AuthError } from '../types';

export default function useSignUp() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const mutation = useMutation(signUp, {
    onSuccess: data => {
      navigation.navigate('MainTab');
    },
    onError: (error: AuthError) => {
      // console.log(error);
    },
  });
  return mutation;
}
