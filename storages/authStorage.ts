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
  set(data: SignUpResult | SignInResult) {
    return AsyncStorage.setItem(key, JSON.stringify(data));
  },
  clear() {
    return AsyncStorage.removeItem(key);
  },
};

export default authStorage;
