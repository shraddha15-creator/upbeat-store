const filterFunction = (sortedProducts, categories) =>
	sortedProducts
		.filter(({ inStock }) =>
			categories.outOfStock ? sortedProducts : inStock
		)
		.filter(({ fastDelivery }) =>
			categories.fastDelivery ? fastDelivery : sortedProducts
		);

export { filterFunction };
