import { db } from "../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function getUserByUserId(userId) {
	const q = query(collection(db, "users"), where("userId", "==", userId));

	const result = await getDocs(q);
	const user = result.docs.map((item) => ({
		...item.data(),
		docId: item.id,
	}));
	console.log(user);
	return user;
}
