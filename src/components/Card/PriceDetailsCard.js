import React from "react";
import { useCart } from "../../context/cart-context";

const PriceDetailsCard = () => {
	const { cartItems } = useCart();
	const priceDetailsCalc = (accumulator, currentValue) =>
		accumulator + currentValue.offerPrice * currentValue.qty;
	const total = cartItems.reduce(priceDetailsCalc, 0);

	return (
		<>
			<div class="cart-price-details-box">
				<div class="price-details-title hr-line">PRICE DETAILS</div>
				<div class="items-total">
					<p>Price ({cartItems.length} Items)</p>
					<p>{total}</p>
				</div>
				<div class="items-total">
					<p>Discount</p>
					<p>-79</p>
				</div>
				<div class="items-total hr-line">
					<p>Delivery Chanrge</p>
					<p>Rs. {total > 400 ? 50 : 0}</p>
				</div>
				<div class="price-details-total items-total">
					<p>TOTAL AMOUNT</p>
					<p>Rs. {total > 0 ? total - 79 + 50 : 0}</p>
				</div>
				<p class="cart-saving-msg">You will save 1999 on this order</p>
				<button class="btn btn-with-links btn-dark">PLACE ORDER</button>
				<p class="cart-saving-msg">Do you Coupon?</p>
				<div class="price-details-total items-total">
					<input
						class="input-box coupon-btn"
						type="text"
						placeholder="Coupon code"
					/>
					<button class="btn btn-with-links btn-dark coupon-apply-btn">
						APPLY
					</button>
				</div>
			</div>
		</>
	);
};

export default PriceDetailsCard;
