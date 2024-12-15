import React, { useState } from 'react';
import style from './MainDropdown.module.css';
import arrowImage from '../../assets/arrowImage.svg';
import Select from 'react-select';

const MainDropdown = ({ DropdownHeading, options, onSelect, name }) => {
	const [selectedOption, setSelectedOption] = useState(options ? options[0] : null)

	const handleChange = selected => {
		setSelectedOption(selected);
		onSelect({ name: name, value: selected.value });
	}


	return (
		<div className={style.MainDropdownContainer}>
			<span className={style.MainDropdownTitle}>
				{DropdownHeading}
			</span>

			<Select
				options={options}
				value={selectedOption}
				onChange={handleChange}
			// className={style.MainDropdown}
			/>
		</div>
	);
}

export default MainDropdown;