import { useMutation, useQueryClient } from 'react-query';
import { toggleWorkbookLike } from '../api/workbooks';
import { Error } from '../types';
import { customToast } from '../utils/toastConfig';

export default function useToggleWorkbookLike() {
  const queryClient = useQueryClient();
  const mutation = useMutation(toggleWorkbookLike, {
    onSuccess: () => {
      queryClient.invalidateQueries('myWorkbooks');
      queryClient.invalidateQueries('workbook');
    },
    onError: (error: Error) => {
      customToast.error(error);
    },
  });
  return mutation;
}
