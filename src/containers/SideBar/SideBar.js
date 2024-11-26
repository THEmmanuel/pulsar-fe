import React, { useEffect, useState } from 'react';
import style from './SideBar.module.css';

import SideBarButton from '../../components/SidebarButton/SideBarButton';
import { Link } from 'react-router-dom';

import dashboardIcon from '../../assets/dashboard.svg';
import p2pIcon from '../../assets/peertopeer.svg';
import swapIcon from '../../assets/swap.svg';
import walletsIcon from '../../assets/wallets.svg';
import adsIcon from '../../assets/ads.svg';
import profileIcon from '../../assets/profile.svg';
import settingsIcon from '../../assets/settings.svg';
import historyIcon from '../../assets/historyIcon.svg';

const SideBar = () => {
	const [isMobile, setIsMobile] = useState(true);

	return (
		<div className={style.SideBar}>
			<div className={style.LogoContainer}>
				<Link to='/home'>
					<span>Cryptomatic</span>
				</Link>
			</div>

			<div className={style.SideBarButtonsWrapper}>
				<Link to='/home'>
					<SideBarButton
						SidebarIcon={dashboardIcon}
						SidebarText='Dashboard'
					/>
				</Link>

				<Link to='/p2p/buy'>
					<SideBarButton
						SidebarIcon={p2pIcon}
						SidebarText='Peer To Peer'
					/>
				</Link>

				<Link to='/history'>
					<SideBarButton
						SidebarIcon={historyIcon}
						SidebarText='Transactions History'
					/>
				</Link>

				{/* <Link to='/p2p'> */}
				{/* <SideBarButton
					SidebarIcon={swapIcon}
					SidebarText='Swap'
				/> */}
				{/* </Link> */}

				<Link to='/wallets'>
					<SideBarButton
						SidebarIcon={walletsIcon}
						SidebarText='Wallets'
					/>
				</Link>

				<Link to='/my-ads'>
					<SideBarButton
						SidebarIcon={adsIcon}
						SidebarText='My Ads'
					/>
				</Link>

				<Link to='/user-page'>
					<SideBarButton
						SidebarIcon={profileIcon}
						SidebarText='Profile'
					/>
				</Link>


				<SideBarButton
					SidebarIcon={settingsIcon}
					SidebarText='Settings'
				/>
			</div>
		</div>
	)
}

export default SideBar;