import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";

const WishlistCard = ({
	key,
	_id,
	img,
	brand,
	OriginalPrice,
	title,
	offerPrice,
	removeFromWishlist,
	addToCart,
}) => {
	const { cartItems } = useCart();
	return (
		<>
			<div className="card-container">
				<div className="card-img-container">
					<i className="fas fa-trash-alt  card-close"></i>
					<img className="img-card" src={img} alt="wishlist-product" />
				</div>
				<div className="card-details-container">
					<h5 className="card-product-brand">{brand}</h5>
					<h6 className="card-product-name">{title}</h6>
					<h6 className="card-product-price">Rs. {OriginalPrice} </h6>
					<h6 className="card-product-offer">
						<span className="pro-off">Offer Price:</span>Rs. {offerPrice}
					</h6>
				</div>

				{cartItems && cartItems.find((e) => e._id === _id) ? (
					<Link to="/cart">
						<button className="btn btn-dark">Go to Cart</button>
					</Link>
				) : (
					<button className="btn btn-dark" onClick={addToCart}>
						Add to Cart
					</button>
				)}

				<button
					className="btn btn-secondary"
					onClick={() => removeFromWishlist(_id)}
				>
					Remove from Wishlist
				</button>
			</div>
		</>
	);
};

export default WishlistCard;
