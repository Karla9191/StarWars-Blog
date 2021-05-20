import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image, DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavbarV2= () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar bg="dark">
			<Navbar.Brand>
				<Link to="/">
					<Image
						src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
						// width="60"
						height="40"
						alt="Star Wars"
					/>
				</Link>
			</Navbar.Brand>

			<Nav className="mr-auto">
				<Link className="nav-link" to="/cardPlanet">
					Planetas
				</Link>
				{/*<Link className="nav-link" to="/characters">
					Personajes
				</Link>*/}
			</Nav>

			<DropdownButton id="dropdown-basic-button" title={`Favoritos ${store.favorites.length}`}>
				{store.favorites.map((item, index) => {
					return (
						<Dropdown.Item key={index} href="#/action-1">
							{item}
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
		</Navbar>
	);
};
