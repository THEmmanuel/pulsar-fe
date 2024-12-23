import React from 'react';
import style from './BankPayment.module.css'
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';

// get trade. this calls the api for the current trade and shows pages based on order status.

// A page for order history etc will show up here as transactions status.

// notification design. db schema. and link. or route.
// expecting notifs for chats.
// new trades.
// completed trades.

// clear one notification.
// clear all notiifvations
// create a mew notif.

const BankPayment = props => {
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

					<div className={style.AccountDetailsTextWrapper}>
						<span className={style.AccountDetailsText}>
							Bank Account Number:
						</span>

						<span className={style.AccountDetailsText}>
							{props.tradeAdInfo.bankAccountNumber}
						</span>
					</div>

					<div className={style.AccountDetailsWrapper}>
						<div className={style.AccountDetailsTextWrapper}>
							<span className={style.AccountDetailsText}>
								Bank Name:
							</span>

							<span className={style.AccountDetailsText}>
								{props.tradeAdInfo.bankName}
							</span>
						</div>


						<div className={style.AccountDetailsTextWrapper}>
							<span className={style.AccountDetailsText}>
								Account Name:
							</span>

							<span className={style.AccountDetailsText}>
								{props.tradeAdInfo.bankAccountName}
							</span>
						</div>
					</div>
				</div>
			</div>



				<div className={style.BankPaymentButtons}>
					<PrimaryCTA
						ButtonText='Confirm'
					/>

				clicking on confirm.
				shows the confirmation page.
				changes the status to the normal one
				

				other user has to accept the order first.
				when they do.

				show this page. otherwise have a status that marks it accordingly and shows a banner that says waiting for them to accept.

				after they accept, show this page.
				the user can then click on confirm and go to the confirmationpage

				once they click on confirm other party gets a notif that they should confirm and the token is sent when they do.

				eg. I pay usd. ethereum is deposited. after I confirm.

				eg. I want usd. I set up an ad and recieve 2 notifs. when an order is created on my ad.
				when i click on accept and the order is created, to eth is escrowed from my account.

				and whne the other user transfers and im prompted to confirm and confirm fund release from escrow to user.

					<PrimaryCTA
						ButtonText='Cancel'
					/>
				</div>
		</div>
	)
}


export default BankPayment;