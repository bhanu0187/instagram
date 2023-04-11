import { doc, updateDoc } from 'firebase/firestore';
import { db, arrayRemove, arrayUnion } from '../lib/firebase';

export async function updateFollowing(
  loggedInUserDocId,
  profileId,
  isFollowingProfile
) {
  const followingRef = doc(db, 'users', loggedInUserDocId);

  const result = await updateDoc(followingRef, {
    following: isFollowingProfile
      ? arrayRemove(profileId)
      : arrayUnion(profileId),
  });

  return result;
}
