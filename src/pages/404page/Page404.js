import React from "react";
import "./page404.css";
import ErrorImg from "../../assets/error.png";

export const Page404 = () => {
	return (
		<div className="error-page-conatiner">
			<img src={ErrorImg} alt="404-page" className="error-img" />
		</div>
	);
};
