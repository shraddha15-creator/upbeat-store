import React from "react";
import "./style.css";

export function Navbar() {
	return (
		<>
			<div className="navigation-container">
				<div className="left-nav">
					<h3 className="nav-brand">
						<a href="./index.html">
							<span className="brand-name">Upbeat</span>
						</a>
					</h3>
				</div>

				<div className="search-box">
					<input
						type="text"
						className="input-search"
						placeholder="Search..."
					/>
					<i className="fa fa-search icon"></i>
				</div>

				<div className="right-nav">
					<a href="./screens/cart/cart.html">
						<i className="fa fa-cart-plus icon"></i>
					</a>
					<a href="./screens/wishlist/wishlist.html">
						<i className="fa fa-bookmark icon"></i>
					</a>
					<a href="./screens/login/login.html" className="links">
						<button className="btn btn-primary login-btn">
							Login
						</button>
					</a>
				</div>
			</div>
		</>
	);
}
