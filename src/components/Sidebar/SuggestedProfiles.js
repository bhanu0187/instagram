/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Toaster, toast } from 'react-hot-toast';

const SuggestedProfiles = ({ userDocId, username, profileId, userId }) => {
  const [followed, setFollowed] = useState(false);
  return !followed ? (
    <div className="flex flex-row items-center justify-between">
      <div className="flex items-center justify-between">
        <img
          src="/images/avatars/orwell.jpg"
          alt=""
          className="rounded-full w-8 flex mr-3"
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <button
        type="button"
        className="text-xs font-bold text-blue-700"
        onClick={() => console.log('followed')}
      >
        follow
      </button>
    </div>
  ) : null;
};

export default SuggestedProfiles;

SuggestedProfiles.propTypes = {
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
};
