import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
	AuthProvider,
	ProductsProvider,
	FilterProvider,
	WishlistProvider,
	CartProvider,
} from "./context";

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
