const priceRangeFunction = (categoriesTypeProducts, priceRange) => {
	return [...categoriesTypeProducts].filter(
		(item) => parseInt(item.OriginalPrice) <= parseInt(priceRange)
	);
};

export { priceRangeFunction };
