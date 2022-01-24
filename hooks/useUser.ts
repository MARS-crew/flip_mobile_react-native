import { useQuery } from 'react-query';
import getMyProfile from '../api/users';

export default function useUser() {
  const { data, isLoading, isError } = useQuery('myProfile', getMyProfile);
  return {
    data,
    isLoading,
    isError,
  };
}
