import { useEffect, useState } from 'react';
import { auth, storage } from 'services/config';

// hooks
import { useAuth } from 'hooks/useAuth';

export const useSignup = () => {
  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuth();

  const signup = async (email, password, displayName, profilePic) => {
    setError(null);
    setLoading(true);

    try {
      // signup user
      const res = await auth.createUserWithEmailAndPassword(email, password);
      if (!res) throw new Error('Could not create user');

      // upload profile image
      const path = `avatars/${res.user.uid}/${profilePic.name}`;
      const image = await storage.ref(path).put(profilePic);
      const photoURL = await image.ref.getDownloadURL();

      // set displayName
      await res.user.updateProfile({ displayName, photoURL });

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });
      if (!cancelled) {
        setLoading(false);
        setError(null);
      }
    } catch (err) {
      if (!cancelled) {
        setError(err.message || err);
        setLoading(false);
        console.error(err);
      }
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { error, loading, signup };
};
