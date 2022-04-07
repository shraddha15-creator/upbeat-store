import React from "react";
import { useFilter } from "../../context/filter-context";

export function Filter() {
	const {
		state: {
			sortBy,
			categories: { fastDelivery, outOfStock },
			category,
			priceRange,
			rating,
		},
		dispatch,
	} = useFilter();

	return (
		<>
			<div className="product-filters">
				<div className="filter-title">
					<h4>Filters</h4>
					<button
						className="clear-filter-btn"
						onClick={() => dispatch({ type: "CLEAR" })}
					>
						Clear
					</button>
				</div>
				<div className="filter-sort">
					<h4>Sort by</h4>
					<div>
						<label>
							<input
								type="radio"
								name="sort"
								value="low_to_high"
								checked={sortBy === "LOW_TO_HIGH"}
								onChange={() =>
									dispatch({
										type: "SORT",
										payload: "LOW_TO_HIGH",
									})
								}
							/>
							Price - Low to High
						</label>
					</div>

					<label>
						<input
							type="radio"
							name="sort"
							value="high_to_low"
							checked={sortBy === "HIGH_TO_LOW"}
							onChange={() =>
								dispatch({
									type: "SORT",
									payload: "HIGH_TO_LOW",
								})
							}
						/>
						Price: High to Low
					</label>
				</div>
				<div className="filter-price">
					<h4>Price</h4>
					<div className="slider-container">
						<div className="slider-ranges-values">
							<span>4500</span>
							<span>10000</span>
							<span>15000</span>
						</div>
						<input
							className="slider-two"
							type="range"
							name="priceRange"
							value={priceRange}
							min="4500"
							max="15000"
							onChange={(e) => {
								dispatch({
									type: "PRICE_RANGE",
									payload: e.target.value,
								});
							}}
						/>
					</div>
				</div>
				<div className="filter-category">
					<h4>Type</h4>
					<div>
						<label>
							<input
								type="checkbox"
								name="typeFilter"
								value="type_acoustic"
								checked={category.acoustic}
								onChange={() =>
									dispatch({
										type: "CATEGORY",
										payload: "acoustic",
									})
								}
							/>
							Acoustic
						</label>
					</div>
					<div>
						<label>
							<input
								type="checkbox"
								name="typeFilter"
								value="type_electric"
								checked={category.electric}
								onChange={() =>
									dispatch({
										type: "CATEGORY",
										payload: "electric",
									})
								}
							/>
							Electric
						</label>
					</div>
					<div>
						<label>
							<input
								type="checkbox"
								name="typeFilter"
								value="type_hollowbody"
								checked={category.hollowbody}
								onChange={() =>
									dispatch({
										type: "CATEGORY",
										payload: "hollowbody",
									})
								}
							/>
							Hollowbody
						</label>
					</div>
					<div>
						<label>
							<input
								type="checkbox"
								name="typeFilter"
								value="type_classis"
								checked={category.classic}
								onChange={() =>
									dispatch({
										type: "CATEGORY",
										payload: "classic",
									})
								}
							/>
							Classic
						</label>
					</div>
				</div>
				<div className="filter-rating">
					<h4>Rating</h4>
					<div>
						<label>
							<input
								type="radio"
								name="rating"
								checked={rating === "4"}
								onChange={() => dispatch({ type: "RATING", payload: "4" })}
							/>
							4 Stars & above
						</label>
					</div>
					<div>
						<label>
							<input
								type="radio"
								name="rating"
								checked={rating === "3"}
								onChange={() => dispatch({ type: "RATING", payload: "3" })}
							/>
							3 Stars & above
						</label>
					</div>
					<div>
						<label>
							<input
								type="radio"
								name="rating"
								checked={rating === "2"}
								onChange={() => dispatch({ type: "RATING", payload: "2" })}
							/>
							2 Stars & above
						</label>
					</div>
					<div>
						<label>
							<input
								type="radio"
								name="rating"
								checked={rating === "1"}
								onChange={() => dispatch({ type: "RATING", payload: "1" })}
							/>
							1 Stars & above
						</label>
					</div>
				</div>
				<div className="filter-category">
					<h4>Category</h4>
					<div>
						<label>
							<input
								type="checkbox"
								value="fastDelivery"
								id="fastDelivery"
								checked={fastDelivery}
								onChange={() => dispatch({ type: "FAST_DELIVERY" })}
							/>
							Fast Delivery
						</label>
					</div>
					<div>
						<label>
							<input
								type="checkbox"
								value="outOfStock"
								id="outOfStock"
								checked={outOfStock}
								onChange={() => dispatch({ type: "OUT_OF_STOCK" })}
							/>
							Include out of stock
						</label>
					</div>
				</div>
			</div>
		</>
	);
}
