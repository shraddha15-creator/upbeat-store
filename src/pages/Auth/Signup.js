import React from "react";
import "./signup.css";

const Signup = () => {
	return (
		<>
			<div className="signup-container">
				<form className="signup-form">
					<div className="signup-form-heading">SIGN UP</div>
					<div className="signup-form-subheading">
						Please enter your details.
					</div>
					<div className="signup-form-inputs">
						<input type="text" placeholder="Name" required />
						<input type="text" placeholder="Last Name" required />
						<input type="email" placeholder="Email" required />
						<input type="password" placeholder="Password" required />
					</div>
					<div className="action-btn">
						<button className="signup-btn btn-dark">Sign Up</button>
					</div>
					<div className="signup-form-subheading">
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
