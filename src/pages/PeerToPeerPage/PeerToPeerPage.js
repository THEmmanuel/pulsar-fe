import React from 'react';
import style from './PeerToPeerPage.module.css';
import PeerToPeerAd from '../../components/PeerToPeerAd/PeerToPeerAd';

const PeerToPeerPage = () => {
	return (
		<div className={style.PeerToPeerWrapper}>
			<PeerToPeerAd/>
			<PeerToPeerAd/>
			<PeerToPeerAd/>
			<PeerToPeerAd/>
			<PeerToPeerAd/>
		</div>
	)
}

export default PeerToPeerPage;