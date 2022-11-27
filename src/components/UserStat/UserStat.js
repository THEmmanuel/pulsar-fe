import React from 'react';
import style from './UserStat.module.css';

const UserStat = () => {
	return (
		<div className={style.UserStatContainer}>
			<span className={style.UserStatName}>Stat Name</span>
			<span className={style.UserStatValue}>Stat Number</span>
		</div>
	)
}

export default UserStat;