import { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth() must be inside an AuthProvider');

  return context;
};
