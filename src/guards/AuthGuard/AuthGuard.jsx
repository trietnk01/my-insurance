import { PATH_NAME } from "configs";
import React from "react";
import { Navigate } from "react-router-dom";

function AuthGuard({ children }) {
  const isAuth = true;
  if (!isAuth) return <Navigate to={PATH_NAME.LOGIN} />;
  return <React.Fragment>{children}</React.Fragment>;
}

export default AuthGuard;
