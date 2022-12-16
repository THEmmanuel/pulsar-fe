import React from 'react';
import style from './SellPage.module.css';

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
}

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
}

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

const SellPage = () => {
	return (
		<div>
			<UserInformation />
			<SellerAmountWrapper />
			<UserTerms />
		</div>
	)
}

export default SellPage;