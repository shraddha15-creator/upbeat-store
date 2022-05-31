import axios from "axios";
import { useState, createContext, useContext } from "react";
import { token } from "../utilities/token";

const encodedToken = token();

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
	const [wishlistProducts, setWishlistProducts] = useState([]);

	const addToWishlist = async (product) => {
		try {
			const response = await axios.post(
				"/api/user/wishlist",
				{ product },
				{ headers: { authorization: encodedToken } }
			);
			setWishlistProducts(response.data.wishlist);
		} catch (error) {
			console.error(error);
		}
	};

	const removeFromWishlist = async (productId) => {
		try {
			const response = await axios.delete(`/api/user/wishlist/${productId}`, {
				headers: { authorization: encodedToken },
			});
			setWishlistProducts(response.data.wishlist);
		} catch (error) {
			console.error("==>while deleting", error);
		}
	};

	return (
		<WishlistContext.Provider
			value={{
				wishlistProducts,
				setWishlistProducts,
				addToWishlist,
				removeFromWishlist,
			}}
		>
			{children}
		</WishlistContext.Provider>
	);
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
