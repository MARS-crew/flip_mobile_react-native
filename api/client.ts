import axios, { HeadersDefaults } from 'axios';
import { BASE_URL } from '@env';

interface CommonHeaderProps extends HeadersDefaults {
  Authorization?: string;
}

const client = axios.create({
  baseURL: BASE_URL,
});

export function applyToken(jwt: string) {
  client.defaults.headers = {
    Authorization: `Bearer ${jwt}`,
  } as CommonHeaderProps;
}

export function clearToken() {
  client.defaults.headers = {
    Authorization: undefined,
  } as CommonHeaderProps;
}

export default client;
