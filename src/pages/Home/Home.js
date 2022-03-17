import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
	const [guitarCategories, setGuitarCategories] = useState();

	useEffect(() => {
		axios
			.get("/api/categories")
			.then((res) => setGuitarCategories(res.data.categories));
	}, []);

	return (
		<>
			<main>
				<div className="img-container">
					<div className="img-txt overlay">
						<img
							src="https://raw.githubusercontent.com/shraddha15-creator/e-commerce/dev/images/hero-img.jpg"
							alt="hero-img"
							className="img-responsive"
						/>
					</div>
					<div className="txt-overlay">
						<div className="sub-heading">Welcome,</div>
						<div className="content-heading">
							Start Your Musical Journey With Upbeat!
						</div>
						<a
							href="./screens/products-list/products.html"
							className="links"
						>
							<button className="shop-now-btn btn btn-primary btn-dark">
								Shop Now
							</button>
						</a>
					</div>
				</div>

				{/* <!-- Shop by category --> */}
				<h3 className="section-name">Shop by Category</h3>
				<div className="brands-container">
					{guitarCategories &&
						guitarCategories.map((item) => {
							return (
								<div className="brand-box">
									<img
										src={item.img}
										alt="guitar-pic"
										className="brand-logo img-main img-round"
									/>
									<a href="">
										<h5 className="guitar-type">
											{item.categoryName}
										</h5>
									</a>
								</div>
							);
						})}
				</div>
			</main>
		</>
	);
}

export default Home;
