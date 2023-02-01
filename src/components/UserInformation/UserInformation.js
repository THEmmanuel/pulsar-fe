import React from 'react';
import style from './UserInformation.module.css';

const UserInformation = props => {
	return (
		<div className={style.UserInformationWrapper}>
			<div className={style.UserInformation}>
				<span>image</span>
				<div className={style.UserInformationText}>
					<span>{props.name}</span>
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