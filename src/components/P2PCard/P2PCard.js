import React from "react";
import style from './P2PCard.module.css';

const P2PCard = () => {
	return (
		<div className={style.P2PCardWrapper}>
			<div className={style.P2PCard}>
				<div className={style.P2PCardHeadingWrapper}>
					<span className={style.P2PCardHeading}>Buy Crypto</span>
					<span>Image</span>
				</div>

				<span className={style.P2PCardText}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, accusamus. Repellat cum, numquam laborum minima ducimus est harum officiis, doloremque itaque sit voluptates? Sapiente, reiciendis illo exercitationem ut facere incidunt.
				</span>
			</div>
		</div>
	)
}

export default P2PCard;