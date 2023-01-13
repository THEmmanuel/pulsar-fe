import React from 'react';
import style from './PrimaryCTA.module.css';

const PrimaryCTA = props => {
	return (
		<button className={style.PrimaryCTA}>
			{props.ButtonText}
		</button>
	);
}

export default PrimaryCTA ;