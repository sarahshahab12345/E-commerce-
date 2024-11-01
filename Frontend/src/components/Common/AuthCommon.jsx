import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function AuthCommon({ isAuthenticated, children, user }) {
  const location = useLocation();
  console.log(location.pathname);

  // Redirect from root based on authentication status and user role
  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    } else {
      return user?.role === "admin" 
        ? <Navigate to="/admin/dashboard" /> 
        : <Navigate to="/shop/home" />;
    }
  }

  // Redirect unauthenticated users trying to access protected routes
  if (
    !isAuthenticated &&
    !location.pathname.includes("/auth/login") &&
    !location.pathname.includes("/auth/register")
  ) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect authenticated admin trying to access shop routes
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("/shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  // Redirect authenticated user trying to access unauthorized routes
  if (
    isAuthenticated &&
    user?.role === "user" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/un-auth" />;
  }

  // Render children if no redirects are needed
  return <>{children}</>;
}

export default AuthCommon;
