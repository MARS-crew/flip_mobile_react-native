import { AxiosError } from 'axios';

export interface SignUpResult {
  accessToken: string;
  expiresIn: number;
}

export interface SignInResult extends SignUpResult {}

export type Error = AxiosError<{
  statusCode: number;
  error: string;
  message: string | string[];
}>;

export interface ITerm {
  message: string;
  value: boolean;
}

export interface WorkbookListResult {
  items: Workbook[];
  meta: Meta;
}

export interface Workbook extends CreateWorkbookResult {
  cards: Quiz[];
}

export interface Quiz {
  id: number;
  question: string;
  result: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: number;
  email: string;
  profile: Profile;
  createdAt: Date;
  updatedAt: Date;
}

export interface Profile {
  nickname: null;
  photo: null;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface QuizParams {
  question: string;
  result: string;
}

export interface CreateWorkbookResult {
  id: number;
  title: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateQuizParams {
  workbookId: number;
  quiz: QuizParams;
}

export interface ModifyQuizParams {
  cardId: number;
  quiz: QuizParams;
}

export interface ModifyWorkbookParams {
  workbookId: number;
  title: { title: string };
}
