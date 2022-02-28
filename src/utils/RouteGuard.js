import { Route, Redirect } from 'react-router-dom';

// hooks
import { useAuth } from 'hooks/useAuth';

export const ProtectedRoute = ({ component, ...props }) => {
  const { user } = useAuth();
  return (
    <Route {...props}>
      {!user && <Redirect to="/login" />}
      {user && <>{component}</>}
    </Route>
  );
};

export const UnprotectedRoute = ({ component, ...props }) => {
  const { user } = useAuth();
  return (
    <Route {...props}>
      {user && <Redirect to="/" />}
      {!user && <>{component}</>}
    </Route>
  );
};