import React, { useState } from 'react';
import style from './UserInformationContent.module.css';
import MainDropdown from '../MainDropdown/MainDropdown';

const UserInformationContent = props => {
	const [orderAmount, setOrderAmount] = useState(props.amount);

	const handleInputAmount = e => {
		setOrderAmount(e.target.value)
		console.log('running')
	}

	return (
		<div className={style.UserInformationContentWrapper}
			style={
				props.adType === 'buy' ?
					{
						backgroundColor: '#BEE8E1'
					} : {
						backgroundColor: '#F7E2E3'
					}}>

			<div className={style.UserInformationContent}>
				<div className={style.BuyPageInputWrapper}>
					<div className={style.InputContainer}>
						<input
							type="text"
							value={orderAmount}
							className={style.AmountInput}
							onChange={handleInputAmount}
						/>
						<span>{props.token}</span>
					</div>

					<div>
						<MainDropdown />
					</div>
				</div>

				<div className={style.BuyPriceInformationWrapper}>
					<div className={style.BuyPriceInformation}>
						<span className={style.BuyPriceTitle}>Crypto Amount</span>
						<span className={style.BuyPriceValue}>{orderAmount} {props.token}</span>
					</div>

					<div className={style.BuyPriceInformation}>
						<span className={style.BuyPriceTitle}>Price</span>
						<span className={style.BuyPriceValue}>$2.75</span>
					</div>

					<div className={style.BuyPriceInformation}>
						<span className={style.BuyPriceTitle}>Fiat Amount</span>
						<span className={style.BuyPriceValue}>${props.amount}</span>
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