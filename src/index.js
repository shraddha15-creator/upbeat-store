import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./context/filter-context";
import { WishlistProvider } from "./context/wishlist-context";
import { CartProvider } from "./context/cart-context";
import { AuthProvider } from "./context/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<CartProvider>
				<WishlistProvider>
					<FilterProvider>
						<App />
					</FilterProvider>
				</WishlistProvider>
			</CartProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
