import {
  format,
  formatDistanceToNow,
  formatDistanceToNowStrict,
  formatISO,
  parseISO,
} from 'date-fns';
import { Error } from '../types';
import { ko } from 'date-fns/locale';

export function getErrorMessage(error: Error): string {
  const message = error.response?.data.message;
  if (message instanceof Array) return message[0];
  return message ?? '서버와의 통신이 원활하지 않습니다';
}

export function formatDate(date: string) {
  const d = new Date(date);
  const now = new Date();
  now.setHours(now.getHours() + 9);
  console.log('--------------------');
  console.log(now, d);
  console.log(now.getTime(), d.getTime());
  const diff = (now.getTime() - d.getTime()) / 1000;
  console.log(diff);

  if (diff < 60 * 1) {
    return '방금 전';
  }
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d.setHours(d.getHours() - 9), {
      addSuffix: true,
      locale: ko,
    });
  }
  return format(d, 'PPP', { locale: ko });
}
