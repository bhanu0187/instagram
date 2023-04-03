import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';

export async function getSuggestedProfiles(userId, following) {
  const q = query(
    collection(db, 'users'),
    where('userId', '!=', userId),
    limit(10)
  );

  const querySnapshot = await getDocs(q);
  const suggestedProfiles = querySnapshot.docs
    .map((doc) => ({
      ...doc.data(),
      docId: doc.id,
    }))
    .filter((profile) => !following.includes(profile.userId));

  return suggestedProfiles;
}
