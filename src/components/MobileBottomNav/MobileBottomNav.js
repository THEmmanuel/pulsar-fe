import React from 'react';
import style from './MobileBottomNav.module.css';
import { Link } from 'react-router-dom';

import dashboardIcon from '../../assets/dashboard.svg';
import p2pIcon from '../../assets/peertopeer.svg';
import walletsIcon from '../../assets/wallets.svg';


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
						home
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
						p2p
					</span>
				</div>
			</Link>

			<Link to='/home'>
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

			<Link to='/home'>
				<div className={style.NavItemWrapper}>
					<img
						src={dashboardIcon}
						alt=""
						className={style.NavItemIcon}
					/>
					<span className={style.NavItemText}>
						Ads
					</span>
				</div>
			</Link>

			<Link to='/home'>
				<div className={style.NavItemWrapper}>
					<img
						src={dashboardIcon}
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