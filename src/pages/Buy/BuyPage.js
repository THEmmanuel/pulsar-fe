import React, { useState } from 'react';
import style from './BuyPage.module.css';
import UserTerms from '../../components/UserTerms/UserTerms';
import UserInformation from '../../components/UserInformation/UserInformation';
import UserInformationContent from '../../components/UserInformationContent/UserInformationContent';
import UserAccountDetails from '../../components/UserAccountDetails/UserAccountDetails';
import TransactionStatus from '../../components/TransactionStatus/TransactionStatus';
import TransactionCTAButtons from '../../components/TransactionCTAButtons/TransactionCTAButtons';

// <UserInformation />
// <UserInformationContent />
// <UserAccountDetails />
// <UserTerms />
// <TransactionStatus />

const BuyPage = () => {
	return (
		<div className={style.BuyPageWrapper}>
			<div className={style.BuyPageContainer}>
				<div className={style.BuyPageContent}>
					<UserInformation />
					<UserInformationContent />
					<UserTerms />
				</div>
			</div>
			<TransactionCTAButtons />
		</div>
	)
}

const BuyPageConfirm = () => {
	return (
		<div className={style.BuyPageWrapper}>
			<div className={style.BuyPageContainer}>
				<div className={style.BuyPageContent}>
					<UserInformation />
					<UserInformationContent />
					<UserAccountDetails />
					<UserTerms />
				</div>
			</div>
			<TransactionCTAButtons />
		</div>
	)
}

const BuyPageStatus = () => {
	return (
		<div className={style.BuyPageWrapper}>
			<div className={style.BuyPageContainer}>
				<div className={style.BuyPageContent}>
					<TransactionStatus />
				</div>
			</div>
		</div>
	)
}

const BuyPageContent = () => {
	const [activePagge, setActivePage] = useState('buy')

	return (
		<div>
			<BuyPage />
			{/* <BuyPageConfirm /> */}
			{/* <BuyPageStatus /> */}
		</div>
	);
};


export default BuyPageContent;