import axios from "axios";
import { useState, createContext, useContext } from "react";
import { useWishlist } from "./wishlist-context";

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState();
	// const { setWishlistProducts } = useWishlist();

	const encodedToken =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4NDA1MjA4MS1hNjAwLTQ2YmQtYTNhZS0yZDljNTU2YTQ0NzgiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.gaqvCVkY0hv54te82TnyI8W3iLXNbRScUytBNaTE3GM";

	const addToCart = async (product) => {
		try {
			const response = await axios.post(
				"api/user/cart",
				{ product },
				{
					headers: { authorization: encodedToken },
				}
			);
			setCartItems(response.data.cart);
		} catch (error) {
			console.error("WHILE ADD TO CART CONTEXT", error);
		}
	};

	const removeFromCart = async (id) => {
		try {
			const response = await axios.delete(`/api/user/cart/${id}`, {
				headers: { authorization: encodedToken },
			});
			setCartItems(response.data.cart);
		} catch (error) {
			console.error("WHILE REMOVE FROM CART", error);
		}
	};

	// const moveToWishlist = async (product) => {
	// 	try {
	// 		const response = await axios.post(
	// 			`/api/user/wishlist`,
	// 			{ products: product },
	// 			{ headers: { authorization: encodedToken } }
	// 		);
	// 		setWishlistProducts(response.data.wishlist);
	// 		removeFromCart(product._id);
	// 	} catch (error) {
	// 		console.error("WHILE");
	// 	}
	// };

	const getQt = async (productId, btnType) => {
		try {
			const response = await axios.post(
				`/api/user/cart/${productId}`,
				{
					action: {
						type: btnType,
					},
				},
				{
					headers: {
						authorization: encodedToken,
					},
				}
			);
			setCartItems(response.data.cart);
		} catch (error) {
			console.error("WHILE GET quantity", error);
		}
	};

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, removeFromCart, getQt }}
		>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
