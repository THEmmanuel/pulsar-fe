import React from "react";
import style from './PeerToPeerAdHome.module.css';

const PeerToPeerAdHome = () => {
	return (
		<div className={style.PeerToPeerAdHome}>
			<div className={style.PeerToPeerInfoWrapper}>
				<div className={style.PeerToPeerInfo}>
					<div>
						<div className="style.Indicator">
						</div>
						<span>User name</span>
					</div>

					<span>720.68 NGN</span>
				</div>

				<span>Maximum: 100,000 USDC</span>
			</div>

			<button>Buy USDC</button>
		</div>
	)
}

export default PeerToPeerAdHome;