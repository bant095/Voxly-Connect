import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  const firstLogin = localStorage.getItem('firstLogin'); // Replace with your authentication logic

  return firstLogin ? children : <Navigate to='/login' replace />;
};

export default PrivateRouter;
