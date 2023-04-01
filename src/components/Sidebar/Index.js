import React from 'react';

import useUser from '../../hooks/useUser';
import Suggestion from './Suggestion';
import User from './User';

function Sidebar() {
  const {
    user: { fullName, username, userId },
  } = useUser();

  return (
    <div>
      <User username={username} fullName={fullName} />
      <Suggestion userId={userId} />
    </div>
  );
}

export default Sidebar;
