import React from 'react';
import style from './MobileBottomNav.module.css';
import { Link } from 'react-router-dom';

import dashboardIcon from '../../assets/dashboard.svg';
import p2pIcon from '../../assets/peertopeer.svg';
import walletsIcon from '../../assets/wallets.svg';
import adsIcon from '../../assets/ads.svg';
import profileIcon from '../../assets/profile.svg';



const MobileBottomNav = () => {
	return (
		<div className={style.MobileBottomNav}>
			<Link to='/home'>
				<div className={style.NavItemWrapper}>
					<img
						src={dashboardIcon}
						alt=""
						className={style.NavItemIcon}
					/>
					<span className={style.NavItemText}>
						Home
					</span>
				</div>
			</Link>

			<Link to='/p2p/buy'>
				<div className={style.NavItemWrapper}>
					<img
						src={p2pIcon}
						alt=""
						className={style.NavItemIcon}
					/>
					<span className={style.NavItemText}>
						P2P
					</span>
				</div>
			</Link>

			<Link to='/wallets'>
				<div className={style.NavItemWrapper}>
					<img
						src={walletsIcon}
						alt=""
						className={style.NavItemIcon}
					/>
					<span className={style.NavItemText}>
						Wallet
					</span>
				</div>
			</Link>

			<Link to='/my-ads'>
				<div className={style.NavItemWrapper}>
					<img
						src={adsIcon}
						alt=""
						className={style.NavItemIcon}
					/>
					<span className={style.NavItemText}>
						Ads
					</span>
				</div>
			</Link>

			<Link to='/user-page'>
				<div className={style.NavItemWrapper}>
					<img
						src={profileIcon}
						alt=""
						className={style.NavItemIcon}
					/>
					<span className={style.NavItemText}>
						Profile
					</span>
				</div>
			</Link>
		</div>
	)
}

export default MobileBottomNav;