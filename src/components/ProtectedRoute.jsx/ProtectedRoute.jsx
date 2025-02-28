import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const role = localStorage.getItem("role"); // Get the user's role from localStorage

  // Check if the user's role is allowed
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/login" />; // Redirect to login if not allowed
  }

  return <Outlet />; // Render the protected component
};

export default ProtectedRoute;