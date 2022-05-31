import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./login.css";

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || "/";
	const { setUser } = useAuth();
	const [userLoginData, setUserLoginData] = useState({
		email: "",
		password: "",
	});

	const loginHandler = async (e, email, password) => {
		e.preventDefault();
		setUserLoginData({
			email: email,
			password: password,
		});

		try {
			const response = await axios.post("/api/auth/login", { email, password });
			localStorage.setItem(
				"userDetails",
				JSON.stringify(response.data.foundUser)
			);
			localStorage.setItem("token", response.data.encodedToken);
			setUser({
				userDetails: response.data.foundUser,
				token: response.data.encodedToken,
				isLoggedIn: true,
			});
			navigate(from, { replace: true });
		} catch (error) {
			console.error("Error while login", error);
		}
	};
	return (
		<>
			<div className="login-container">
				<form
					className="login-form"
					onSubmit={(e) =>
						loginHandler(e, userLoginData.email, userLoginData.password)
					}
				>
					<div className="login-form-heading">LOGIN</div>
					<div className="login-form-subheading">
						Please enter your login details.
					</div>
					<div className="login-form-inputs">
						<fieldset>
							<legend>Email</legend>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="test@gmail.com"
								required
								value={userLoginData.email}
								onChange={(e) => {
									setUserLoginData((prev) => ({
										...prev,
										email: e.target.value,
									}));
								}}
							/>
						</fieldset>
						<fieldset>
							<legend>Password</legend>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="********"
								required
								value={userLoginData.password}
								onChange={(e) => {
									setUserLoginData((prev) => ({
										...prev,
										password: e.target.value,
									}));
								}}
							/>
						</fieldset>
					</div>
					<div className="action-btn">
						<button className="login-page-btn btn-light" type="submit">
							Login
						</button>
					</div>
					<div className="action-btn">
						<button
							className="login-page-btn btn-dark"
							onClick={(e) =>
								loginHandler(e, "adarshbalika@gmail.com", "adarshbalika")
							}
						>
							Login with Test Account
						</button>
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
