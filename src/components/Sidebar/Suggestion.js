/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

import { getSuggestedProfiles } from '../../services/getSuggestedProfiles';
import SuggestedProfiles from './SuggestedProfiles';

function Suggestion({ userId, following }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }
    if (userId) {
      suggestedProfiles();
    }
  }, [userId, following]);
  return !profiles ? (
    <Skeleton count={1} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex fle-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-500">Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfiles
            key={profile.docId}
            userDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
          />
        ))}
      </div>
    </div>
  ) : null;
}

export default Suggestion;

Suggestion.propsTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
};
