import { AxiosError } from 'axios';

export interface SignUpResult {
  accessToken: string;
  expiresIn: number;
}

export interface SignInResult extends SignUpResult {}

export type AuthError = AxiosError<{
  statusCode: number;
  error: string;
  message: string | string[];
}>;

export interface ITerm {
  message: string;
  value: boolean;
}
