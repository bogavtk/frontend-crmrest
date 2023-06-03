import React from 'react';
import cn from './Missing.module.css';

export const Missing = () => {
	return (
		<div className={cn.page404}>
			<h1 className={cn.title}>404</h1>
			<p className={cn.subtitle}>Извините, страница не найдена</p>
			<p className={cn.description}>
				К сожалению, запрашиваемая страница не существует. Попробуйте вернуться
				на предыдущую страницу или перейти на главную страницу.
			</p>
			<a href="/" className={cn.button}>
				Вернуться на главную
			</a>
		</div>
	)
}


