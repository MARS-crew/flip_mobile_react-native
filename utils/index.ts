import { format, formatDistanceToNow } from 'date-fns';
import { Error } from '../types';
import { ko } from 'date-fns/locale';

export function getErrorMessage(error: Error): string {
  const message = error.response?.data.message;
  if (message instanceof Array) return message[0];
  return message ?? '서버와의 통신이 원활하지 않습니다';
}

export function formatDate(date: Date) {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;
  if (diff < 60 * 1) {
    return '방금 전';
  }
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }
  return format(d, 'PPP EEE p', { locale: ko });
}
