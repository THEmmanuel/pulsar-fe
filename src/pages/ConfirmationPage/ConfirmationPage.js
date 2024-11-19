import React from 'react';
import style from './ConfirmationPage.module.css'
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';



const ConfirmationPage = () => {
	return (
		<div className={style.BankPayment}>
			<div className={style.PaymentDetails}>
				<div className={style.ConfirmationDetails}>
					<span className={style.ConfirmationText}>
						You’ve confirmed your bank transfer of
						N1 000 000 to p4nther
					</span>

					<span className={style.ConfirmationText}>
						We’re currently waiting for p4nther to confirm the funds and we’ll release them to your wallet
					</span>

					<span className={style.ConfirmationText}>
						You leave this page and check your history to see it at anytime
					</span>

					<span className={style.ConfirmationText}>
						You leave this page and check your history to see it at anytime
					</span>
				</div>


				<div className={style.ConfirmationTimeWrapper}>
					<div className={style.ConfirmationTimeContainer}>
						<span className={style.ConfirmationTimeText}>
							Time Left before trade Timeout
						</span>

						<span className={style.ConfirmationTimeText}>
							30:00 mins
						</span>
					</div>


					<div className={style.ConfirmationTimeWrapper}>
						<div className={style.ConfirmationTimeNoteWrapper}>
							<span className={style.ConfirmationNote}>
								If p4nther doesn't confirm the transaction before time out, we’ll deposit the funds to your wallet.
							</span>

							<span className={style.ConfirmationNote}>
								You can open a dispute if there are any issues.
							</span>
						</div>

						<div className={style.BankPaymentButtons}>
							<PrimaryCTA
								ButtonText='Open dispute'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConfirmationPage;