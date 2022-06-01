import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./signup.css";

const Signup = () => {
	const navigate = useNavigate();
	const { setUser } = useAuth();
	const [userSignupData, setUserSignupData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const signupHandler = async (userDetails) => {
		const { firstName, lastName, email, password } = userDetails;
		try {
			const response = await axios.post("/api/auth/signup", {
				firstName,
				lastName,
				email,
				password,
			});
			localStorage.setItem("token", response.data.encodedToken);
			localStorage.setItem(
				"userDetails",
				JSON.stringify(response.data.createdUser)
			);
			setUser({
				token: response.data.encodedToken,
				userDetails: response.data.createdUser,
				isLoggedIn: true,
			});
			navigate("/");
		} catch (error) {
			console.error("while signing up", error);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		userSignupData.password === userSignupData.confirmPassword
			? signupHandler(userSignupData)
			: console.log("Password doest match");
	};
	return (
		<>
			<div className="signup-container">
				<form className="signup-form" onSubmit={submitHandler}>
					<div className="signup-form-heading">Sign up to Upbeat 🔐</div>
					<div className="signup-form-subheading">
						Please enter your details.
					</div>
					<div className="signup-form-inputs">
						<fieldset>
							<legend>First Name</legend>
							<input
								type="text"
								id="firstname"
								placeholder="First Name"
								name="firstname"
								required
								value={userSignupData.firstName}
								onChange={(e) =>
									setUserSignupData((prev) => ({
										...prev,
										firstName: e.target.value,
									}))
								}
							/>
						</fieldset>
						<fieldset>
							<legend>Last Name</legend>
							<input
								type="text"
								id="lastname"
								placeholder="Last Name"
								name="lastname"
								required
								value={userSignupData.lastName}
								onChange={(e) =>
									setUserSignupData((prev) => ({
										...prev,
										lastName: e.target.value,
									}))
								}
							/>
						</fieldset>
						<fieldset>
							<legend>Email</legend>
							<input
								type="email"
								id="email"
								placeholder="test@gmail.com"
								name="email"
								required
								value={userSignupData.email}
								onChange={(e) =>
									setUserSignupData((prev) => ({
										...prev,
										email: e.target.value,
									}))
								}
							/>
						</fieldset>
						<fieldset>
							<legend>Password</legend>
							<input
								type="password"
								id="password"
								placeholder="********"
								name="password"
								required
								value={userSignupData.password}
								onChange={(e) =>
									setUserSignupData((prev) => ({
										...prev,
										password: e.target.value,
									}))
								}
							/>
						</fieldset>
						<fieldset>
							<legend>Confirm Password</legend>
							<input
								type="password"
								id="confirmPassword"
								placeholder="********"
								name="confirmPassword"
								required
								value={userSignupData.confirmPassword}
								onChange={(e) =>
									setUserSignupData((prev) => ({
										...prev,
										confirmPassword: e.target.value,
									}))
								}
							/>
						</fieldset>
					</div>
					<div className="action-btn">
						<button className="signup-btn btn-dark">Sign Up</button>
					</div>
					<div className="signup-form-subheading">
						Already have an account?{" "}
						<Link to="/login">
							<span>
								<u>Login</u>
							</span>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};

export default Signup;
