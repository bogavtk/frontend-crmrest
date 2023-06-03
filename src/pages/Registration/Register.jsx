import React, { useState } from 'react';
import cl from './Register.module.css';
import axios from '../../api/axios';


const LOGIN_URL = 'auth/users/';

export const Register = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(LOGIN_URL, {
				"user": {
					"email": email,
					"username": username,
					"password": password,
					"user_level": "owner",
				}
			})
			console.log(response?.data.user);
		} catch (err) {
			console.log(err.message);
		}
		setIsOpen(false);
	};



	return (
		<>
			<div className={cl.Modal} >
				<h2 className={cl.login__h2}>Регистрация</h2>
				<form className={cl.login__form} onSubmit={handleLogin}>
					<div className={cl.login__label}>
						<label htmlFor='email'>
							E-mail:
						</label>
						<input className={cl.login__input}
							type="mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className={cl.login__label}>
						<label htmlFor='username'>
							Username:
						</label>
						<input className={cl.login__input}
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)} />
					</div>
					<div className={cl.login__label}>
						<label htmlFor='password' >
							Password:
						</label>
						<input className={cl.login__input}
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)} />
					</div>
					<button className={cl.login__button} type="submit">Зарегистрироваться</button>
				</form>
			</div>
		</>
	);
}
