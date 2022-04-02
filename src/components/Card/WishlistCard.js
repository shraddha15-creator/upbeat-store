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
			<div class="card-container">
				<div class="card-img-container">
					<i class="fas fa-trash-alt  card-close"></i>
					<img class="img-card" src={img} />
				</div>
				<div class="card-details-container">
					<h5 class="card-product-brand">{brand}</h5>
					<h6 class="card-product-name">{title}</h6>
					<h6 class="card-product-price">Rs. {OriginalPrice} </h6>
					<h6 class="card-product-offer">
						<span class="pro-off">Offer Price:</span>Rs. {offerPrice}
					</h6>
				</div>
				<button class="btn btn-with-links btn-dark">Add to Cart</button>
				<button
					class="btn btn-secondary"
					onClick={() => removeFromWishlist(_id)}
				>
					Remove from Wishlist
				</button>
			</div>
		</>
	);
};

export default WishlistCard;
