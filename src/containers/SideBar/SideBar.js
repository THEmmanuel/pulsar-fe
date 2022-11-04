import React from 'react';
import style from './SideBar.module.css';

import dashboardIcon from '../../assets/dashboard.svg'

const SideBar = () => {
	return (
		<div className={style.SideBar}>
			<div className={style.LogoContainer}>
				<span>Logo</span>
				<span>Tunnel</span>
			</div>

			<div className={style.SideBarButton}>
				<img src={dashboardIcon} alt="" />
				<span>Dashboard</span>
			</div>
		</div>
	)
}

export default SideBar;