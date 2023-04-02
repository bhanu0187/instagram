/* eslint-disable no-unused-vars */
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SuggestedProfiles = ({ userDocId, username, profileId, userId }) => {
  return (
    <SkeletonTheme baseColor="#fff" highlightColor="#fff">
      {!username ? (
        <Skeleton count={1} height={61} />
      ) : (
        <Link
          to={`/p/${username}`}
          className="grid grid-cols-4 gap-4 mb-6 items-center"
        >
          <div className="flex items-center justify-between col-span-1">
            <img
              src="/images/avatars/dali.jpg"
              alt="userProfilePicture"
              className="rounded-full mr-3 flex w-14"
            />
          </div>
          <div className="col-span-3">
            <p className="font-bold text-sm">{username}</p>
            {/* <p className="text-sm">{fullName}</p> */}
          </div>
        </Link>
      )}
    </SkeletonTheme>
  );
};

export default SuggestedProfiles;
