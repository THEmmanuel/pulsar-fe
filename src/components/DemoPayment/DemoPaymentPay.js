import React, { useState } from 'react';
import styles from './DemoPaymentPay.module.css';




const DemoPaymentPay = () => {
	const [isOverlayVisible, setOverlayVisible] = useState(false);

	const toggleOverlay = () => {
		setOverlayVisible(!isOverlayVisible);
	};

	const handlePayment = () => {
		alert('Payment processed!');
		setOverlayVisible(false);
	};

	return (
		<div className={styles.container}>
			<button className={styles.openButton} onClick={toggleOverlay}>Pay Now</button>
			{isOverlayVisible && (
				<div className={styles.overlay}>
					<div className={styles.modal}>
						<h2 className={styles.title}>Demo Payment</h2>
						<div className={styles.paymentOptions}>
							<label className={styles.option}>
								<input type="radio" name="paymentMethod" value="card" />
								Card Payment
							</label>
							<label className={styles.option}>
								<input type="radio" name="paymentMethod" value="paypal" />
								PayPal
							</label>
						</div>
						<button className={styles.payButton} onClick={handlePayment}>Pay</button>
						<button className={styles.closeButton} onClick={toggleOverlay}>Cancel</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default DemoPaymentPay;
