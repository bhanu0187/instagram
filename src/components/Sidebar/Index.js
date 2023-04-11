import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

import useUser from '../../hooks/useUser';
import Suggestion from './Suggestion';
import User from './User';

function Sidebar() {
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const {
    user: { fullName, username, userId, following, docId },
  } = useUser();

  useEffect(() => {
    // Simulate loading the user data for 2 seconds
    const timeoutId = setTimeout(() => {
      setIsUserLoaded(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {isUserLoaded ? (
        <User username={username} fullName={fullName} />
      ) : (
        <Skeleton count={1} height={61} className="bg-white" />
      )}
      <Suggestion
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}

export default Sidebar;
