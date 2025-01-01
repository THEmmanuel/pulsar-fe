import React from 'react';
import style from './PeerToPeerAd.module.css';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import starIcon from '../../assets/star.svg'


const PeerToPeerAd = props => {
	return (
		<div className={style.PeerToPeerAd}>
			<div className={style.PeerToPeerUserInfo}>
				<div className={style.PeerToPeerUser}>
					<img
						src=""
						alt=""
						className={style.PeerToPeerUserImage}
					/>

					<span className={style.PeerToPeerUsername}>
						{props.username}
					</span>
				</div>

				<div className={style.PeerToPeerUserStats}>
					<span className={style.PeerToPeerCompletionRate}>
						100% completion Rate
					</span>

					<div className={style.PeerToPeerOrdersAndStats}>
						<span>1k orders</span>
						<div className={style.PeerToPeerRating}>
							<span className={style.PeerToPeerRatingNumber}>
								5
							</span>

							<img
								src={starIcon}
								alt=""
								className={style.PeerToPeerRatingStar}
							/>
						</div>
					</div>
				</div>
			</div>






			<div className={style.PeerToPeerRate}>
				{props.rate}
				{props.fiatCurrency}
			</div>







			<span className={style.PeerToPeerLimit}>
				limit: {props.lowestOrder} - {props.highestOrder}
			</span>


			<div className={style.PeerToPeerDetails}>
				<div className={style.PeerToPeerPaymentMethods}>
					{props.paymentMethod.map(
						paymentMethod =>
							<span className={style.PeerToPeerPaymentMethod}>
								{paymentMethod}
							</span>
					)
					}
				</div>
			</div>

			<div className={style.PeerToPeerAdActionButtonWrapper}>
				<button className={style.PeerToPeerAdActionButton}>
					{props.adType === 'buy' ? `BUY TOKEN` : props.adType === 'sell' ? 'SELL TOKEN' : ''}
				</button>
			</div>
		</div>
	)
}

export default PeerToPeerAd;