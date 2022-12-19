import React from 'react';
import style from './UserAccountDetails.module.css';

const UserAccountDetails = () => {
	return (
		<div className={style.UserInformationContentWrapper}>
			<div>
				<h4>Payment method</h4>
				<span className={style.PaymentMethod}>Bank transfer</span>
			</div>
			<div className={style.BuyPriceInformationWrapper}>
				<div className={style.BuyPriceInformation}>
					<span className={style.BuyPriceTitle}>Bank name</span>
					<span className={style.BuyPriceValue}>Zenith bank</span>
				</div>

				<div className={style.BuyPriceInformation}>
					<span className={style.BuyPriceTitle}>Account Name</span>
					<span className={style.BuyPriceValue}>John Doe</span>
				</div>

				<div className={style.BuyPriceInformation}>
					<span className={style.BuyPriceTitle}>Account Number</span>
					<span className={style.BuyPriceValue}>2207656876</span>
				</div>

				<div className={style.BuyPriceInformation}>
					<span className={style.BuyPriceTitle}>Amount To Transfer</span>
					<span className={style.BuyPriceValue}>$602.75</span>
				</div>
			</div>
		</div>
	)
}

export default UserAccountDetails;