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
				<DropDown />
				<DropDown />
			</div>

			<div className={style.PeerToPeerCurrency}>
				<MainInput/>
				<DropDown/>
			</div>

			<div className={style.PeerToPeerWrapper}>
				<PeerToPeerAd />
				<PeerToPeerAd />
				<PeerToPeerAd />
				<PeerToPeerAd />
				<PeerToPeerAd />
			</div>
		</div>
	)
}

export default PeerToPeerPage;