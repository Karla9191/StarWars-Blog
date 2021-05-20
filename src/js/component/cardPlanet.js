import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { BsHeart } from "react-icons/bs";
import { Context } from "../store/appContext";

export const CardPlanet = ({ planet }) => {
	//console.log(props);
	const { store, actions } = useContext(Context);
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://pm1.narvii.com/6361/c338000011dddc976bc1e960bf83c6a04402b720_hq.jpg"
				/>
				<Card.Body>
					<Card.Title>Name: {planet.name}</Card.Title>
					<Card.Text>Population: {planet.population}</Card.Text>
					<Card.Text>Terrain: {planet.terrain}</Card.Text>
					<Link to="/">
						<Button variant="outline-primary">Learn more!</Button>
					</Link>
					<Button onClick={() => actions.setFavorites(planet.name)} variant="outline-warning">
						<BsHeart />
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};

CardPlanet.propTypes = {
	planet: PropTypes.object
};
