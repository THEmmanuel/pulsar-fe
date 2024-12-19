import React from 'react';
import style from './SideBarButton.module.css';

const SideBarButton = props => {
	return (
		<button className={style.SideBarButton}>
			<img
				src={props.SidebarIcon}
				alt=""
				className={style.SideBarButtonIcon}
			/>
			<span>{props.SidebarText}</span>
		</button>
	)
}

export default SideBarButton;