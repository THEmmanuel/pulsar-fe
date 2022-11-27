import React from 'react';
import style from './UserReview.module.css';

const UserReview = () => {
	return (
		<div className={style.UserReviewWrapper}>
			<span className={style.UserReviewName}>
				User name
			</span>

			<span className={style.UserReviewDate}>
				User Date
			</span>

			<span className={style.UserPaymentMethod}>
				Payment Method
			</span>

			<span className={style.UserReviewText}>
				Review
			</span>

			<span>
				Review Type
			</span>
		</div>
	)
}

export default UserReview;