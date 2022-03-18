import React from "react";
import "./Footer.css";

export function Footer() {
	return (
		<div>
			<footer>
				<div class="footer-container">
					<div class="footer-left">
						<a href="">Our Stores</a>
						<a href="">Career</a>
						<a href="">Support</a>
						<a href="">Marketing</a>
					</div>
					<div class="footer-mid">
						<a href="">Send Feedback</a>
						<a href="">Reviews</a>
						<a href="">Privacy Policy</a>
						<a href="">Contact Us</a>
					</div>
					<div class="footer-right">
						<i class="fa fa-instagram icon-footer"></i>
						<i class="fa fa-twitter icon-footer"></i>
						<i class="fa fa-facebook icon-footer"></i>
					</div>
				</div>
			</footer>
		</div>
	);
}
