import { doc, updateDoc } from 'firebase/firestore';
import { db, arrayRemove, arrayUnion } from '../lib/firebase';

export async function updateFollowers(profileDocId, userId, isFollower) {
  const followingRef = doc(db, 'users', profileDocId);

  const result = await updateDoc(followingRef, {
    followers: isFollower ? arrayRemove(userId) : arrayUnion(userId),
  });

  return result;
}
