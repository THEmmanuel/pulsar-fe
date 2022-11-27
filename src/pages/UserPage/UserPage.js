import React from 'react';
import style from './UserPage.module.css';
import UserStat from '../../components/UserStat/UserStat';

const UserPage = () => {
	return (
		<div className={style.UserPage}>
			<div className={style.UserDetails}>
				<span>
					User Image
				</span>

				<span>User Name</span>
				<span>Join date</span>
			</div>

			<div className={style.UserStatsContainer}>
				<UserStat/>
				<UserStat/>
				<UserStat/>
				<UserStat/>
			</div>
		</div>
	)
}

export default UserPage;