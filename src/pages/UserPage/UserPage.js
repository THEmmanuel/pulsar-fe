import React from 'react';
import style from './UserPage.module.css';
import UserStat from '../../components/UserStat/UserStat';

const UserPage = () => {
	return (
		<div className={style.UserPage}>
			<div className={style.UserDetailsContainer}>
				<span className={style.UserImage}>
					User Image
				</span>

				<div className={style.UserNameDetails}>
					<span className={style.UserName}>User Name</span>
					<span className={style.UserJoinDate}>Join date</span>
				</div>
			</div>

			<div className={style.UserStatsContainer}>
				<UserStat />
				<UserStat />
				<UserStat />
				<UserStat />
			</div>
		</div>
	)
}

export default UserPage;