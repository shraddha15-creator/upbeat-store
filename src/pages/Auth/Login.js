import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
	return (
		<>
			<div class="login-container">
				<form class="login-form">
					<div class="login-form-heading">LOGIN</div>
					<div class="login-form-subheading">
						Please enter your login details.
					</div>
					<div class="login-form-inputs">
						<input type="email" placeholder="Email" required />
						<input
							type="password"
							placeholder="Password"
							required
						/>
					</div>
					<div class="action-btn">
						<button class="login-btn btn-dark">Login</button>
					</div>
					<div class="login-form-subheading">
						Don't have an account?{" "}
						<Link to="/signup">
							<a href="../signup/signup.html">
								<u>Sign up</u>
							</a>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
