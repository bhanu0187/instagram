import React, { useEffect } from "react";
import Header from "../components/Header";

const Dashboard = () => {
	useEffect(() => {
		document.title = "Instagram";
	}, []);
	return (
		<div>
			<Header />
			<div></div>
		</div>
	);
};

export default Dashboard;
