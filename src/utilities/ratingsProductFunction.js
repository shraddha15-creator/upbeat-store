const ratingsProductFunction = (priceRangeProducts, ratingStar) => {
	if (ratingStar === "4")
		return priceRangeProducts.filter(
			(item) => parseInt(item.rating[0]) >= parseInt(ratingStar[0])
		);
	if (ratingStar === "3")
		return priceRangeProducts.filter(
			(item) => parseInt(item.rating[0]) >= parseInt(ratingStar[0])
		);
	if (ratingStar === "2")
		return priceRangeProducts.filter(
			(item) => parseInt(item.rating[0]) >= parseInt(ratingStar[0])
		);
	if (ratingStar === "1")
		return priceRangeProducts.filter(
			(item) => parseInt(item.rating[0]) >= parseInt(ratingStar[0])
		);
	return priceRangeProducts;
};

export { ratingsProductFunction };
