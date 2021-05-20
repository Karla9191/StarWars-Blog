import React, { useEffect, useContext } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { BsHeart } from "react-icons/bs";
import { CardPlanet } from "../component/cardPlanet";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<Jumbotron>
			<ul className="scrolling">
				{store.planetsList.map((item, index) => {
					return (
						<div className="container-card" key={index}>
							<CardPlanet planet={item} />
						</div>
					);
				})}
			</ul>
		</Jumbotron>
	);
};