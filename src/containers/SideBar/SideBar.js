import React from 'react';
import style from './SideBar.module.css';

import SideBarButton from '../../components/SidebarButton/SideBarButton';

import dashboardIcon from '../../assets/dashboard.svg';
import p2pIcon from '../../assets/peertopeer.svg';
import swapIcon from '../../assets/swap.svg';
import walletsIcon from '../../assets/wallets.svg';
import adsIcon from '../../assets/ads.svg';
import profileIcon from '../../assets/profile.svg';
import settingsIcon from '../../assets/settings.svg';

const SideBar = () => {
	return (
		<div className={style.SideBar}>
			<div className={style.LogoContainer}>
				<span>Logo</span>
				<span>Tunnel</span>
			</div>

			<div className={style.SideBarButtonsWrapper}>
				<SideBarButton
					SidebarIcon={dashboardIcon}
					SidebarText='Dashboard'
				/>

				<SideBarButton
					SidebarIcon={p2pIcon}
					SidebarText='Peer To Peer'
				/>

				<SideBarButton
					SidebarIcon={swapIcon}
					SidebarText='Swap'
				/>

				<SideBarButton
					SidebarIcon={walletsIcon}
					SidebarText='Wallets'
				/>

				<SideBarButton
					SidebarIcon={adsIcon}
					SidebarText='Ads'
				/>

				<SideBarButton
					SidebarIcon={profileIcon}
					SidebarText='Profile'
				/>

				<SideBarButton
					SidebarIcon={settingsIcon}
					SidebarText='Settings'
				/>
			</div>
		</div>
	)
}

export default SideBar;