import axios from "axios";
import { useState, createContext, useContext } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
	const [wishlistProducts, setWishlistProducts] = useState([]);
	const encodedToken =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4NDA1MjA4MS1hNjAwLTQ2YmQtYTNhZS0yZDljNTU2YTQ0NzgiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.gaqvCVkY0hv54te82TnyI8W3iLXNbRScUytBNaTE3GM";

	const addToWishlist = async (product) => {
		try {
			const response = await axios.post(
				"/api/user/wishlist",
				{ product },
				{ headers: { authorization: encodedToken } }
			);
			setWishlistProducts(response.data.wishlist);
			console.log(response.data.wishlist);
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
