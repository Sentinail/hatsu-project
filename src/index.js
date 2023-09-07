import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import ThemeContext from "./context/themeContext";
import Watch from "./page/Watch";
import WatchAnime from "./components/WatchAnime";
import Stream from "./components/Stream";
import { useLocation } from "react-router-dom";
import Search from "./page/Search";
import SearchResults from "./components/SearchResults";
import TestApp from "./tests/TestApp";
import AuthProvider from "./context/authContext";
import SignIn from "./page/Sign-In";
import SignUp from "./page/Sign-Up";

const ScrollToTop = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [location]);

	return null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ScrollToTop />
		<Routes>
			<Route
				path="/"
				element={
					<AuthProvider>
						<ThemeContext>
							<App></App>
						</ThemeContext>
					</AuthProvider>
				}
			>
				<Route
					path="/"
					element={<Navigate to={"/home"}></Navigate>}
				></Route>
				<Route path="/home" element={<Home></Home>}></Route>
				<Route path="/watch" element={<Watch></Watch>}>
					<Route
						path="/watch"
						element={<Navigate to={"/home"}></Navigate>}
					></Route>
					<Route
						path="/watch/:anime"
						element={<WatchAnime></WatchAnime>}
					>
						<Route
							path="/watch/:anime/:episode"
							element={<Stream></Stream>}
						></Route>
					</Route>
				</Route>
				<Route path="/search" element={<Search></Search>}>
					<Route path="/search/:query" element={<SearchResults />} />
				</Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
			</Route>
			<Route
				path="/test"
				element={
					<ThemeContext>
						<TestApp></TestApp>
					</ThemeContext>
				}
			></Route>
		</Routes>
	</BrowserRouter>
);
