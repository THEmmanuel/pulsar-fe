import React from 'react';
import style from './PeerToPeerAd.module.css';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import starIcon from '../../assets/star.svg'


const PeerToPeerAd = props => {
	return (
		<div className={style.PeerToPeerAd}>
			<div className={style.PeerToPeerDetailsWrapper}>
				<div className={style.PeerToPeerUserInfo}>
					<img
						src=""
						alt=""
						className={style.PeerToPeerUserImage}
					/>

					<span className={style.PeerToPeerUsername}>
						{props.username}
					</span>
				</div>

				<div className={style.PeerToPeerDetails}>
					<span className={style.PeerToPeerCompletionRate}>
						100% completion Rate
					</span>
					<div>
						<span>{props.paymentMethod}</span>
					</div>
				</div>
			</div>


			<div className={style.PeerToPeerDetailsWrapper}>
				<div className={style.PeerToPeerRateWrapper}>
					<span className={style.PeerToPeerRate}>
						{props.rate}
					</span>

					<span className={style.PeerToPeerLimit}>
						limit: {props.available}
					</span>
				</div>

				<div className={style.PeerToPeerOrderStats}>
					<span>
						1k orders
					</span>

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
	)
}

export default PeerToPeerAd;