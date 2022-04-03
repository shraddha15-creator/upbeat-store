import React from "react";

const WishlistCard = ({
	key,
	_id,
	img,
	brand,
	OriginalPrice,
	title,
	offerPrice,
	rating,
	removeFromWishlist,
}) => {
	return (
		<>
			<div className="card-container">
				<div className="card-img-container">
					<i className="fas fa-trash-alt  card-close"></i>
					<img className="img-card" src={img} />
				</div>
				<div className="card-details-container">
					<h5 className="card-product-brand">{brand}</h5>
					<h6 className="card-product-name">{title}</h6>
					<h6 className="card-product-price">Rs. {OriginalPrice} </h6>
					<h6 className="card-product-offer">
						<span className="pro-off">Offer Price:</span>Rs. {offerPrice}
					</h6>
				</div>
				<button className="btn btn-with-links btn-dark">Add to Cart</button>
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
