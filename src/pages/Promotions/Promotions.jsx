import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';

const GET_PROMOTIONS = 'api/promotions/';

export const Promotions = () => {
	const [promotions, setPromotions] = useState([]);

	const getPromotions = async () => {
		try {
			const response = await axios.get(GET_PROMOTIONS, { headers: { "Authorization": `Token ${localStorage.getItem('jwt')}` } });
			console.log(response?.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		getPromotions();
	}, []);

	const promotionArr = promotions;

	return (
		<div>
			{promotionArr.map((restaurant) => (
				<li key={restaurant.id}>{restaurant.name}</li>
			))}
		</div>
	)
}
