import React from "react";
import style from './PeerToPeerAdHome.module.css';
import P2PButton from "../P2PButton/P2PButton";

const PeerToPeerAdHome = () => {
	return (
		<div className={style.PeerToPeerAdHome}>
			<div className={style.PeerToPeerInfoWrapper}>
				<div className={style.PeerToPeerInfo}>
					<div>
						<div className="style.Indicator">
						</div>
						<span className = {style.UserName}>User name</span>
					</div>
					<span className={style.PeerToPeerPrice}>720.68 NGN</span>
				</div>

				<span className = {style.MaximumPrice}>Maximum: 100,000 USDC</span>
			</div>
			
			<P2PButton />
		</div>
	)
}

export default PeerToPeerAdHome;