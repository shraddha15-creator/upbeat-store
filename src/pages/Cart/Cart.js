import React from "react";
import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../../context";
import CartCard from "../../components/Card/CartCard";
import PriceDetailsCard from "../../components/Card/PriceDetailsCard";
import "./cart.css";

const Cart = () => {
	const { cartItems } = useCart();
	const { addToWishlist } = useWishlist();
	return (
		<>
			{cartItems && cartItems.length > 0 ? (
				<div className="cart-container">
					<div className="cart-content">
						<div className="cart-products-added">
							{cartItems.map((cartItem) => {
								return (
									<CartCard
										key={cartItem.id}
										product={cartItem}
										addToWishlist={addToWishlist}
									/>
								);
							})}
						</div>
						<PriceDetailsCard />
					</div>
				</div>
			) : (
				<div className="cart-container">
					<div className="cart-content">
						<div className="cart-products-added empty-cart-container">
							<h1>🛍️</h1>
							<p>There is nothing in your Cart, Let's add something!</p>
							<Link to="/products">
								<button className=" btn btn-secondary btn-dark">
									Add Items to Cart
								</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Cart;
