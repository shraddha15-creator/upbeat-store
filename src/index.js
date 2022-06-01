import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./context/filter-context";
import { WishlistProvider } from "./context/wishlist-context";
import { CartProvider } from "./context/cart-context";
import { AuthProvider } from "./context/auth-context";
import { ProductsProvider } from "./context/product-context";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<ProductsProvider>
				<CartProvider>
					<WishlistProvider>
						<FilterProvider>
							<App />
						</FilterProvider>
					</WishlistProvider>
				</CartProvider>
			</ProductsProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
