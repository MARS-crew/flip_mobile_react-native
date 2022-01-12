import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../atoms/auth';
import { SignInResult, SignUpResult } from '../types';

export default function useAuthActions() {
  const [, set] = useRecoilState(authState);
  return {
    authorize: (user: SignUpResult | SignInResult) => {
      set({ user });
    },
    logout: () => {
      set({ user: null });
    },
  };
}
