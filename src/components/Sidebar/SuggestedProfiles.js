/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Toaster, toast } from 'react-hot-toast';
import { updateFollowing, updateFollowers } from '../../services';

const SuggestedProfiles = ({
  profileDocId,
  username,
  profileId,
  userId,
  following,
  loggedInUserDocId,
}) => {
  const [followed, setFollowed] = useState(false);
  async function handleFollowUser() {
    setFollowed(true);

    await updateFollowing(loggedInUserDocId, profileId, false);

    await updateFollowers(profileDocId, userId, false);
  }
  return (
    <>
      <Toaster />
      {!followed ? (
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
            onClick={handleFollowUser}
          >
            follow
          </button>
        </div>
      ) : null}
    </>
  );
};

export default SuggestedProfiles;

SuggestedProfiles.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};
