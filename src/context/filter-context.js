import { createContext, useContext, useReducer } from "react";
import { filterReducerFunc } from "./filterReducerFunc";

const FilterContext = createContext(null);

const initialState = {
	sortBy: null,
	categories: { outOfStock: false, fastDelivery: false },
	category: {
		acoustic: false,
		electric: false,
		hollowbody: false,
		classic: false,
	},
	priceRange: "10000",
	rating: "",
};

const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(filterReducerFunc, initialState);
	return (
		<FilterContext.Provider value={{ state, dispatch }}>
			{children}
		</FilterContext.Provider>
	);
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
