import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import "../../pages/ProductListing/Products.css";

const ProductCard = ({
	_id,
	img,
	brand,
	OriginalPrice,
	title,
	offerPrice,
	rating,
	inStock,
	addToWishlist,
	addToCart,
}) => {
	const navigate = useNavigate();
	const { cartItems } = useCart();
	const { wishlistProducts } = useWishlist();
	const { user } = useAuth();
	return (
		<>
			<div
				className={`card-container ${
					!inStock ? "out-of-stock-container" : "card-container"
				}`}
			>
				<div className="card-img-container">
					<Link to={`/product/${_id}`}>
						<img
							className="img-card"
							src={img}
							alt="product-card"
							// onClick={() => navigate(`/product/${_id}`)}
						/>
					</Link>
				</div>
				<Link to={`/product/${_id}`}>
					<div className="card-details-container">
						<div className="card-product-brand">{brand}</div>
						<h6 className="card-product-name">{title}</h6>
						<h6 className="card-product-price">
							Rs.
							{OriginalPrice}
						</h6>
						<h6 className="card-product-offer">
							<span className="pro-off">Offer Price:</span>
							Rs. {offerPrice}
						</h6>
						<p className="product-ratings">
							{rating}
							<i className="fa fa-star icon-star-rating"></i>
						</p>
					</div>
				</Link>
				{cartItems && cartItems.find((e) => e._id === _id) ? (
					<Link to="/cart">
						<button className="btn btn-dark">Go to Cart</button>
					</Link>
				) : (
					<button
						className="btn btn-dark"
						onClick={() => {
							user.isLoggedIn ? addToCart() : navigate("/login");
						}}
					>
						Add to Cart
					</button>
				)}

				{wishlistProducts && wishlistProducts.find((e) => e._id === _id) ? (
					<Link to="/wishlist">
						<button className="btn btn-light"> Go to Wishlist </button>
					</Link>
				) : (
					<button
						className="btn btn-light"
						onClick={() => {
							user.token ? addToWishlist() : navigate("/login");
						}}
					>
						Add to Wishlist
					</button>
				)}
			</div>
		</>
	);
};

export default ProductCard;
