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
  items: Item[];
  meta: Meta;
}

export interface Item {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  cards: Card[];
}

export interface Card {
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
