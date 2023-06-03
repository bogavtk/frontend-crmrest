import { Login } from '../Login/Login';
import cl from './Header.module.css';
import cn from '../../index.module.css';
import { LoginWorker } from '../LoginWorker/Login';
import classNames from 'classnames';

export const Header = () => {
	return (
		<header className={cl.header}>
			<div className={classNames(cn.container, cl.header__wrapper)}>
				<h1 className={cl.header__h1}>RestCRM</h1>
				<div className={cl.header__buttons}>
					<Login />
					<LoginWorker />
				</div>
			</div>
		</header>
	)
}

