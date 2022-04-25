import { PATH_NAME } from "configs";
import React from "react";
import { Navigate } from "react-router-dom";

function GuestGuard({ children }) {
  const isAuth = true;
  if (isAuth) return <Navigate to={PATH_NAME.ROOT} />;
  return <React.Fragment>{children}</React.Fragment>;
}

export default GuestGuard;
