import { useState, useContext } from 'react';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { doesUserNameExist, doesUserEmailExist } from '../services';
import FirebaseContext from '../context/firebase';
import { db } from '../lib/firebase';
import * as ROUTES from '../constants/routes';

const useSignup = () => {
  const { auth } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [userIsVerified, setUserIsVerified] = useState(null);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [loading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userNameExists = await doesUserNameExist(userName);
    const userEmailExists = await doesUserEmailExist(emailAddress);

    if (userNameExists.length || userEmailExists.length) {
      toast.error(
        'This username or email is already taken. Please choose another',
        {
          duration: 4000,
        }
      );
      setIsLoading(false);
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        emailAddress,
        password
      );
      await updateProfile(user, {
        displayName: userName,
      });
      await sendEmailVerification(user);
      setUserIsVerified(false);
      setEmailMessage(
        'A verification email has been sent to your email address.'
      );
      toast.success('User has been created successfully. Please log in.', {
        duration: 3000,
      });

      await addDoc(collection(db, 'users'), {
        userId: user.uid,
        username: userName,
        fullName,
        emailAddress: emailAddress.toLowerCase(),
        following: [],
        followers: [],
        dateCreated: Date.now(),
      });
      setTimeout(() => {
        navigate(ROUTES.LOGIN);
      }, 2000);
    } catch (err) {
      setPassword('');
      setEmailAddress('');
      toast.error(err.message, {
        duration: 4000,
      });
    }
    setIsLoading(false);
  };

  const isInvalid =
    !userName || !fullName || !emailAddress || !password || password.length < 6;

  return {
    userName,
    setUserName,
    fullName,
    setFullName,
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    userIsVerified,
    setUserIsVerified,
    emailMessage,
    setEmailMessage,
    submitHandler,
    isInvalid,
    loading,
  };
};

export default useSignup;
