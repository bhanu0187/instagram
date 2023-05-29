/* eslint-disable no-shadow */
import { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

const useLogin = () => {
  const { auth } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [userExist, setUserExist] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isInvalid = !emailAddress || !password || password.length < 6;

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        emailAddress,
        password
      );
      const userEmail = userCredentials.user.email;
      if (userEmail) {
        setUserExist(true);
      }
      setIsLoading(false);
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
      setIsLoading(false);
    }
  };

  return {
    emailAddress,
    userExist,
    setEmailAddress,
    password,
    setPassword,
    error,
    handleLogin,
    isInvalid,
    isLoading,
  };
};

export default useLogin;
