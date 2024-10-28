// Function to deposit the token into the recieving address
import {
	ethers
} from "ethers";

async function transferTokens(tokenAddress, fromPrivateKey, toAddress, amount, providerUrl) {
	// Create a provider
	const provider = new ethers.JsonRpcProvider(providerUrl);

	// Create a wallet from the private key
	const wallet = new ethers.Wallet(fromPrivateKey, provider);

	// Create a contract instance for the ERC20 token
	const tokenContract = new ethers.Contract(
		tokenAddress,
		[
			"function transfer(address to, uint256 amount) public returns (bool)"
		],
		wallet
	);

	// Convert the amount to the token's decimal format if needed
	const tokenDecimals = await tokenContract.decimals();
	const amountInWei = ethers.parseUnits(amount.toString(), tokenDecimals);

	// Execute the transfer
	const tx = await tokenContract.transfer(toAddress, amountInWei);

	// Wait for the transaction to be mined
	const receipt = await tx.wait();
	console.log(`Transaction successful with hash: ${receipt.transactionHash}`);
}