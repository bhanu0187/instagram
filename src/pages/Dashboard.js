import React, { useEffect } from "react";
import Header from "../components/Header";
import LeftSection from "../components/LeftSection";

const Dashboard = () => {
	useEffect(() => {
		document.title = "Instagram";
	}, []);
	return (
		<div>
			<Header />
			{/* <LeftSection /> */}
			<div></div>
		</div>
	);
};

export default Dashboard;
