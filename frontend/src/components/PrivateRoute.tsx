// components/PrivateRoute.tsx
import React from 'react';
import { Navigate, Outlet, Route, RouteProps, useNavigate } from 'react-router-dom';
import { User } from '../models/user';

interface PrivateRouteProps{
    user: User | null,
  }
  const PrivateRoute = ({
    user,
  }: PrivateRouteProps) => {
    return user ? <Outlet /> : <Navigate to="/login" />;
  };

export default PrivateRoute;
