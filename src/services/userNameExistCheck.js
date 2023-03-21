import { db } from "../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function doesUserNameExist(username) {
	console.log(username);

	const q = query(collection(db, "users"), where("username", "==", username));

	const result = await getDocs(q);
	return result.docs.map((user) => user.data().length > 0);
}
