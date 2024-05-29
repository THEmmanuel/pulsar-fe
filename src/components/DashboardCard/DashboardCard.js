import React from 'react';
import style from './DashboardCard.module.css';


const DashboardCard = props => {
	return (
		<div className={style.DashboardCard}
			onClick={() => props.click()}
		>
			<img
				className={style.DashboardCardIcon}
				src={props.icon}
				alt="" />
			<span className={style.DashboardCardTitle}>{props.title}</span>
			<span className={style.DashboardCardDescription}>{props.description}</span>
		</div>
	);
}

export default DashboardCard;