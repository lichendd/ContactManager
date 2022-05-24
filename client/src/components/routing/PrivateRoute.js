import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthState";
// import Spinner from "../../components/layout/Spinner";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component }) => {
    const authContext = useContext(AuthContext);
    const { login, loading, error, clearErrors, isAuthenticated } = authContext;
//   const [authState] = useAuth();
//   const { isAuthenticated, loading } = authState;
  // if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
