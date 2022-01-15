import { atom } from 'recoil';
import { Workbook } from '../types';

interface WorkBookState {
  currentWorkbook: Workbook | null;
  question: string;
  result: string;
}

export const workbookState = atom<WorkBookState>({
  key: 'workbookState',
  default: {
    currentWorkbook: null,
    question: '',
    result: '',
  },
});
