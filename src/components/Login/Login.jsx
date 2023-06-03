import React, { useState } from 'react';
import Modal from 'react-modal';
import cl from './Login.module.css';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const LOGIN_URL = 'auth/users/login/';

export const Login = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const navigate = useNavigate();

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(LOGIN_URL, {
				"user": {
					"email": email,
					"password": password
				}
			})
			localStorage.setItem('jwt', response?.data.user.token);
			navigate('/find');
		} catch (err) {
			console.log(err.message);
			
		}
		setIsOpen(false);
	};

	const bg = {
		overlay: {
			background: "rgba(0, 0, 0, 0.8)"
		}
	};

	return (
		<>
			<button className={cl.login__enter} onClick={() => setIsOpen(true)}>Вход для владельцев</button>
			<Modal className={cl.Modal} isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={bg}>
				<h2 className={cl.login__h2}>Вход для владельцев</h2>
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
						<label htmlFor='password' >
							Password:
						</label>
						<input className={cl.login__input}
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)} />
					</div>
					<button className={cl.login__button} type="submit">Войти</button>
				</form>
			</Modal>
		</>
	);
}
