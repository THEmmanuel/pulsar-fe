import React from 'react';
import style from './PeerToPeerAd.module.css';

const PeerToPeerAd = props => {
	return (
		<div
			className={style.PeerToPeerAd}
			style={
				props.adType === 'buy' ?
					{
						backgroundColor: '#EEF9F6'
					} : {
						backgroundColor: '#F7E2E3'
					}}>

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
					{props.rate} USD/{props.token}
				</span>

				<div className={style.UserRateInfo}>
					<div className={style.UserLimitInfoWrapper}>
						<span className={style.UserLimitInfoText}>Available:</span>
						<span className={style.UserLimitInfo}>{props.available} {props.token}</span>
					</div>

					<div className={style.UserLimitInfoWrapper}>
						<span className={style.UserLimitInfoText}>Limit:</span>
						<span className={style.UserLimitInfo}>{props.lowest} - {props.highest} {props.token}</span>
					</div>
				</div>

				<span className={style.UserPaymentInfo}>{props.paymentMethod}</span>

				<button
					className={style.UserAdButton}
					style={
						props.adType === 'buy' ?
							{
								backgroundColor: '#C9EEE4'
							} : {
								backgroundColor: '#DCA1A1'
							}
					}
				>
					{props.adType === 'buy' ? `Buy ${props.token}` : `Sell ${props.token}`}
				</button>
			</div>
		</div>
	)
}

export default PeerToPeerAd;