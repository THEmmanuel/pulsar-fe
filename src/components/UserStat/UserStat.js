import React from 'react';
import style from './UserStat.module.css';

const UserStat = props => {
	return (
		<div className={style.UserStatContainer} style={{
			backgroundColor: `${props.UserStatColor}`
		}}>
			<span className={style.UserStatName}>{props.UserStatName}</span>
			<span className={style.UserStatValue}>{props.UserStatValue}</span>
		</div>
	)
}

export default UserStat;