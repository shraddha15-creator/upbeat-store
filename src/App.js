import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";
import { Navbar, Footer } from "./components/index";
import { Home, Products } from "./pages/index";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import PrivateRoute from "./utilities/PrivateRoute";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/mockman" element={<Mockman />} />
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					{/* private route */}
					<Route
						path="/wishlist"
						element={
							<PrivateRoute>
								<Wishlist />
							</PrivateRoute>
						}
					/>
					<Route
						path="/cart"
						element={
							<PrivateRoute>
								<Cart />
							</PrivateRoute>
						}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
