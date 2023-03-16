import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { db, app, auth } from "./lib/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<FirebaseContext.Provider value={{ app, db, auth }}>
		<App />
	</FirebaseContext.Provider>
);
