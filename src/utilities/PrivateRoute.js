import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { token } from "./token";

const encodedToken = token();

const PrivateRoute = ({ children }) => {
	const location = useLocation();
	return encodedToken && encodedToken ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location?.pathname }} replace />
	);
};

export default PrivateRoute;
