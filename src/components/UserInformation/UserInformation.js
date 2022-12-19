import React from 'react';
import style from './UserInformation.module.css';

const UserInformation = () => {
	return (
		<div className={style.UserInformationWrapper}>
			<div className={style.UserInformation}>
				<span>image</span>
				<div className={style.UserInformationText}>
					<span>name</span>
					<span>limit</span>
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