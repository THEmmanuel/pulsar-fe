import React, { useState } from 'react';
import style from './BuyPage.module.css';
import UserTerms from '../../components/UserTerms/UserTerms';
import UserInformation from '../../components/UserInformation/UserInformation';
import UserInformationContent from '../../components/UserInformationContent/UserInformationContent';
import UserAccountDetails from '../../components/UserAccountDetails/UserAccountDetails';
import TransactionStatus from '../../components/TransactionStatus/TransactionStatus';

const BuyPage = () => {
	const [activePagge, setActivePage] = useState('buy')

	return (
		<div className={style.BuyPageWrapper}>
			<div className={style.BuyPageContainer}>
				<div className={style.BuyPageContent}>
					<UserInformation />
					<UserInformationContent />
					<UserAccountDetails />
					<UserTerms />
				</div>

				<TransactionStatus />
			</div>

			<div className={style.ButtonContainer}>
				<div className={style.ButtonWrapper}>
					<button className={style.ButtomButtonProceed}>Buy USDT</button>
					<button className={style.ButtomButtonCancel}>Cancel</button>
				</div>
			</div>
		</div>
	);
};


export default BuyPage;