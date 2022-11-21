import React from "react";
import style from './PortfolioHome.module.css';
import PortfolioAsset from "../../components/PortfolioAsset/PortfolioAsset";

const PortfolioHome = () => {
	return (
		<div className={style.PortfolioHome}>
			<div>
				<span>Portfolio</span>
				<span>$56498</span>
			</div>

			<div>
				line
			</div>

			<div className={style.PortfolioAssetWrapper}>
				<PortfolioAsset />
				<PortfolioAsset />
				<PortfolioAsset />
				<PortfolioAsset />
			</div>
		</div>
	)
}

export default PortfolioHome;