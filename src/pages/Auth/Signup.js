import React from "react";
import "./signup.css";

const Signup = () => {
	return (
		<>
			<div class="signup-container">
				<form class="signup-form">
					<div class="signup-form-heading">SIGN UP</div>
					<div class="signup-form-subheading">
						Please enter your details.
					</div>
					<div class="signup-form-inputs">
						<input type="text" placeholder="Name" required />
						<input type="text" placeholder="Last Name" required />
						<input type="email" placeholder="Email" required />
						<input
							type="password"
							placeholder="Password"
							required
						/>
					</div>
					<div class="action-btn">
						<button class="signup-btn btn-dark">Sign Up</button>
					</div>
					<div class="signup-form-subheading">
						Already have an account?{" "}
						<a href="../login/login.html">
							<u>Login</u>
						</a>
					</div>
				</form>
			</div>
		</>
	);
};

export default Signup;
