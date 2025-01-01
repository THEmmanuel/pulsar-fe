import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import style from './PeerToPeerPage.module.css';
import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';
import DropDown from '../../components/DropDown/DropDown';
import MainInput from '../../components/MainInput/MainInput';
import SecondaryDropdown from '../../components/SecondaryDropdown/SecondaryDropdown';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';
import WalletSwitcher from '../../components/WalletSwitcher/WalletSwitcher.js';
import ChainSwitcher from '../../components/ChainSwitcher/ChainSwitcher.js';
import ChainSwitcherButton from '../../components/ChainSwitcher/ChainSwitcherButton.js';


const API_URL = process.env.REACT_APP_API_URL;

const tokens = [
	{ value: 'ETH', label: 'Ethereum' },
	{ value: 'USDT', label: 'USDT' },
	{ value: 'BTC', label: 'Bitcoin' }
]

const fiatCurrencies = [
	{ value: 'NGN', label: 'Nigerian Naira' },
	{ value: 'USD', label: 'US Dollar' },
]

const adTypes = [
	{ value: 'buy', label: 'Buy' },
	{ value: 'sell', label: 'Sell' },
]

const PeerToPeerPage = () => {
	const { adType } = useParams()
	const [ads, setAds] = useState([])
	const [selectedToken, setSelectedToken] = useState(tokens[0].value);
	const [selectedFiat, setSelectedFiat] = useState(fiatCurrencies[0].value)
	const [selectedAdType, setSelectedAdType] = useState(adType)
	const [inputAmount, setInputAmount] = useState(0)
	const [showEthereumChains, setShowEthereumChains] = useState(false)

	const filteredAds = ads.filter(ad => ad.adType === adType);

	const handleTokenChange = e => {
		setSelectedToken(e.value)
	}

	const handleFiatChange = e => {
		setSelectedFiat(e.value)
	}

	const handleAdTypeChange = e => {
		setSelectedAdType(e.value)
	}

	const handleInputAmount = e => {
		setInputAmount(e.target.value)
	}

	const getAds = () => {
		axios.get(`${API_URL}/p2p`)
			.then(res => setAds(res.data.peerToPeerAds))
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getAds()
	}, ads)

	return (
		<div className={style.PeerToPeerPage}>
			<span className={style.PageTitle}>
				Peer to peer
			</span>

			<div className={style.PeerToPeerHeadingContainer}>
				<div className={style.PeerToPeerSearchWrapper}>
					<input
						type="text"
						className={style.P2PSearchBox}
					/>

					<PrimaryCTA ButtonText='Search' />
				</div>


				<div className={style.PeerToPeerFiltersWrapper}>
					<div>
						<span>Ad type</span>
						<DropDown
							onSelect={handleAdTypeChange}
							options={adTypes}
						/>
					</div>
					<div>
						<span>Token</span>
						<DropDown
							DropDownText='USDT'
							onSelect={handleTokenChange}
							options={tokens}
						/>
					</div>

					<MainInput
						change={handleInputAmount}
					/>

					<div>
						<span>Fiat</span>
						<DropDown
							DropDownText='USD'
							onSelect={handleFiatChange}
							options={fiatCurrencies}
						/>
					</div>
				</div>

				<div className={style.ChainSwitcherWrapper}>
					<ChainSwitcherButton
						click={() => setShowEthereumChains(true)}
					/>
				</div>

				{showEthereumChains
					?
					<ChainSwitcher
						showSwitcher={showEthereumChains}
					/>
					:
					null}
			</div>





			<div className={style.PeerToPeerWrapper}>
				<span className={style.PageTitle}>
					Open Offers
				</span>

				{filteredAds.map(ad => (
					<Link to={`/order/${ad._id}/${inputAmount}`} key={ad._id}>
						<PeerToPeerAd
							adType={ad.adType}
							token={ad.token}
							fiatCurrency={ad.fiatCurrency}
							username={ad.username}
							rate={ad.rate}
							available={ad.available}
							lowestOrder={ad.lowestOrder}
							highestOrder={ad.highestOrder}
							paymentMethod={ad.paymentMethods}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default PeerToPeerPage;