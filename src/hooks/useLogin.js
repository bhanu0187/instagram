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

  const isInvalid = !emailAddress || !password || password.length < 6;

  const handleLogin = async (e) => {
    e.preventDefault();

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
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
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
  };
};

export default useLogin;
