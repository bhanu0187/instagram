import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/user';
import { getUserByUserId, getFollowedUsersPhotos } from '../services';

export default function useTimelinePhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = '' },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];

      // checking if user actually follow anyone?
      if (following.length > 0) {
        followedUserPhotos = await getFollowedUsersPhotos(userId, following);
      }
      // To rearrange the array so new photos are on top
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }

    getTimelinePhotos();
  }, [userId]);

  return { photos };
}
