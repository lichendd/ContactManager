// import React, { Component, useContext } from "react";
// import AuthContext from "../../context/auth/authContext";
// // import { Route, Navigate } from "react-router-dom";
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const authContext = useContext(AuthContext);
//   const { isAuthenticated, loading } = authContext;

// //   if (isAuthenticated) return <Component />;
//   return <Navigate to="/login" />;

// };

// export default PrivateRoute;
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthState";
// import Spinner from "../../components/layout/Spinner";

const PrivateRoute = ({ component: Component }) => {
  const [authState] = useAuth();
  const { isAuthenticated, loading } = authState;
//   if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
