import React from 'react';
import style from './MainDropdown.module.css';
import arrowImage from '../../assets/arrowImage.svg';
import Select from 'react-select';

const MainDropdown = props => {
	return (
		<div className={style.MainDropdownContainer}>
			<span className={style.MainDropdownTitle}>
				{props.DropdownHeading}
			</span>

		<Select
			options = {props.options}
		/>
			{/* <div className={style.MainDropdown}>
				<div className={style.DropDownDetails}>
					<span className={style.DropdownPrimaryText}>
						{props.PrimaryText}
					</span>

					<span className={style.DropdownSecondaryText}>
						{props.SecondaryText}
					</span>
				</div>
				<img src={arrowImage} alt="" />
			</div> */}
		</div>
	);
}

export default MainDropdown;