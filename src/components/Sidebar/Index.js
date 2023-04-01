import React from "react";

import useUser from "../../hooks/useUser";
import Suggestion from "./Suggestion";
import User from "./User";

const Sidebar = () => {
	const {
		user: { fullName, username, userId },
	} = useUser();

	console.log(userId);
	return (
		<div>
			<User
				username={username}
				fullName={fullName}
			/>
			<Suggestion userId={userId} />
		</div>
	);
};

export default Sidebar;
