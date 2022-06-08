export const filterReducerFunc = (state, action) => {
	switch (action.type) {
		case "CLEAR":
			return {
				...state,
				sortBy: null,
				categories: {
					...state.categories,
					outOfStock: false,
					fastDelivery: false,
				},
				category: {
					acoustic: false,
					electric: false,
					hollowbody: false,
					classic: false,
				},
				priceRange: "10000",
				rating: "",
			};
		case "SORT":
			return { ...state, sortBy: action.payload };
		case "FAST_DELIVERY":
			return {
				...state,
				categories: {
					...state.categories,
					fastDelivery: !state.categories.fastDelivery,
				},
			};
		case "OUT_OF_STOCK":
			return {
				...state,
				categories: {
					...state.categories,
					outOfStock: !state.categories.outOfStock,
				},
			};
		case "CATEGORY":
			return {
				...state,
				category: {
					...state.category,
					[action.payload]: !state.category[action.payload],
				},
			};
		case "PRICE_RANGE":
			return {
				...state,
				priceRange: action.payload,
			};
		case "RATING":
			return { ...state, rating: action.payload };
		default:
			return state;
	}
};
