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
					<UserStat />
					<UserStat />
					<UserStat />
					<UserStat />
				</div>

				<div className={style.UserAdsWrapper}>
					<div>
						<span>
							Buy
						</span>

						<div>
							<PeerToPeerAd />
						</div>
					</div>

					<div>
						<span>
							Sell
						</span>
						<PeerToPeerAd />
					</div>

					<div>
						<span>
							Reviews
						</span>

						<div>
							<UserReview />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserPage;