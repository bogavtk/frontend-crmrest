import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import cl from './RestaurantsInfo.module.css';


const GET_RESTAURANTS = 'api/create_restaurant/';

export const RestaurantsInfo = () => {
	const [restaurants, setRestaurants] = useState([]);

	const getRestaurants = async () => {
		try {
			const response = await axios.get(GET_RESTAURANTS, { headers: { "Authorization": `Token ${localStorage.getItem('jwt')}` } });
			setRestaurants(response?.data.user.restaurants);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		getRestaurants();
	}, []);

	const restaurantArr = restaurants;
	console.log(restaurantArr);

	return (
		<>
			<table className={cl.restaurant_table}>
				<thead>
					<tr>
						<th>Название ресторана</th>
						<th>Адрес ресторана</th>
						<th>ID</th>
					</tr>
				</thead>
				<tbody>
					{restaurantArr.map((restaurant) => (
						<tr className={cl.restaurant_item} key={restaurant.id}>
							<td>{restaurant.name}</td>
							<td>{restaurant.address}</td>
							<td>{restaurant.id}</td>
						</tr>
					))}
				</tbody>
				<div className={cl.create_rest}>
					<Link to="/create">Создать новый ресторан</Link>
				</div>
			</table>

		</>
	)
}
