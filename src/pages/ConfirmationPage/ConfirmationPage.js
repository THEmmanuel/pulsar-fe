import React from 'react';
import style from './ConfirmationPage.module.css'
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';



const ConfirmationPage = () => {
	return (
		<div className={style.BankPayment}>
			<div className={style.PaymentDetails}>

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
		</div>
	)
}

export default ConfirmationPage;