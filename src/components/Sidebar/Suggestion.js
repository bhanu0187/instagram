/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import { getSuggestedProfiles } from '../../services/getSuggestedProfiles';
import SuggestedProfiles from './SuggestedProfiles';

function Suggestion({ userId, following, fullName }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function fetchSuggestedProfiles() {
      if (!userId) return;
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }
    fetchSuggestedProfiles();
  }, [userId, following]);

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfiles
            key={profile.docId}
            profileDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
            fullName={fullName}
          />
        ))}
      </div>
    </div>
  ) : null;
}

Suggestion.propTypes = {
  userId: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  following: PropTypes.array,
  fullName: PropTypes.string,
};

export default Suggestion;
