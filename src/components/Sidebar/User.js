/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const User = ({ username, fullName }) => {
  return (
    <SkeletonTheme baseColor="#fff" highlightColor="#fff">
      {!username || !fullName ? (
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
            <p className="text-sm">{fullName}</p>
          </div>
        </Link>
      )}
    </SkeletonTheme>
  );
};

export default User;

User.propTypes = {
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};
