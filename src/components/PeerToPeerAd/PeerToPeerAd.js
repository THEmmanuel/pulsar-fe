import React from 'react';
import style from './PeerToPeerAd.module.css';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';


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


			<div>
				<div>
					<span>{props.rate}</span>
					<span>limit: {props.available}</span>

					<div>
						<span>
							1k orders
						</span>

						<div>
							<span>
								5
							</span>

							<span>
								star
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PeerToPeerAd;