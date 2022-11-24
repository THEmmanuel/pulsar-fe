import React from 'react';
import style from './PeerToPeerAd.module.css';

const PeerToPeerAd = () => {
	return (
		<div className={style.PeerToPeerAd}>
			<div className={style.PeerToPeerAdWrapper}>
				<span className={style.UserImage}>Image</span>
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
					Exchange rate
				</span>

				<div className={style.UserRateInfo}>
					<span>Available</span>
					<span>Limit</span>
				</div>

				<span className={style.UserPaymentInfo}>Payment type</span>

				<button className={style.UserAdButton}>
					View Ad
				</button>
			</div>
		</div>
	)
}

export default PeerToPeerAd;