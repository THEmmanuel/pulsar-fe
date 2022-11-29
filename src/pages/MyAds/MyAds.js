import React from 'react';
import style from './MyAds.module.css';

import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';

const MyAds = () => {
	return (
		<div className={style.MyAdPage}>
			<div className={style.MyAdsWrapper}>
				<div className={style.MyAdsContainer}>
					<span className={style.MyAdsHeading}>
						Buy
					</span>

					<PeerToPeerAd adType='buy' />
					<PeerToPeerAd adType='buy' />
					<PeerToPeerAd adType='buy' />
					<PeerToPeerAd adType='buy' />
					<PeerToPeerAd adType='buy' />

				</div>

				<div className={style.MyAdsContainer}>
					<span className={style.MyAdsHeading}>
						Sell
					</span>

					<PeerToPeerAd adType='sell' />
					<PeerToPeerAd adType='sell' />
					<PeerToPeerAd adType='sell' />
					<PeerToPeerAd adType='sell' />
					<PeerToPeerAd adType='sell' />
				</div>
			</div>
		</div>
	);
}

export default MyAds;