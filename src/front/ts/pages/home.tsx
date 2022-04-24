import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/P_home.scss";
import reactTsImg from "../../img/react-ts.png";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello React-ts!!</h1>
			<p>
				<img src={reactTsImg} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
		</div>
	);
};
