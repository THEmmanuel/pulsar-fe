import React from 'react';
import style from './PeerToPeerAd.module.css';

const PeerToPeerAd = () => {
	return (
		<div className={style.PeerToPeerAd}>
			<div className={style.PeerToPeerAdWrapper}>
				<div className={style.UserImage}>
					Image
				</div>
				<div className={style.UserInfo}>
					<span className={style.UserName}>
						User name
					</span>

					<div className={style.UserOrderInfo}>
						<span className={style.UserOrderNumber}>
							Order number
						</span>

						<span className={style.UserCompletionRate}>
							Completion rate
						</span>
					</div>
				</div>

				<span className={style.UserExchangeRate}>
					0.99 USD/USDC
				</span>

				<div className={style.UserRateInfo}>
					<div className={style.UserLimitInfoWrapper}>
						<span className={style.UserLimitInfoText}>Available:</span>
						<span className={style.UserLimitInfo}>4678.4USDC</span>
					</div>

					<div className={style.UserLimitInfoWrapper}>
						<span className={style.UserLimitInfoText}>Limit:</span>
						<span className={style.UserLimitInfo}>4678.4USDC</span>
					</div>
				</div>

				<span className={style.UserPaymentInfo}>Payment type</span>

				<button className={style.UserAdButton}>
					Buy USDC
				</button>
			</div>
		</div>
	)
}

export default PeerToPeerAd;