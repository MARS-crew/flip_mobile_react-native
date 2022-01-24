import { atom } from 'recoil';
import { SignInResult, SignUpResult } from '../types';

type AuthState = SignInResult | SignUpResult | null;

export const authState = atom<AuthState>({
  key: 'authState',
  default: null,
});
