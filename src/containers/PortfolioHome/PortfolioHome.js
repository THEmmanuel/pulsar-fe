import React from "react";
import { Link } from "react-router-dom";
import style from './PortfolioHome.module.css';
import PortfolioAsset from "../../components/PortfolioAsset/PortfolioAsset";

const PortfolioHome = () => {
	return (
		<div className={style.PortfolioHome}>
			<div className={style.PortfolioDetails}>
				<span className={style.PortfolioText}>Portfolio</span>
				<span className={style.PortfolioValue}>$56,498.65</span>
			</div>

			<div className={style.PortfolioLine} />
			<div className={style.PortfolioAssetWrapper}>
				<PortfolioAsset />
				<PortfolioAsset />
				<PortfolioAsset />
				<PortfolioAsset />
			</div>

			<div>
				<Link to={`/wallets`}>
					<span className={style.PortfolioWalletCTA}>See wallets</span>
				</Link>
			</div>
		</div>
	)
}

export default PortfolioHome;