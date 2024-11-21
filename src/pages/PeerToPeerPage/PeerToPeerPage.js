import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import style from './PeerToPeerPage.module.css';
import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';
import DropDown from '../../components/DropDown/DropDown';
import MainInput from '../../components/MainInput/MainInput';
import SecondaryDropdown from '../../components/SecondaryDropdown/SecondaryDropdown';
import PrimaryCTA from '../../components/PrimaryCTA/PrimaryCTA';

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

	const filteredAds = ads.filter(ad =>
		ad.token === selectedToken &&
		ad.adType === selectedAdType
	);

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
			</div>





			<div className={style.PeerToPeerWrapper}>
				<span className={style.PageTitle}>
					Open Offers
				</span>
				{ads.map(ad =>
					<Link to={`/order/${ad._id}/${inputAmount}`}>
						<PeerToPeerAd
							adType={ad.adType}
							username={ad.username}
							token={ad.token}
							available={ad.available}
							lowest={ad.lowestOrder}
							highest={ad.highestOrder}
							paymentMethod={ad.paymentMethod}
							rate={ad.rate}
						/>
					</Link>
				)}

				{/* <Link to={`/order/${ad._id}/${inputAmount}`}> */}
				{/* <PeerToPeerAd
					adType={'buy'}
					username={'p4nther'}
					token={'usdc'}
					available={'100'}
					lowest={'300'}
					highest={'100k'}
					paymentMethod={'Bank transfer'}
					rate={'1200'}
					completionRate={'100'}
				/>


				<PeerToPeerAd
					adType={'buy'}
					username={'p4nther'}
					token={'usdc'}
					available={'100'}
					lowest={'300'}
					highest={'100k'}
					paymentMethod={'Bank transfer'}
					rate={'1200'}
					completionRate={'100'}
				/>

				<PeerToPeerAd
					adType={'buy'}
					username={'p4nther'}
					token={'usdc'}
					available={'100'}
					lowest={'300'}
					highest={'100k'}
					paymentMethod={'Bank transfer'}
					rate={'1200'}
					completionRate={'100'}
				/>

				<PeerToPeerAd
					adType={'buy'}
					username={'p4nther'}
					token={'usdc'}
					available={'100'}
					lowest={'300'}
					highest={'100k'}
					paymentMethod={'Bank transfer'}
					rate={'1200'}
					completionRate={'100'}
				/>

				<PeerToPeerAd
					adType={'buy'}
					username={'p4nther'}
					token={'usdc'}
					available={'100'}
					lowest={'300'}
					highest={'100k'}
					paymentMethod={'Bank transfer'}
					rate={'1200'}
					completionRate={'100'}
				/> */}
				{/* </Link> */}
			</div>
		</div>
	)
}

export default PeerToPeerPage;