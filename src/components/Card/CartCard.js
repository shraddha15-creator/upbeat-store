import React from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

const CartCard = ({ product }) => {
	const { _id, img, brand, title, OriginalPrice, offerPrice, qty } = product;
	const { removeFromCart, getQt, moveToWishlist } = useCart();
	return (
		<>
			<div className="card-horizontal">
				<div className="card-img-container">
					<img className="cart-img" src={img} alt="" />
				</div>
				<div className="card-details-container card-horizontal-details">
					<h5 className="card-product-brand">{brand}</h5>
					<h6 className="card-product-name">{title}</h6>
					<h6 className="card-product-price">Rs. {OriginalPrice}</h6>
					<h6 className="card-product-offer">
						<span className="pro-off">Offer Price: </span>Rs. {offerPrice}
					</h6>
					<div className="single-product-quantity">
						<button
							className="product-qnt-btn product-inc-btn"
							onClick={() => getQt(_id, "decrement")}
						>
							-
						</button>
						<span className="product-quantity">{qty}</span>
						<button
							className="product-qnt-btn product-dec-btn"
							onClick={() => getQt(_id, "increment")}
						>
							+
						</button>
					</div>
					<button
						className="btn btn-with-links btn-dark"
						onClick={() => removeFromCart(_id)}
					>
						Remove from Cart
					</button>
					<button
						className="btn btn-with-links add-to-wshl-btn"
						onClick={() => moveToWishlist({ _id, brand, title })}
					>
						Add to Wishlist
					</button>
				</div>
			</div>
		</>
	);
};

export default CartCard;
