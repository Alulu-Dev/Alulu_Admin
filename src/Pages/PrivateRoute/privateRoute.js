import React from "react";
import { Navigate } from "react-router-dom";
// import { useLocalState } from "";

const PrivateRoute = ({ children }) => {
  return sessionStorage.getItem("Token") ? (
    children
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default PrivateRoute;
