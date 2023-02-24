import React from 'react';
import style from './SellPage.module.css';

import UserInformation from '../../components/UserInformation/UserInformation';
import UserTerms from '../../components/UserTerms/UserTerms';
import UserInformationContent from '../../components/UserInformationContent/UserInformationContent';


const SellerAmountWrapper = () => {
	return (
		<div className={style.UserInformationContentWrapper}>
			<div className={style.BuyPageInput}>
				<input type="text" />
				<span>USDT</span>
				<span>All</span>
			</div>

			<div className={style.BuyPriceInformation}>
				<span>Crypto Amount</span>
				<span>600 USDT</span>
			</div>

			<div>
				<span>Crypto Amount</span>
				<span>600 USDT</span>
			</div>

			<div>
				<span>Crypto Amount</span>
				<span>600 USDT</span>
			</div>
		</div>
	)
};


const SellPage = () => {
	return (
		<div className={style.SellPageWrapper}>
			<div className={style.SellPageContainer}>
				<UserInformation
					username={adInfo.username}
					lowestOrder={adInfo.lowestOrder}
					highestOrder={adInfo.highestOrder}
					available={adInfo.available}
					paymentMethod={adInfo.paymentMethod}
					adType={adInfo.adType}
				/>
				<UserInformationContent />
				<UserTerms />
			</div>

			<div className={style.ButtonContainer}>
				<div className={style.ButtonWrapper}>
					<button className={style.ButtomButtonProceed}>Proceed to payment</button>
					<button className={style.ButtomButtonCancel}>Cancel</button>
				</div>
			</div>
		</div>
	)
}

export default SellPage;