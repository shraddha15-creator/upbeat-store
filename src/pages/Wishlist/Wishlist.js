import React from "react";
import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../../context";
import WishlistCard from "../../components/Card/WishlistCard";
import "./wishlist.css";

export const Wishlist = () => {
	const { wishlistProducts, removeFromWishlist } = useWishlist();
	const { addToCart } = useCart();
	return (
		<>
			<div className="wishlist-product-container">
				<div className="wishlist-title">
					My Wishlist
					<span className="wishlist-total">
						({wishlistProducts.length} Items added)
					</span>
				</div>

				{wishlistProducts.length < 1 && (
					<div className="empty-wishlist-container">
						<h1>🛍️</h1>
						<p>There is nothing in your wishlist, Let's add something!</p>
						<Link to="/products">
							<button className=" btn btn-secondary btn-dark">
								Add Items to Wishlist
							</button>
						</Link>
					</div>
				)}

				{/* <!-- Wishlised products --> */}
				<div className="wishlisted-products">
					{wishlistProducts &&
						wishlistProducts.map(
							({
								_id,
								img,
								brand,
								title,
								OriginalPrice,
								offerPrice,
								rating,
							}) => (
								<WishlistCard
									key={_id}
									img={img}
									brand={brand}
									title={title}
									originalPrice={OriginalPrice}
									offerPrice={offerPrice}
									rating={rating}
									removeFromWishlist={removeFromWishlist}
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
									_id={_id}
								/>
							)
						)}
				</div>
			</div>
		</>
	);
};
