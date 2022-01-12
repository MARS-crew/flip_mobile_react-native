import { atom } from 'recoil';
import { SignInResult, SignUpResult } from '../types';

interface AuthState {
  user: SignInResult | SignUpResult | null;
}

export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    user: null,
  },
});
