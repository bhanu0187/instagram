import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";

import FirebaseContext from "../context/firebase";

function useAuthListener() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("authUser"))
	);

	const { auth } = useContext(FirebaseContext);

	useEffect(() => {
		const listener = onAuthStateChanged(auth, (authUser) => {
			if (authUser) {
				localStorage.setItem("authUser", JSON.stringify(authUser));
				setUser(authUser);
			} else {
				localStorage.removeItem("authUser");
				setUser(null);
			}
		});

		return () => listener();
	}, [auth]);

	return { user };
}

export default useAuthListener;
