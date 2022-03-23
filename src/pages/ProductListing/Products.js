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

export function Products() {
	const [products, setProducts] = useState([]);
	const {
		state: { sortBy, categories, category, priceRange, rating },
	} = useFilter();

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
	const categoriesTypeProducts = categoriesFunction(
		filterdProducts,
		category
	);
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
								ratingsProducts.map((product) => {
									return (
										<>
											<div className="card-container ">
												<div className="card-img-container">
													<img
														className="img-card"
														src={product.img}
														alt="product-image"
													/>
												</div>
												<div className="card-details-container">
													<a
														href="../single-product/single.html"
														className="card-product-brand"
													>
														{product.brand}
													</a>
													<h6 className="card-product-name">
														{product.title}
													</h6>
													<h6 className="card-product-price">
														Rs.
														{product.OriginalPrice}
													</h6>
													<h6 className="card-product-offer">
														<span className="pro-off">
															Offer Price:
														</span>
														Rs. {product.offerPrice}
													</h6>
													<p className="product-ratings">
														{product.rating}
														<i class="fa fa-star icon-star-rating"></i>
													</p>
												</div>
												<button className="btn btn-dark">
													Add to Cart
												</button>
												<button className="btn btn-light">
													Add to Wishlist
												</button>
											</div>
										</>
									);
								})}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
