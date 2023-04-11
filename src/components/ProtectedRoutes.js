/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import useAuthListener from '../hooks/useAuthListener';

function Protected({ children }) {
  const navigate = useNavigate();
  const { user } = useAuthListener();
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if (!user) {
      setIsSignedIn(false);
      return;
    }
    setIsSignedIn(true);
    navigate(ROUTES.DASHBOARD);
  }, [user, navigate]);

  if (!isSignedIn) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return children;
}
export default Protected;
