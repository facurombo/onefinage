import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthUser from "./AuthUser.jsx";


const ProtectedRoutes = () => {
  const { getToken } = AuthUser();
  const token = getToken();

  if (!token) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoutes;