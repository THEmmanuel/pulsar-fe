import React from 'react';
import { useUser } from '@clerk/clerk-react';
import style from './UserInformation.module.css';

const UserInformation = props => {
	const { user } = useUser();

	return (
		<div className={style.UserInformationWrapper}>
			<div className={style.UserInformation}>
				<img src={user ? user.profileImageUrl : 'loading'} alt="" className={style.UserImage} />
				<div className={style.UserInformationText}>
					<span className={style.UserName}>{props.username}</span>
					<span>Limit: {props.lowestOrder} - {props.highestOrder}</span>
				</div>
			</div>

			<div className={style.UserInformationExtra}>
				<span>Available: {props.available}</span>
				<span>{props.paymentMethod}</span>
			</div>
		</div>
	)
};

export default UserInformation