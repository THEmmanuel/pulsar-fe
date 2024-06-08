import React from 'react';
import style from './PeerToPeerAd.module.css';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';


const PeerToPeerAd = props => {
	return (
		<div
			className={style.PeerToPeerAd}
			style={
				props.adType === 'buy' ?
					{
						backgroundColor: '#232323'
					} : {
						backgroundColor: '#F7E2E3'
					}}>

			<div className={style.PeerToPeerAdWrapper}>
				<div className={style.UserInfo}>
					<span className={style.UserName}>
						{props.username}
					</span>
				</div>

				<span className={style.UserExchangeRate}>
					{props.rate} USD/{props.token}
				</span>

				<span className={style.UserPaymentInfo}>{props.paymentMethod}</span>

				<div className={style.UserRateInfo}>
					<div className={style.UserLimitInfoWrapper}>
						<span className={style.UserLimitInfoText}>Limit:</span>
						<span className={style.UserLimitInfo}>{props.lowest} - {props.highest} {props.token}</span>
					</div>
				</div>

				<div className={style.UserRateInfo}>
					<div className={style.UserLimitInfoWrapper}>
						<div className={style.UserInfo}>
							<span className={style.UserLimitInfo}>{props.completionRate}% completion rate</span>
							<span className={style.UserLimitInfo}>1k orders</span>
							<span className={style.UserLimitInfo}>5 stars</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PeerToPeerAd;