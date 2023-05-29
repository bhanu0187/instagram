import { initializeApp } from 'firebase/app';
import { getFirestore, arrayRemove, arrayUnion } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB6dIto4a6CeSigixqSTWV7yh9cz9XoJvA',
  authDomain: 'instaclone0187.firebaseapp.com',
  projectId: 'instaclone0187',
  storageBucket: 'instaclone0187.appspot.com',
  messagingSenderId: '224516625163',
  appId: '1:224516625163:web:0b5d3dc0b9069d1d92c80e',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, app, auth, arrayRemove, arrayUnion };
