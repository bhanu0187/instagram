import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const User = ({ username, fullName }) => {
  return (
    <SkeletonTheme baseColor="#fff" highlightColor="#fff">
      {username && fullName ? (
        <Link
          to={`/p/${username}`}
          className="grid grid-cols-4 gap-4 mb-6 items-center"
        >
          <div className="flex items-center justify-between col-span-1">
            <img
              src="/images/avatars/dali.jpg"
              alt="userProfilePicture"
              className="rounded-full flex w-12"
            />
          </div>
          <div className="col-span-3">
            <p className="font-bold text-sm">{username}</p>
            <p className="text-sm">{fullName}</p>
          </div>
        </Link>
      ) : (
        <Skeleton count={1} height={61} />
      )}
    </SkeletonTheme>
  );
};

export default memo(User);

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
