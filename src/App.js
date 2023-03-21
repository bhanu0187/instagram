import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Signup = lazy(() => import("./pages/Signup"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
	return (
		<Router>
			<Suspense fallback={<p>Loading....</p>}>
				<Routes>
					<Route
						path={ROUTES.LOGIN}
						element={<Login />}
					/>
					<Route
						path={ROUTES.DASHBOARD}
						element={<Dashboard />}
					/>
					<Route
						path={ROUTES.SIGN_UP}
						element={<Signup />}
					/>
					<Route
						path={ROUTES.NOT_FOUND}
						element={<NotFound />}
					/>
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
