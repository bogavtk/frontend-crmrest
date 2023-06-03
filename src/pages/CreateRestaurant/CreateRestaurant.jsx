import React, { useState } from 'react';
import axios from '../../api/axios';

const CREATERESTAURANT = 'api/create_restaurant/';

export const CreateRestaurant = () => {
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(CREATERESTAURANT, { name: name, address: address }, {
				headers: { "Authorization": `Token ${localStorage.getItem('jwt')}` }
			})
			console.log(response?.data.user.success);
		} catch (err) {
			console.log(err.message);
		}
	}


	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">
					Название вашего ресторана:
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)} />
				</label>
				<label htmlFor="name">
					Адрес вашего ресторана:
					<input
						type="text"
						value={address}
						onChange={(e) => setAddress(e.target.value)} />
				</label>
				<button type='submit'>Создать ресторан</button>
			</form>
		</div>
	)
}