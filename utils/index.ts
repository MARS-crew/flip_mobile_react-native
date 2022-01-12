import { AuthError } from '../types';

export function getErrorMessage(error: AuthError): string {
  const message = error.response?.data.message;
  if (message instanceof Array) return message[0];
  return message ?? '서버와의 통신이 원활하지 않습니다';
}
