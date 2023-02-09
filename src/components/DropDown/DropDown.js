import React, { useState } from 'react';
import style from './DropDown.module.css';
import Select from 'react-select';

const Dropdown = (props) => {
	const [selectedOption, setSelectedOption] = useState(props.options ? props.options[0] : null)

	const handleChange = selected => {
		setSelectedOption(selected);
		props.onSelect({name: props.name, value: selected.value})
	}

	return (
		<div>
			<span>
				{props.DropdownHeading}
			</span>

			<Select
				options={props.options}
				value = {selectedOption}
				onChange = {handleChange}
			/>
		</div>
	)
}

export default Dropdown;