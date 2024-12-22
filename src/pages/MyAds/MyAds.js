import React, { useState, useEffect } from 'react';
import style from './MyAds.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';

const MyAds = () => {
	const API_URL = process.env.REACT_APP_API_URL;
	const [ads, setAds] = useState([])

	const getAds = () => {
		axios.get(`${API_URL}/p2p`)
			.then(res => setAds(res.data.peerToPeerAds))
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getAds()
	}, ads)

	return (
		<div className={style.MyAdPage}>
			<div>
				user stuff here
				<div>
					peer to peer ad card
					<div className={style.MyAds}>
						{ads.map(ad =>
							<div>
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
								<div>
									<button>
										edit
									</button>

									<button>
										delete
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			<Link to={`/create-ad`}>
				<button className={style.CreateAdButton}>
					+ Create Ad
				</button>
			</Link>
		</div>
	);
}

export default MyAds;