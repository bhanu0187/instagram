import { onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';

import FirebaseContext from '../context/firebase';

function useAuthListener() {
  const [user, setUser] = useState(() => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    return authUser || null;
  });

  const { auth } = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return { user };
}

export default useAuthListener;
