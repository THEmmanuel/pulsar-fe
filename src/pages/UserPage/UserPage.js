import React from 'react';
import style from './UserPage.module.css';
import UserStat from '../../components/UserStat/UserStat';
import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';
import UserReview from '../../components/UserReview/UserReview';

const UserPage = () => {
	return (
		<div className={style.UserPage}>
			<div className={style.UserPageWrapper}>
				<div className={style.UserDetailsContainer}>
					<span className={style.UserImage}>
						User Image
					</span>

					<div className={style.UserNameDetails}>
						<span className={style.UserName}>User Name</span>
						<span className={style.UserJoinDate}>Join date</span>
					</div>
				</div>

				<div className={style.UserStatsContainer}>
					<UserStat
						UserStatName='All Trades'
						UserStatValue='3680'
					/>

					<UserStat
						UserStatName='30 days'
						UserStatValue='462'
					/>

					<UserStat
						UserStatName='Completion Rate'
						UserStatValue='99.2%'
					/>

					<UserStat
						UserStatName='Avg pay time'
						UserStatValue='4.75 mins'
					/>
				</div>

				<div className={style.UserAdsWrapper}>
					<div className={style.UserAdsContainer}>
						<span className={style.UserAdHeading}>
							Buy
						</span>

						<div className={style.UserAds}>
							<PeerToPeerAd />
							<PeerToPeerAd />
						</div>
					</div>

					<div className={style.UserAdsContainer}>
						<span className={style.UserAdHeading}>
							Sell
						</span>

						<div className={style.UserAds}>
							<PeerToPeerAd />
							<PeerToPeerAd />
						</div>
					</div>

					<div className={style.UserAdsContainer}>
						<span className={style.UserAdHeading}>
							Reviews
						</span>

						<div>
							<UserReview />
							<UserReview />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserPage;