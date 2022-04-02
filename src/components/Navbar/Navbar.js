import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";
import "./style.css";

export function Navbar() {
	const { wishlistProducts } = useWishlist();
	return (
		<>
			<div className="navigation-container">
				<div className="left-nav">
					<h3 className="nav-brand">
						<Link to="/">
							<span className="brand-name">Upbeat</span>
						</Link>
					</h3>
				</div>

				<div className="search-box">
					<input type="text" className="input-search" placeholder="Search..." />
					<i className="fa fa-search icon"></i>
				</div>

				<div className="right-nav">
					<div className="badge-content">
						<div className="badge">
							<Link to="/cart">
								<i className="fa fa-cart-plus icon"></i>
								<div className="icon-badge">
									<span className="badge-nums">1</span>
								</div>
							</Link>
						</div>
					</div>
					<div className="badge-content">
						<div className="badge">
							<Link to="/wishlist">
								<i className="fa fa-heart icon"></i>
								<div className="icon-badge">
									<span className="badge-nums">{wishlistProducts.length}</span>
								</div>
							</Link>
						</div>
					</div>
					<a href="./screens/login/login.html" className="links">
						<Link to="/login ">
							<button className="btn btn-primary login-btn">Login</button>
						</Link>
					</a>
				</div>
			</div>
		</>
	);
}
