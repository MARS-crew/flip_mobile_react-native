import { SignInResult, SignUpResult } from '../types';
import client from './client';

export async function signUp(params: SignUpParams) {
  const response = await client.post<SignUpResult>('/auth/signup', params);
  return response.data;
}

export async function signIn(params: SignInParams) {
  const response = await client.post<SignInResult>(`/auth/login`, params);
  return response.data;
}

export interface SignUpParams {
  email: string;
  password: string;
}

export interface SignInParams {
  email: string;
  password: string;
}
