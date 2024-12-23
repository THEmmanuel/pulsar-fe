import React, { useContext } from 'react';
import style from './UserPage.module.css';
import UserStat from '../../components/UserStat/UserStat';
import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';
import UserReview from '../../components/UserReview/UserReview';
import { UserContext } from '../../contexts/UserContext';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import toast, { toastConfig } from 'react-simple-toasts';


toastConfig({ theme: 'dark' });

const UserPage = () => {
	const { walletBalances } = useContext(UserContext)

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

				<div className={style.UserBalance}>
					<span className={style.UserBalanceText}>
						${walletBalances?.find(item => item.token === "PULSAR")?.usdBalance ?? "USD Balance not available"}
					</span>

					<button
						className={style.UserBalanceButton}
						onClick={() => toast('DEMO! FUNDS Withdrawn')}
					>
						Withdraw
					</button>
				</div>


				<div className={style.UserStatsContainer}>
					<UserStat
						UserStatName='All Trades'
						UserStatValue='3680'
						UserStatColor='#D8EEE6'
					/>

					<UserStat
						UserStatName='30 days'
						UserStatValue='462'
						UserStatColor='#EED8D8'
					/>

					<UserStat
						UserStatName='Completion Rate'
						UserStatValue='99.2%'
						UserStatColor='#C3E2F0'
					/>

					<UserStat
						UserStatName='Avg pay time'
						UserStatValue='4.75 mins'
						UserStatColor='#EEE0CD'
					/>
				</div>

				<div className={style.UserAdsWrapper}>
					<div className={style.UserAdsContainer}>
						<span className={style.UserAdHeading}>
							{/* Buy */}
						</span>
					</div>



					<div className={style.UserAdsContainer}>
						<span className={style.UserAdHeading}>
							{/* Sell */}
						</span>
					</div>

					<div className={style.UserAdsContainer}>
						<span className={style.UserAdHeading}>
							{/* Reviews */}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserPage;