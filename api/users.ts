import client from './client';
import { User } from '../types';

export default async function getMyProfile() {
  const response = await client.get<User>('/users/me');
  return response.data;
}
