import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { getUserByUserId } from './getUserById';

export async function getFollowedUsersPhotos(userId, following) {
  const q = query(collection(db, 'photos'), where('userId', 'in', following));

  const result = await getDocs(q);
  const photos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  const photosWithUserDetails = await Promise.all(
    photos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const user = await getUserByUserId(photo.userId);
      const { username } = user[0];
      return { username, userLikedPhoto, ...photo };
    })
  );

  return photosWithUserDetails;
}
