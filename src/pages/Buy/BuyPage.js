import React, { useState } from 'react';
import style from './BuyPage.module.css';
import UserTerms from '../../components/UserTerms/UserTerms';
import UserInformation from '../../components/UserInformation/UserInformation';
import UserInformationContent from '../../components/UserInformationContent/UserInformationContent';
import UserAccountDetails from '../../components/UserAccountDetails/UserAccountDetails';
import TransactionStatus from '../../components/TransactionStatus/TransactionStatus';
import TransactionCTAButtons from '../../components/TransactionCTAButtons/TransactionCTAButtons';

const BuyPage = () => {
	'test'
}

const BuyPageConfirm = () => {

}

const BuyPageStatus = () => {
	
}

const BuyPageContent = () => {
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

			<TransactionCTAButtons/>
		</div>
	);
};


export default BuyPageContent;