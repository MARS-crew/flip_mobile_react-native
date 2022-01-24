import { atom } from 'recoil';
import { User } from '../types';

type UserState = User | null;

export const userState = atom<UserState>({
  key: 'userState',
  default: null,
});
