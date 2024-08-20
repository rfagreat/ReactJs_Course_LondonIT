import Layout from "../components/layout";
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Layout /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
