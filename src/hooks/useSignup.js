import { useContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { doesUserNameExist } from '../services/userNameExistCheck';
import { doesUserEmailExist } from '../services/userEmailExist';
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

  const submitHandler = async (e) => {
    e.preventDefault();

    const userNameExist = await doesUserNameExist(userName);
    const userEmailExist = await doesUserEmailExist(emailAddress);

    if (!userNameExist.length || !userEmailExist.length) {
      try {
        const createdUserResult = await createUserWithEmailAndPassword(
          auth,
          emailAddress,
          password
        );

        sendEmailVerification(auth.currentUser).then(() => {
          setUserIsVerified(false);
          setEmailMessage(
            'A Verification Email has been sent to your Email Address.'
          );
        });

        updateProfile(auth.currentUser, {
          displayName: userName,
        });

        await addDoc(collection(db, 'users'), {
          userId: createdUserResult.user.uid,
          username: userName,
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          followers: [],
          dateCreated: Date.now(),
        });
        toast.success('User has been Created Succeffuly Please log in', {
          duration: 3000,
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
    } else {
      toast.error('This Username is already taken. Please choose another', {
        duration: 4000,
      });
    }
  };
  return {
    userName,
    setUserName,
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    userIsVerified,
    setUserIsVerified,
    emailMessage,
    setEmailMessage,
    submitHandler,
    fullName,
    setFullName,
  };
};

export default useSignup;
