const categoriesFunction = (filterdProducts, category) => {
	let total = [];
	if (category.acoustic) {
		const acoustic = [...filterdProducts].filter(
			(item) => item.categoryName === "acoustic"
		);
		total = [...total, ...acoustic];
		console.log(total);
	}
	if (category.electric) {
		const electric = [...filterdProducts].filter(
			(item) => item.categoryName === "electric"
		);
		total = [...total, ...electric];
	}
	if (category.hollowbody) {
		const hollowbody = [...filterdProducts].filter(
			(item) => item.categoryName === "hollowbody"
		);
		total = [...total, ...hollowbody];
	}
	if (category.classic) {
		const classic = [...filterdProducts].filter(
			(item) => item.categoryName === "classic"
		);
		total = [...total, ...classic];
		console.log(total);
		return total;
	}
	if (total.length !== 0) return total;

	return filterdProducts;
};

export { categoriesFunction };
