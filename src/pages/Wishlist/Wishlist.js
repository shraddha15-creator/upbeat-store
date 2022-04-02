import React from "react";
import { Link } from "react-router-dom";
import WishlistCard from "../../components/Card/WishlistCard";
import { useWishlist } from "../../context/wishlist-context";
import "./wishlist.css";

const Wishlist = () => {
	const { wishlistProducts, removeFromWishlist } = useWishlist();
	return (
		<>
			<div class="wishlist-product-container">
				<div class="wishlist-title">
					My Wishlist
					<span class="wishlist-total">
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
				<div class="wishlisted-products">
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
									_id={_id}
								/>
							)
						)}
				</div>
			</div>
		</>
	);
};

export default Wishlist;
