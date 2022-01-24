import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from 'react-query';
import { modifyQuiz } from '../api/workbooks';
import { Error } from '../types';
import { customToast } from '../utils/toastConfig';

export default function useModifyQuiz() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const mutation = useMutation(modifyQuiz, {
    onSuccess: () => {
      queryClient.invalidateQueries('myWorkbooks');
      queryClient.invalidateQueries('workbook');
      customToast.success('퀴즈 수정완료!');
      navigation.goBack();
    },
    onError: (error: Error) => {
      customToast.error(error);
    },
  });
  return mutation;
}
