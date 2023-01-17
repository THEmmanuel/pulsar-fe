import React, { useState } from 'react';
import style from './MainDropdown.module.css';
import arrowImage from '../../assets/arrowImage.svg';
import Select from 'react-select';

const MainDropdown = ({DropdownHeading, options, onSelect}) => {
	const [selectedOption, setSelectedOption] = useState(options ? options[0] : null)

	const handleChange = selected => {
		setSelectedOption(selected);
		onSelect(selected.value)
	}

	return (
		<div className={style.MainDropdownContainer}>
			<span className={style.MainDropdownTitle}>
				{DropdownHeading}
			</span>

			<Select
				options={options}
				value = {selectedOption}
				onChange = {handleChange}
			/>
		</div>
	);
}

export default MainDropdown;