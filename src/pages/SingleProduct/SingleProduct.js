import React from "react";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../context/product-context";
import { Page404 } from "../404page/Page404";
import "./SingleProduct.css";

export const SingleProduct = () => {
	const { productId } = useParams();
	const { products } = useProducts();

	const getSingleProduct = (products, productId) => {
		return products?.find((item) => item._id === productId);
	};
	const product = getSingleProduct(products, productId);

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
							<p className="single-product-id">Item: #12345678</p>
							<h5 className="single-product-ratings">
								<i className="fa fa-star star"></i>
								<i className="fa fa-tar star"></i>
								<i className="fa fa-star star"></i>
								<i className="fa fa-star star"></i>
								<i className="fa fa-star star-empty"></i>| 41 Reviews
							</h5>
							<h2 className="single-product-price">INR {product.offerPrice}</h2>
							<div className="single-product-quantity">
								<button className="product-qnt-btn product-inc-btn">-</button>
								<span className="product-quantity">1</span>
								<button className="product-qnt-btn product-dec-btn">+</button>
							</div>
							<button className="btn btn-with-links btn-dark">
								Add to Cart
							</button>
							<button className="btn btn-with-links add-to-wshl-btn">
								Add to Wishlist
							</button>
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

			{/*  */}
		</>
	);
};
