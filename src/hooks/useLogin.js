import { useEffect, useState } from 'react';
import { auth } from 'services/config';

// hooks
import { useAuth } from 'hooks/useAuth';

export const useLogin = () => {
  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuth();

  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    // login the user
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      if (!res) throw new Error('Could not login user');
      dispatch({ type: 'LOGIN', payload: res.user });
      if (!cancelled) {
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      if (!cancelled) {
        setError(error.message || error);
        setLoading(false);
        console.error(error);
      }
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { login, error, loading };
};
