import { useEffect } from 'react';
import { applyToken } from '../api/client';
import authStorage from '../storages/authStorage';

export default function useAuthLoadEffect() {
  useEffect(() => {
    (async () => {
      const auth = await authStorage.get();
      if (!auth) return;
      applyToken(auth.accessToken);
    })();
  }, []);
}
