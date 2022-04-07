import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();

	return (
		<div className="App">
			<Navbar />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route
						path="/"
						element={
							<>
								<Home />
							</>
						}
					/>
					<Route
						path="/contact"
						element={
							<>
								<Contact />
							</>
						}
					/>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
