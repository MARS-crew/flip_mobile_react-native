import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/auth';

export default function useAuth() {
  const auth = useRecoilValue(authState);
  return auth;
}
