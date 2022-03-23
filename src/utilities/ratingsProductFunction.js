const ratingsProductFunction = (priceRangeProducts, ratingStar) => {
	if (ratingStar === "4")
		return [...priceRangeProducts].filter((item) => {
			const rating = parseInt(item.rating[0]);
			if (rating >= parseInt(ratingStar[0])) return item;
		});
	if (ratingStar === "3")
		return [...priceRangeProducts].filter((item) => {
			const rating = parseInt(item.rating[0]);
			if (rating >= parseInt(ratingStar[0])) return item;
		});
	if (ratingStar === "2")
		return [...priceRangeProducts].filter((item) => {
			const rating = parseInt(item.rating[0]);
			if (rating >= parseInt(ratingStar[0])) return item;
		});
	if (ratingStar === "1")
		return [...priceRangeProducts].filter((item) => {
			const rating = parseInt(item.rating[0]);
			if (rating >= parseInt(ratingStar[0])) return item;
		});
	return [...priceRangeProducts];
};

export { ratingsProductFunction };
