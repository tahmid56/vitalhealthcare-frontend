import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const location = useLocation();
  const { auth } = useAuth();
  const token = localStorage.getItem("token");
  return  token ? (
    <Outlet />
  ) : auth?.name ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;