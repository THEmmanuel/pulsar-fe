import React from 'react';
import style from './PeerToPeerPage.module.css';
import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';
import DropDown from '../../components/DropDown/DropDown';
import MainInput from '../../components/MainInput/MainInput';

const PeerToPeerPage = () => {
	return (
		<div className={style.PeerToPeerPage}>
			Peer to peer page
			
			<div className={style.PeerToPeerDropdownWrapper}>
				<DropDown
					DropDownText='Buy'
				/>

				<DropDown
					DropDownText='USDT'
				/>
			</div>

			<div className={style.PeerToPeerCurrency}>
				<MainInput />
				<div>
					<span>Fiat</span>
					<DropDown DropDownText = 'USD'/>
				</div>
			</div>

			<button className={style.CreateAdButton}>
				+ Create Ad
			</button>

			<div className={style.PeerToPeerWrapper}>
				<PeerToPeerAd adType = 'buy'/>
				<PeerToPeerAd />
				<PeerToPeerAd />
				<PeerToPeerAd />
				<PeerToPeerAd />
			</div>
		</div>
	)
}

export default PeerToPeerPage;