import React from "react";

const ProductCard = ({
	_id,
	key,
	img,
	brand,
	OriginalPrice,
	title,
	offerPrice,
	rating,
	addToWishlist,
}) => {
	return (
		<>
			<div className="card-container ">
				<div className="card-img-container">
					<img className="img-card" src={img} alt="product-image" />
				</div>
				<div className="card-details-container">
					<a
						href="../single-product/single.html"
						className="card-product-brand"
					>
						{brand}
					</a>
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
						<i class="fa fa-star icon-star-rating"></i>
					</p>
				</div>
				<button className="btn btn-dark">Add to Cart</button>
				<button className="btn btn-light" onClick={addToWishlist}>
					Add to Wishlist
				</button>
			</div>
		</>
	);
};

export default ProductCard;
