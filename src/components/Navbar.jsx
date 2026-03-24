import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

export const Navbar = () => {
const {store, dispatch} =useGlobalReducer()
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/AddContact">
						<button className="btn btn-primary">Add new Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};