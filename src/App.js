import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import { Navbar, Footer } from "./components/index";
import Home from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
// import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
