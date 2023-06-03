import React, { useState } from 'react';
import Modal from 'react-modal';
import cl from './Login.module.css';

Modal.setAppElement('#root');

export const LoginWorker = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (event) => {
		event.preventDefault();
		console.log(`Logging in with username ${username} and password ${password}`);
		setUsername('');
		setPassword('');
		setIsOpen(false);
	};

	const bg = {
		overlay: {
			background: "rgba(0, 0, 0, 0.8)"
		}
	};

	return (
		<>
			<button className={cl.login__enter} onClick={() => setIsOpen(true)}>Вход для работников</button>
			<Modal className={cl.Modal} isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={bg}>
				<h2 className={cl.login__h2}>Вход для работников</h2>
				<form className={cl.login__form} onSubmit={handleLogin}>
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
					<button className={cl.login__button} type="submit">Войти</button>
				</form>
			</Modal>
		</>
	);
}
