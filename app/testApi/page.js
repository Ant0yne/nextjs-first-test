"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const testApi = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://dumbstockapi.com/stock?exchanges=NYSE"
				);
				setData(response.data);
				setLoading(false);
			} catch (error) {
				console.error(error.response);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<ul>
						{data && data.map((item) => <li key={item.ticker}>{item.name}</li>)}
					</ul>
				</>
			)}
		</div>
	);
};

export default testApi;
