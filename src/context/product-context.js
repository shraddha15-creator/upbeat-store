import { useState, createContext, useContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	return (
		<ProductsContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductsContext.Provider>
	);
};

export const useProducts = () => useContext(ProductsContext);
