import { useQuery } from 'react-query';
import { getMyWorkbooks } from '../api/workbooks';

export default function useMyWorkbooks() {
  const { data, isLoading, isError } = useQuery('myWorkbooks', () =>
    getMyWorkbooks({ cursor: 1 }),
  );
  return {
    data,
    isLoading,
    isError,
  };
}
