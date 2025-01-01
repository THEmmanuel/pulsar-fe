import React, { useContext } from "react";
import axios from 'axios';
import style from './ChainSwitcher.module.css';
import arrow from '../../assets/arrow.svg'
import ChainCard from "./ChainCard";
import ethChainIcon from '../../assets/ethIconWhiteTest.svg';
import Overlay from '../../containers/Overlay/Overlay'
import bnbIcon from '../../assets/bnbIcon.svg'

import { UserContext } from '../../contexts/UserContext';
import { useUser } from '@clerk/clerk-react';

const ChainSwitcher = (props) => {
	const { selectedChain, setSelectedChain } = useContext(UserContext);

	const API_URL = process.env.REACT_APP_API_URL;

	const { user } = useUser();
	// on select, set the currentUserChain to the selected one.
	// add a chain list to fe and be.

	const switchCurrentChain = async (chain) => {
		try {
			// Set the selected chain locally
			setSelectedChain(chain);

			// API call to update currentChain in the backend
			const response = await axios.put(`${API_URL}/users/update-current-chain`, {
				userID: user.id, // Replace with the actual user ID, e.g., from state or props
				currentChain: chain,
			});

			// Handle success response
			console.log('Current chain updated successfully:', response.data);
		} catch (error) {
			// Handle error response
			console.error('Error updating current chain:', error.response?.data || error.message);
		}
	};



	return (
		<Overlay>
			<div className={style.ChainSwitcher}>
				<ChainCard
					ChainImage={bnbIcon}
					ChainName='(BNB) Testnet'
					click={() => switchCurrentChain('bnb-testnet')}
				/>

				<ChainCard
					ChainImage={ethChainIcon}
					ChainName='Ethereum Sepolia'
					click={() => switchCurrentChain('eth-sepolia')}
				/>

				<ChainCard
					ChainImage={ethChainIcon}
					ChainName='Ethereum Holesky'
					click={() => switchCurrentChain('eth-holesky')}
				/>
			</div>

			{/* add a route that updates the chain when this is clicked. users current chain in the db. */}
		</Overlay>
	)
}






export default ChainSwitcher