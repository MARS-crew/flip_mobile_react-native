import { atom } from 'recoil';
import { CardParams } from '../types';

interface WorkBookState {
  title: string | null;
  cards: CardParams[];
}

export const workBookState = atom<WorkBookState>({
  key: 'workbookState',
  default: {
    title: null,
    cards: [],
  },
});
