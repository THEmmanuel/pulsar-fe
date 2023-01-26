import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import style from './PeerToPeerPage.module.css';
import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';
import DropDown from '../../components/DropDown/DropDown';
import MainInput from '../../components/MainInput/MainInput';

const API_URL = 'http://localhost:9000';

const PeerToPeerPage = () => {
	const [ads, setAds] = useState([])

	const getAds = () => {
		axios.get(`${API_URL}/p2p`)
			.then(res => setAds(res.data.peerToPeerAds))
			.catch(err => console.log(err))
	}

	// getAds()
	// useEffect

	return (
		<div className={style.PeerToPeerPage}>
			Peer to peer page

			<div className={style.PeerToPeerHeadingContainer}>
				<div className={style.PeerToPeerHeading}>
					<div className={style.PeerToPeerDropdownWrapper}>

						<div>
							<span>Ad type</span>
							<DropDown
								DropDownText='Buy'
							/>
						</div>

						<div>
							<span>Token</span>
							<DropDown
								DropDownText='USDT'
							/>
						</div>
					</div>

					<div className={style.PeerToPeerCurrency}>
						<MainInput />
						<div>
							<span>Fiat</span>
							<DropDown DropDownText='USD' />
						</div>
					</div>
				</div>

				<Link to='/create-ad'>
					<button className={style.CreateAdButton}>
						+ Create Ad
					</button>
				</Link>
			</div>

			<div className={style.PeerToPeerWrapper}>
				{ads.map(ad => <PeerToPeerAd adType={ad.adType} />)}
			</div>
		</div>
	)
}

export default PeerToPeerPage;