import React from 'react';
import style from './PeerToPeerPage.module.css';
import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';
import DropDown from '../../components/DropDown/DropDown';
import MainInput from '../../components/MainInput/MainInput';
import { Link } from 'react-router-dom';

const PeerToPeerPage = () => {
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

				<Link to = '/create-ad'>
					<button className={style.CreateAdButton}>
						+ Create Ad
					</button>
				</Link>
			</div>

			<div className={style.PeerToPeerWrapper}>
				<PeerToPeerAd adType='buy' />
				<PeerToPeerAd />
				<PeerToPeerAd />
				<PeerToPeerAd />
				<PeerToPeerAd />
			</div>
		</div>
	)
}

export default PeerToPeerPage;