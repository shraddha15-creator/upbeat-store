import React from "react";
import "./Footer.css";

export function Footer() {
	return (
		<div>
			<footer>
				<div className="footer-container">
					<div className="footer-left">
						<a href="">Our Stores</a>
						<a href="">Career</a>
						<a href="">Support</a>
						<a href="">Marketing</a>
					</div>
					<div className="footer-mid">
						<a href="">Send Feedback</a>
						<a href="">Reviews</a>
						<a href="">Privacy Policy</a>
						<a href="">Contact Us</a>
					</div>
					<div className="footer-right">
						<i className="fa fa-instagram icon-footer"></i>
						<i className="fa fa-twitter icon-footer"></i>
						<i className="fa fa-facebook icon-footer"></i>
					</div>
				</div>
			</footer>
		</div>
	);
}
