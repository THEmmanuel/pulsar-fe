import React from 'react';
import style from './ChainCard.module.css';

const ChainCard = (props) => {
	return (
		<div
			className={style.ChainCardWrapper}
			onClick={props.click}
		>
			<img
				src={props.ChainImage}
				alt="chain"
				className={style.ChainImage}
			/>

			<span>{props.ChainName}</span>
		</div>
	)
}

export default ChainCard;