import React from "react";
import { useCart } from "../../context/cart-context";

const PriceDetailsCard = () => {
	const { cartItems } = useCart();
	const priceDetailsCalc = (accumulator, currentValue) =>
		accumulator + currentValue.offerPrice * currentValue.qty;
	const total = cartItems.reduce(priceDetailsCalc, 0);

	return (
		<>
			<div className="cart-price-details-box">
				<div className="price-details-title hr-line">PRICE DETAILS</div>
				<div className="items-total">
					<p>Price ({cartItems.length} Items)</p>
					<p>{total}</p>
				</div>
				<div className="items-total">
					<p>Discount</p>
					<p>-79</p>
				</div>
				<div className="items-total hr-line">
					<p>Delivery Chanrge</p>
					<p>Rs. {total > 400 ? 50 : 0}</p>
				</div>
				<div className="price-details-total items-total">
					<p>TOTAL AMOUNT</p>
					<p>Rs. {total > 0 ? total - 79 + 50 : 0}</p>
				</div>
				<p className="cart-saving-msg">You will save 1999 on this order</p>
				<button className="btn btn-with-links btn-dark">PLACE ORDER</button>
			</div>
		</>
	);
};

export default PriceDetailsCard;
