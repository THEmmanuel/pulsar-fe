import React from 'react';
import style from './MainDropdown.module.css';
import arrowImage from '../../assets/arrowImage.svg';

const MainDropdown = props => {
	return (
		<div className={style.MainDropdownContainer}>
			<span className={style.MainDropdownTitle}>
				{props.DropdownHeading}
			</span>

			<div className={style.MainDropdown}>
				<div className={style.DropDownDetails}>
					<span className={style.DropdownPrimaryText}>
						{props.PrimaryText}
					</span>

					<span className={style.DropdownSecondaryText}>
						{props.SecondaryText}
					</span>
				</div>
				<img src={arrowImage} alt="" />
			</div>
		</div>
	);
}

export default MainDropdown;