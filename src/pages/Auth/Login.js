import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
	return (
		<>
			<div className="login-container">
				<form className="login-form">
					<div className="login-form-heading">LOGIN</div>
					<div className="login-form-subheading">
						Please enter your login details.
					</div>
					<div className="login-form-inputs">
						<input type="email" placeholder="Email" required />
						<input type="password" placeholder="Password" required />
					</div>
					<div className="action-btn">
						<button className="login-btn btn-dark">Login</button>
					</div>
					<div className="login-form-subheading">
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
