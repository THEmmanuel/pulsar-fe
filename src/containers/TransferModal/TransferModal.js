import React from 'react';

const TransferModal = () => {
	return (
		<div>
			<span>Sending ETH</span>

			<div>
				<div>
					<span>Amount</span>
					<input type="text" />
				</div>

				<div>
					<span>Reciever Wallet Address</span>
					<input type="text" />
				</div>
			</div>

			<div>
				<button>Confirm</button>
				<button>Cancel</button>
			</div>
		</div>
	);
}

export default TransferModal;