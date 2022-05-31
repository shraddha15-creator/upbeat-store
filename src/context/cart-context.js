import axios from "axios";
import { useState, createContext, useContext } from "react";
import { token } from "../utilities/token";

const encodedToken = token();

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState();

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
			const currItem = response.data.cart.find((e) => e._id === productId);
			if (currItem.qty < 1) {
				removeFromCart(productId);
			} else {
				setCartItems(response.data.cart);
			}
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
