import { useEffect, useState } from 'react';
import { auth, db } from 'services/config';

// hooks
import { useAuth } from 'hooks/useAuth';

export const useLogout = () => {
  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch, user } = useAuth();

  const logout = async () => {
    setError(null);
    setLoading(true);

    // sign out the user
    try {
      // update user document online status
      await db.collection('users').doc(user.uid).update({ online: false });

      await auth.signOut();
      dispatch({ type: 'SIGNOUT' });

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

  return { logout, error, loading };
};
