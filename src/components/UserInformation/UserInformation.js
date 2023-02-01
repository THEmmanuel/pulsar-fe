import React from 'react';
import { useUser } from '@clerk/clerk-react';
import style from './UserInformation.module.css';

const UserInformation = props => {
	const { user } = useUser();

	return (
		<div className={style.UserInformationWrapper}>
			<div className={style.UserInformation}>
				<img src={user.profileImageUrl} alt="" className={style.UserImage} />
				<div className={style.UserInformationText}>
					<span>{props.username}</span>
					<span>{props.lowestOrder} - {props.highestOrder}</span>
				</div>
			</div>

			<div className={style.UserInformationExtra}>
				<span>available</span>
				<span>method</span>
			</div>
		</div>
	)
};

export default UserInformation