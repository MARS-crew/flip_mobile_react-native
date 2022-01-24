import { useRecoilState } from 'recoil';
import { authState } from '../atoms/auth';
import { SignInResult, SignUpResult } from '../types';

export default function useAuthActions() {
  const [, set] = useRecoilState(authState);
  return {
    authorize: (auth: SignUpResult | SignInResult) => {
      set(auth);
    },
    logout: () => {
      set(null);
    },
  };
}
