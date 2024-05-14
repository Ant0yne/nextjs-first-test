"use client";

import React from "react";
import { useState, useEffect } from "react";

const jeu = () => {
	const [number, setNumber] = useState(0);

	useEffect(() => {}, []);

	const handleNumber = (str) => {
		str === "incr"
			? setNumber((prevState) => prevState + 1)
			: setNumber((prevState) => prevState - 1);
	};

	return (
		<>
			<div>{number}</div>
			<button onClick={() => handleNumber("incr")}>Increment</button>
			<button onClick={() => handleNumber("decr")}>Decrement</button>
		</>
	);
};

export default jeu;
