import React from 'react';
import style from './PeerToPeerAd.module.css';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import starIcon from '../../assets/star.svg'


const PeerToPeerAd = props => {
	return (
		<div className={style.PeerToPeerAd}>
			<div className={style.PeerToPeerDetailsWrapper}>
				<div className={style.PeerToPeerUserInfo}>
					<div>
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

						<span>orders and stars</span>
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

				{props.rate} {props.fiatCurrency}


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
			</div>


			<div className={style.PeerToPeerDetailsWrapper}>
				<div className={style.PeerToPeerRateWrapper}>
					<span className={style.PeerToPeerRate}>
					</span>
				</div>
			</div>
		</div>
	)
}

export default PeerToPeerAd;