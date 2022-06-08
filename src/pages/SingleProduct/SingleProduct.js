import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import { useProducts } from "../../context/product-context";
import { Page404 } from "../404page/Page404";
import "./SingleProduct.css";

export const SingleProduct = () => {
	const navigate = useNavigate();
	const { productId } = useParams();
	const { user } = useAuth();
	const { products } = useProducts();
	const { getQt, cartItems, addToCart } = useCart();

	const { wishlistProducts, addToWishlist } = useWishlist();

	const getSingleProduct = (products, productId) => {
		return products?.find((item) => item._id === productId);
	};
	const product = getSingleProduct(products, productId);
	const { _id, img, brand, title, OriginalPrice, offerPrice, rating } = product;

	const newQuantity = cartItems.find((item) => item._id === product._id);

	return (
		<>
			{product ? (
				<>
					<div className="single-product-container">
						<img
							src={product.img}
							alt={product.title}
							className="single-product-img"
						/>
						<div className="single-product-details">
							<div className="product-status-like">
								<h6 className="single-product-status">
									{product.isTopProduct ? "Top Product" : "Best Seller"}
								</h6>
							</div>
							<h4 className="single-product-brand">{product.brand}</h4>
							<h1 className="single-product-name">{product.title}</h1>
							<p className="single-product-id">
								Item: #{product._id.slice(0, 8)}
							</p>
							<h5 className="single-product-ratings">
								<i className="fa fa-star star"></i>
								<i className="fa fa-tar star"></i>
								<i className="fa fa-star star"></i>
								<i className="fa fa-star star"></i>
								<i className="fa fa-star star-empty"></i>| 41 Reviews
							</h5>
							<h2 className="single-product-price">INR {product.offerPrice}</h2>
							<div className="single-product-quantity">
								<button
									className="product-qnt-btn product-inc-btn"
									onClick={() => getQt(product._id, "decrement")}
								>
									-
								</button>
								<span className="product-quantity">
									{newQuantity && newQuantity.qty ? newQuantity.qty : "1"}
								</span>
								<button
									className="product-qnt-btn product-dec-btn"
									onClick={() => getQt(product._id, "increment")}
								>
									+
								</button>
							</div>
							<div>
								{cartItems && cartItems.find((e) => e._id === product._id) ? (
									<Link to="/cart">
										<button className="btn btn-dark">Go to Cart</button>
									</Link>
								) : (
									<button
										className="btn btn-dark"
										onClick={() => {
											user.isLoggedIn
												? addToCart({
														_id,
														img,
														brand,
														title,
														OriginalPrice,
														offerPrice,
												  })
												: navigate("/login");
										}}
									>
										Add to Cart
									</button>
								)}
								{wishlistProducts &&
								wishlistProducts.find((e) => e._id === product._id) ? (
									<Link to="/wishlist">
										<button className="btn btn-light"> Go to Wishlist </button>
									</Link>
								) : (
									<button
										className="btn btn-light"
										onClick={() => {
											user.token
												? addToWishlist({
														_id,
														img,
														brand,
														title,
														OriginalPrice,
														offerPrice,
														rating,
												  })
												: navigate("/login");
										}}
									>
										Add to Wishlist
									</button>
								)}
							</div>
						</div>
					</div>
					<div className="product-description-container">
						<div className="prod-description">
							<h3 className="description-title">Description</h3>
							<p>{product.productDescription}</p>
						</div>
						<div className="prod-feature">
							<ul className="simple-list list-square">
								<li>3/4-size offset double-cutaway design</li>
								<li>One-piece, shallow-”C” shape maple neck</li>
								<li>Jatoba tonewood fretboard </li>
								<li>22 medium-jumbo frets</li>
								<li>22.5” scale length</li>
								<li>HSS pickup configuration</li>
								<li>Through-body string loading</li>
								<li>Master Volume, Master Tone</li>
							</ul>
						</div>
					</div>
				</>
			) : (
				<div className="no-product-container">
					<Page404 />
					<Link to="/products" className="go-back-btn">
						Please Go Back
					</Link>
				</div>
			)}
		</>
	);
};
