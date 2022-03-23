const sortFunction = (products, sortBy) => {
	if (sortBy === "LOW_TO_HIGH")
		return [...products].sort(
			(firstProduct, secondProduct) =>
				firstProduct.OriginalPrice - secondProduct.OriginalPrice
		);

	if (sortBy === "HIGH_TO_LOW")
		return [...products].sort(
			(firstProduct, secondProduct) =>
				secondProduct.OriginalPrice - firstProduct.OriginalPrice
		);

	return products;
};

export { sortFunction };
