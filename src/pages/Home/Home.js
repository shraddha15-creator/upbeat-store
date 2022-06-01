import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../context";
import "./Home.css";

export const Home = () => {
	const [guitarCategories, setGuitarCategories] = useState();
	const { dispatch } = useFilter();

	const getCategories = async () => {
		try {
			const response = await axios.get("/api/categories");
			setGuitarCategories(response.data.categories);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getCategories();
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
						<Link to="/products">
							<button className="btn btn-primary">Shop Now</button>
						</Link>
					</div>
				</div>

				{/* <!-- Shop by category --> */}
				<h3 className="section-name">Shop by Category</h3>
				<div className="brands-container">
					{guitarCategories &&
						guitarCategories.map(({ id, img, categoryName }) => {
							return (
								<Link
									key={id}
									to="/products"
									onClick={() => {
										dispatch({ type: "CATEGORY", payload: categoryName });
									}}
								>
									<div key={id} className="brand-box">
										<img
											src={img}
											alt="guitar-pic"
											className="brand-logo img-main img-round"
										/>
										<Link to="/products">
											<h5 className="guitar-type">{categoryName}</h5>
										</Link>
									</div>
								</Link>
							);
						})}
				</div>
			</main>
		</>
	);
};
