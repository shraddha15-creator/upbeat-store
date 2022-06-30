import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import "./style.css";

export function Navbar() {
	const navigate = useNavigate();
	const { wishlistProducts } = useWishlist();
	const { cartItems } = useCart();
	const { user, setUser } = useAuth();

	const logoutHandler = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userDetails");
		setUser({ token: "", userDetails: "", isLoggedIn: false });
		navigate("/");
	};

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

				{/* <div className="search-box">
					<input type="text" className="input-search" placeholder="Search..." />
					<i className="fa fa-search icon"></i>
				</div> */}

				<div className="right-nav">
					<div className="badge-content">
						<div className="badge">
							<Link to="/cart">
								<i className="fa fa-cart-plus icon"></i>
								{cartItems && cartItems.length > 0 && (
									<div className="icon-badge">
										<span className="badge-nums">
											{cartItems && cartItems.length > 0 ? cartItems.length : 0}
										</span>
									</div>
								)}
							</Link>
						</div>
					</div>
					<div className="badge-content">
						<div className="badge">
							<Link to="/wishlist">
								<i className="fa fa-heart icon"></i>
								{wishlistProducts?.length && (
									<div className="icon-badge">
										<span className="badge-nums">
											{wishlistProducts?.length}
										</span>
									</div>
								)}
							</Link>
						</div>
					</div>
					{user && user.isLoggedIn ? (
						<button
							className="btn btn-primary login-btn"
							onClick={logoutHandler}
						>
							Logout
						</button>
					) : (
						<Link to="/login" className="elp-items">
							<button className="btn btn-primary login-btn">Login</button>
						</Link>
					)}
				</div>
			</div>
		</>
	);
}
