import React from 'react';
import style from './BuyPage.module.css';

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
			<h4>Buying USDT</h4>
			<div>
				<div>
					<span>Fiat Amount</span>
					<span>$602.75</span>
				</div>

				<div>
					<span>Fiat Amount</span>
					<span>$602.75</span>
				</div>

				<div>
					<span>Fiat Amount</span>
					<span>$602.75</span>
				</div>

				<div>
					<span>Fiat Amount</span>
					<span>$602.75</span>
				</div>
			</div>
		</div>
	)
}

const BuyPage = () => {
	return (
		<div className={style.BuyPageWrapper}>
			<UserInformation />
			<UserInformationContent />
			<UserTerms />
			<UserAccountDetails />

			<div className={style.ButtonContainer}>
				<button className={style.ButtomButtonProceed}>Proceed to payment</button>
				<button className={style.ButtomButtonCancel}>Cancel</button>
			</div>

		</div>
	)
}


export default BuyPage;