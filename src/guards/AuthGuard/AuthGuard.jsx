import { PATH_NAME } from "configs";
import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

function AuthGuard({ children }) {
  const isAuth = true;
  if (!isAuth) return <Navigate to={PATH_NAME.ADMIN_LOGIN} />;
  return <Fragment>{children}</Fragment>;
}

export default AuthGuard;
