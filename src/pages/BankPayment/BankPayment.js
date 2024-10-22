import React from 'react';
import style from './BankPayment.module.css'
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';



const BankPayment = () => {
	return (
		<div className={style.BankPayment}>
			<div className={style.PaymentDetails}>
				<span className={style.PaymentDetailsTitle}>
					You recieve
				</span>

				<span className={style.PaymentDetailsText}>
					602.4 USDT
				</span>
			</div>

			<div className={style.PaymentDetails}>
				<span className={style.PaymentDetailsTitle}>
					Transfer
				</span>

				<span className={style.PaymentDetailsText}>
					N 1 000 000.00
				</span>

				<span className={style.PaymentDetails}>
					To the account below and click on confirm to proceed
				</span>
			</div>

			<div>
				<div className={style.DetailsText}>
					<span className={style.DetailsHeading}>
						Bank Details
					</span>

					<div className={style.AccountDetailsWrapper}>
						<div className={style.AccountDetailsTextWrapper}>
							<span className={style.AccountDetailsText}>
								Bank Name:
							</span>

							<span className={style.AccountDetailsText}>
								Guaranty Trust Bank
							</span>
						</div>


						<div className={style.AccountDetailsTextWrapper}>
							<span className={style.AccountDetailsText}>
								Account Name:
							</span>

							<span className={style.AccountDetailsText}>
								John Doe
							</span>
						</div>

						<div className={style.AccountDetailsTextWrapper}>
							<span className={style.AccountDetailsText}>
								Bank Name:
							</span>

							<span className={style.AccountDetailsText}>
								0092368937
							</span>
						</div>
					</div>
				</div>
			</div>



			<div className={style.PaymentTimeAndButtons}>
				<div>
					<span>Time Left before trade Timeout </span>
					<span>30:00 mins</span>
				</div>

				<div className={style.BankPaymentButtons}>
					<PrimaryCTA
						ButtonText='Confirm'
					/>

					<PrimaryCTA
						ButtonText='Cancel'
					/>
				</div>
			</div>
		</div>
	)
}

export default BankPayment;