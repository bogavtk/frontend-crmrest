import { Header } from '../../components/Header/Header';
import cl from './Home.module.css';
import cn from '../../index.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<div className={cl.home}>
			<Header />
			<div className={classNames(cn.container, cl.home__wrapper)}>
				<div className={cl.home__left}>
					<h2>Добро пожаловать в систему лояльности нашего ресторана!</h2>
					<p> Мы хотим подарить Вам не только вкусную еду, но и возможность получать бонусы за каждый Ваш визит к нам.</p>
					<p>А еще, если Вы станете участником нашей программы лояльности, мы будем радовать Вас уникальными предложениями, которые недоступны другим посетителям. Также мы будем держать Вас в курсе всех наших новинок и событий.</p>
					<h3>Так что не откладывайте регистрацию в нашей системе лояльности на потом и начинайте получать бонусы уже сегодня! Ведь у нас всегда рады видеть наших постоянных гостей и делать Ваше посещение нашего ресторана еще более приятным.</h3>
				</div>
				<div className={cl.reg_wrapper}>
					<Link to="/register" className={cl.reg_link}>Зарегистрировать ресторан</Link>
				</div>
			</div>
		</div>
	)
}

