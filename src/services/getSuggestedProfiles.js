import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';

export async function getSuggestedProfiles(userId, following) {
  const q = query(
    collection(db, 'users'),
    where('userId', '!=', userId),
    limit(10)
  );

  const result = await getDocs(q);
  return result.docs
    .map((user) => ({
      ...user.data(),
      docId: user.id,
    }))
    .filter((profile) => !following.includes(profile.userId));
}
