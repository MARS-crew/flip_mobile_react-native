import AsyncStorage from '@react-native-community/async-storage';
import { SignInResult, SignUpResult } from '../types';

const key = 'auth';

const authStorage = {
  async get() {
    const rawData = await AsyncStorage.getItem(key);
    if (!rawData) return null;
    try {
      const data: SignUpResult | SignInResult = JSON.parse(rawData);
      return data;
    } catch (error) {
      return null;
    }
  },
  async set(data: SignUpResult | SignInResult) {
    return await AsyncStorage.setItem(key, JSON.stringify(data));
  },
  async clear() {
    return AsyncStorage.removeItem(key);
  },
};

export default authStorage;
