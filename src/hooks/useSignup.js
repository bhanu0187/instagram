import { useContext, useState } from "react";

import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import { doesUserNameExist } from "../services/userNameExistCheck";
import FirebaseContext from "../context/firebase";
import { db } from "../lib/firebase";

const useSignup = () => {
	const { auth } = useContext(FirebaseContext);

	const [userName, setUserName] = useState("");
	const [fullName, setFullName] = useState("");
	const [userIsVerified, setUserIsVerified] = useState(null);
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [emailMessage, setEmailMessage] = useState("");
	const [error, setError] = useState("");

	const submitHandler = async (e) => {
		e.preventDefault();

		const userNameExist = await doesUserNameExist(userName);

		// console.log(userNameExist);

		if (!userNameExist.length) {
			try {
				const createdUserResult = await createUserWithEmailAndPassword(
					auth,
					emailAddress,
					password
				);

				sendEmailVerification(auth.currentUser).then(() => {
					setUserIsVerified(false);
					setEmailMessage(
						"A Verification Email has been sent to your Email Address."
					);
				});

				updateProfile(auth.currentUser, {
					displayName: userName,
				});

				await addDoc(collection(db, "users"), {
					userId: createdUserResult.user.uid,
					username: userName.toLowerCase(),
					fullName,
					emailAddress: emailAddress.toLowerCase(),
					following: [],
					followers: [],
					dateCreated: Date.now(),
				});
			} catch (err) {
				setPassword("");
				setError(err.message);
			}
		} else {
			setError("This Username is already taken. Please choose another");
		}
	};
	return {
		userName,
		setUserName,
		emailAddress,
		setEmailAddress,
		password,
		setPassword,
		userIsVerified,
		setUserIsVerified,
		emailMessage,
		setEmailMessage,
		error,
		setError,
		submitHandler,
		fullName,
		setFullName,
	};
};

export default useSignup;
