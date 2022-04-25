import { PATH_NAME } from "configs";
import AuthGuard from "guards/AuthGuard";
import GuestGuard from "guards/GuestGuard";
import React, { Fragment, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
const Dashboard = lazy(() => import("pages/Dashboard"));
const Login = lazy(() => import("pages/Login"));
const dataRoute = [
  {
    path: PATH_NAME.ROOT,
    element: () => <Navigate to="/dashboard" />,
  },
  {
    path: PATH_NAME.LOGIN,
    element: Login,
    guard: GuestGuard,
  },
  {
    path: PATH_NAME.DASHBOARD,
    element: Dashboard,
    guard: AuthGuard,
    layout: MainLayout,
  },
  {
    path: "*",
    element: () => <div>Not found</div>,
  },
];
function RoutesMain() {
  return (
    <BrowserRouter>
      <Routes>
        {dataRoute.map((item, idx) => {
          const Component = item.element;
          const Layout = item.layout || Fragment;
          const Guard = item.guard || Fragment;
          return (
            <Route
              key={idx}
              path={item.path}
              element={
                <Guard>
                  <Layout>
                    <Component />
                  </Layout>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesMain;
