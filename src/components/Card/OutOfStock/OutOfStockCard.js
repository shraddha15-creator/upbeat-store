import React from "react";
import "./OutOfStockCard.css";

const OutOfStockCard = ({
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
	return (
		<>
			<div className="OutOfStockCard">
				<h3>out of stock</h3>
			</div>
		</>
	);
};

export default OutOfStockCard;
