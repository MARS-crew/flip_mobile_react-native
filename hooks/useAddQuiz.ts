import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from 'react-query';
import { addQuiz } from '../api/workbooks';
import { Error } from '../types';
import { customToast } from '../utils/toastConfig';

export default function useAddQuiz() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const mutation = useMutation(addQuiz, {
    onSuccess: () => {
      queryClient.invalidateQueries('workbook');
      customToast.success('퀴즈가 추가되었습니다');
      navigation.goBack();
    },
    onError: (error: Error) => {
      customToast.error(error);
    },
  });

  return mutation;
}
