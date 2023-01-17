import React, { useState } from 'react';
import style from './MainDropdown.module.css';
import arrowImage from '../../assets/arrowImage.svg';
import Select from 'react-select';

const MainDropdown = props => {
	const [selectedOption, setSelectedOption] = useState(props.options ? props.options[0] : null)

	const handleChange = selected => {
		setSelectedOption(selected)
	}

	return (
		<div className={style.MainDropdownContainer}>
			<span className={style.MainDropdownTitle}>
				{props.DropdownHeading}
			</span>

			<Select
				options={props.options}
				value = {selectedOption}
				onChange = {handleChange}
			/>
		</div>
	);
}

export default MainDropdown;