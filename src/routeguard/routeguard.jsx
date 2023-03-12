import { Navigate, Outlet } from 'react-router-dom';
// import { useAuthContext } from '../hooks/auth/useauthcontext';

export default function PrivateRoute() {
  // const {user} = useAuthContext()
  const user = true;
  return user ? <Outlet /> : <Navigate to="/login" />;
}
