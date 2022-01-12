import { useEffect } from 'react';
import { applyToken } from '../api/client';
import authStorage from '../storages/authStorage';
import useAuthActions from './useAuthActions';

export default function useAuthLoadEffect() {
  const { authorize } = useAuthActions();
  useEffect(() => {
    (async () => {
      const auth = await authStorage.get();
      if (!auth) return;
      applyToken(auth.accessToken);
      authorize(auth);
    })();
  }, []);
}
