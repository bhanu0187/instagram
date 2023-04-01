import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';

export async function doesUserNameExist(username) {
  const q = query(collection(db, 'users'), where('username', '==', username));

  const result = await getDocs(q);
  return result.docs.map((user) => user.data().length > 0);
}
