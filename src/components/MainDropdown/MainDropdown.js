import React from 'react';
import style from './MainDropdown.module.css';

const MainDropdown = () => {
	return (
		<div className={style.MainDropdownContainer}>
			<span className={style.MainDropdownTitle}>Text</span>

			<div className={style.MainDropdown}>
				<span>USDC</span>
				<span>USD Coin</span>
				<span>arrow</span>
			</div>
		</div>
	);
}

export default MainDropdown;