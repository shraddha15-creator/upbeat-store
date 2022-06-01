import { Route, Routes, BrowserRouter } from "react-router-dom";
import Mockman from "mockman-js";
import PrivateRoute from "./utilities/PrivateRoute";
import { Navbar, Footer } from "./components/index";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import "./App.css";
import {
	Home,
	Products,
	Page404,
	Cart,
	SingleProduct,
	Wishlist,
} from "./pages";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="*" element={<Page404 />} />
					<Route path="/mockman" element={<Mockman />} />
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/product/:productId" element={<SingleProduct />} />
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
