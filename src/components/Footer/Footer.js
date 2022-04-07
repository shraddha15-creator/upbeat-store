import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
	return (
		<div>
			<footer>
				<div className="footer-container">
					<div className="footer-left">
						<Link to="">Our Stores</Link>
						<Link to="">Career</Link>
						<Link to="">Support</Link>
						<Link to="">Marketing</Link>
					</div>
					<div className="footer-mid">
						<Link to="">Send Feedback</Link>
						<Link to="">Reviews</Link>
						<Link to="">Privacy Policy</Link>
						<Link to="">Contact Us</Link>
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
