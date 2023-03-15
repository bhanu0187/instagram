// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCoLxb8JAZxDggdXM5QG0sddVXwcGIoEac",
	authDomain: "instagram0187.firebaseapp.com",
	projectId: "instagram0187",
	storageBucket: "instagram0187.appspot.com",
	messagingSenderId: "683577519718",
	appId: "1:683577519718:web:a1f878764fc462193bc7a7",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };
