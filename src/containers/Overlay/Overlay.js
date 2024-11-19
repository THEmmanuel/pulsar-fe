import React from 'react';
import style from './Overlay.module.css'

const Overlay = (props) => {
	return (
		<div className={style.OverlayWrapper}>
			{props.children}
		</div>
	)
}

export default Overlay;