import React from 'react';
import style from './UserInformationContent.module.css';
import MainDropdown from '../MainDropdown/MainDropdown';

const UserInformationContent = props => {
	
	return (
		<div className={style.UserInformationContentWrapper}>
			<div className={style.UserInformationContent}>
				<div className={style.BuyPageInputWrapper}>
					<div>
						<input type="text" className={style.AmountInput} />
						<span>USDT</span>
						<span>All</span>
					</div>

					<div>
						<MainDropdown/>	
					</div>
				</div>

				<div className={style.BuyPriceInformationWrapper}>
					<div className={style.BuyPriceInformation}>
						<span className={style.BuyPriceTitle}>Crypto Amount</span>
						<span className={style.BuyPriceValue}>{props.amount} USDT</span>
					</div>

					<div className={style.BuyPriceInformation}>
						<span className={style.BuyPriceTitle}>Price</span>
						<span className={style.BuyPriceValue}>$2.75</span>
					</div>

					<div className={style.BuyPriceInformation}>
						<span className={style.BuyPriceTitle}>Fiat Amount</span>
						<span className={style.BuyPriceValue}>$602.75</span>
					</div>

					<div className={style.BuyPriceInformation}>
						<span className={style.BuyPriceTitle}>Order Number</span>
						<span className={style.BuyPriceValue}>{props.orderToken}</span>
					</div>
				</div>
			</div>
		</div>
	)
};

export default UserInformationContent;