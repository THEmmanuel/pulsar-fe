import React, {useState} from 'react';
import style from './BuyPage.module.css';
import checkIcon from '../../assets/check.svg';

const UserInformation = () => {
	return (
		<div className={style.UserInformationWrapper}>
			<div className={style.UserInformation}>
				<span>image</span>
				<div className={style.UserInformationText}>
					<span>name</span>
					<span>limit</span>
				</div>
			</div>

			<div className={style.UserInformationExtra}>
				<span>available</span>
				<span>method</span>
			</div>
		</div>
	)
};

const UserInformationContent = () => {
	return (
		<div className={style.UserInformationContentWrapper}>
			<div className={style.UserInformationContent}>
				<div className={style.BuyPageInput}>
					<input type="text" className={style.AmountInput} />
					<span>USDT</span>
					<span>All</span>
				</div>

				<div className={style.BuyPriceInformationWrapper}>
					<div className={style.BuyPriceInformation}>
						<span className={style.BuyPriceTitle}>Crypto Amount</span>
						<span className={style.BuyPriceValue}>600 USDT</span>
					</div>

					<div className={style.BuyPriceInformation}>
						<span className={style.BuyPriceTitle}>Price</span>
						<span className={style.BuyPriceValue}>$2.75</span>
					</div>

					<div className={style.BuyPriceInformation}>
						<span className={style.BuyPriceTitle}>Fiat Amount</span>
						<span className={style.BuyPriceValue}>$602.75</span>
					</div>
				</div>
			</div>
		</div>
	)
};

const UserTerms = () => {
	return (
		<div className={style.UserInformationContentWrapper}>
			<h4>Terms</h4>
			<div className={style.BuyTerms}>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium cum, sunt accusamus alias nostrum minima maiores quidem numquam, recusandae autem incidunt ab voluptatum officiis delectus.
				</li>

				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium cum, sunt accusamus alias nostrum minima maiores quidem numquam, recusandae autem incidunt ab voluptatum officiis delectus.
				</li>

				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laudantium cum, sunt accusamus alias nostrum minima maiores quidem numquam, recusandae autem incidunt ab voluptatum officiis delectus.
				</li>
			</div>
		</div>
	)
};

const UserAccountDetails = () => {
	return (
		<div className={style.UserInformationContentWrapper}>
			<div>
				<h4>Payment method</h4>
				<span className={style.PaymentMethod}>Bank transfer</span>
			</div>
			<div className={style.BuyPriceInformationWrapper}>
				<div className={style.BuyPriceInformation}>
					<span className={style.BuyPriceTitle}>Bank name</span>
					<span className={style.BuyPriceValue}>Zenith bank</span>
				</div>

				<div className={style.BuyPriceInformation}>
					<span className={style.BuyPriceTitle}>Account Name</span>
					<span className={style.BuyPriceValue}>John Doe</span>
				</div>

				<div className={style.BuyPriceInformation}>
					<span className={style.BuyPriceTitle}>Account Number</span>
					<span className={style.BuyPriceValue}>2207656876</span>
				</div>

				<div className={style.BuyPriceInformation}>
					<span className={style.BuyPriceTitle}>Amount To Transfer</span>
					<span className={style.BuyPriceValue}>$602.75</span>
				</div>
			</div>
		</div>
	)
}

const BuySuccess = () => {
	return (
		<div className={style.BuyPageSuccess}>
			<img src={checkIcon} alt="" className={style.CheckIcon} />

			<div className={style.TransactionInfo}>
				<div className={style.TransactionDetails}>
					<span className={style.TransactionAmount}>600.00 USDT</span>
					<span className={style.TransactionText}>Deposited into your wallet</span>
				</div>

				<div className={style.TransactionCTA}>
					<button className={style.SuccessCTAButton}>Go home</button>
					<span>Check USDT wallet</span>
				</div>
			</div>
		</div>
	)
}

const BuyPage = () => {
	return (
		<div className={style.BuyPageWrapper}>
			<div className={style.BuyPageContainer}>
				<UserInformation />
				<UserInformationContent />
				<UserAccountDetails />
				<UserTerms />
				{/* <BuySuccess /> */}
			</div>

			<div className={style.ButtonContainer}>
				<button className={style.ButtomButtonProceed}>Proceed to payment</button>
				<button className={style.ButtomButtonCancel}>Cancel</button>
			</div>
		</div>
	);
};


export default BuyPage;