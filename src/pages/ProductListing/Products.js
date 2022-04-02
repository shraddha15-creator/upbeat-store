import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import { Filter } from "../../components/index";
import { useFilter } from "../../context/filter-context";
import {
	sortFunction,
	categoriesFunction,
	filterFunction,
	priceRangeFunction,
	ratingsProductFunction,
} from "../../utilities";
import ProductCard from "../../components/Card/ProductCard";
import { useWishlist } from "../../context/wishlist-context";

export function Products() {
	const [products, setProducts] = useState([]);
	const {
		state: { sortBy, categories, category, priceRange, rating },
	} = useFilter();
	const { addToWishlist } = useWishlist();

	useEffect(() => {
		(async () => {
			try {
				const reponse = await axios.get("/api/products");
				setProducts(reponse.data.products);
			} catch (error) {
				console.error("ERROR: While fetching Products", error);
			}
		})();
	}, []);

	const sortedProducts = sortFunction(products, sortBy);
	const filterdProducts = filterFunction(sortedProducts, categories);
	const categoriesTypeProducts = categoriesFunction(filterdProducts, category);
	const priceRangeProducts = priceRangeFunction(
		categoriesTypeProducts,
		priceRange
	);
	const ratingsProducts = ratingsProductFunction(priceRangeProducts, rating);

	return (
		<>
			<main>
				<div className="product-container">
					<Filter />
					<div className="products-all">
						<h2>
							Showing all products
							<span className="showing-product-result">
								(Showing {ratingsProducts.length}
								Products)
							</span>
						</h2>
						<div className="total-products-container">
							{ratingsProducts &&
								ratingsProducts.map(
									({
										_id,
										img,
										brand,
										title,
										OriginalPrice,
										offerPrice,
										rating,
									}) => (
										<ProductCard
											key={_id}
											img={img}
											brand={brand}
											title={title}
											originalPrice={OriginalPrice}
											offerPrice={offerPrice}
											rating={rating}
											addToWishlist={() =>
												addToWishlist({
													_id,
													img,
													brand,
													title,
													OriginalPrice,
													offerPrice,
													rating,
												})
											}
										/>
									)
								)}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
