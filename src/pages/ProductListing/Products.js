import React, { useEffect, useState } from "react";
import axios from "axios";
import { Filter } from "../../components/index";
import {
	sortFunction,
	categoriesFunction,
	filterFunction,
	priceRangeFunction,
	ratingsProductFunction,
} from "../../utilities";
import { useFilter, useWishlist, useCart } from "../../context";
import ProductCard from "../../components/Card/ProductCard";
import "./Products.css";

export function Products() {
	const { addToWishlist } = useWishlist();
	const { addToCart } = useCart();
	const {
		state: { sortBy, categories, category, priceRange, rating },
	} = useFilter();
	const [products, setProducts] = useState([]);

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
											_id={_id}
											img={img}
											brand={brand}
											title={title}
											OriginalPrice={OriginalPrice}
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
											addToCart={() =>
												addToCart({
													_id,
													img,
													brand,
													title,
													OriginalPrice,
													offerPrice,
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
