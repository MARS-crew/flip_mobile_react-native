import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from 'react-query';
import { deleteQuiz } from '../api/workbooks';
import { Error } from '../types';
import { customToast } from '../utils/toastConfig';

export default function useDeleteQuiz() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const mutation = useMutation(deleteQuiz, {
    onSuccess: () => {
      queryClient.invalidateQueries('workbook');
      queryClient.invalidateQueries('myWorkbooks');
      customToast.success('퀴즈가 삭제 되었습니다.');
      navigation.goBack();
    },
    onError: (error: Error) => {
      customToast.error(error);
      navigation.goBack();
    },
  });
  return mutation;
}
