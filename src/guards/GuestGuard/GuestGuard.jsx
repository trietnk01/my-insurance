import { PATH_NAME } from "configs";
import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

function GuestGuard({ children }) {
  const isAuth = true;
  if (isAuth) return <Navigate to={PATH_NAME.ADMIN_DASHBOARD} />;
  return <Fragment>{children}</Fragment>;
}

export default GuestGuard;
