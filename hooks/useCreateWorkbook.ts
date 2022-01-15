import { useMutation, useQueryClient } from 'react-query';
import { createWorkbook } from '../api/workbooks';
import { Error } from '../types';
import { customToast } from '../utils/\btoastConfig';

export default function useCreateWorkbook() {
  const queryClient = useQueryClient();
  const mutation = useMutation(createWorkbook, {
    onSuccess: () => {
      queryClient.invalidateQueries('myWorkbooks');
      customToast.success('문제집이 생성되었습니다 퀴즈를 추가해보세요!');
    },
    onError: (error: Error) => {
      customToast.error(error);
    },
  });

  return mutation;
}
