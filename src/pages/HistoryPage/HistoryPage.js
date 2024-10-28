import React from 'react';
import style from './HistoryPage.module.css';

import HistoryCard from '../../components/HistoryCard/HistoryCard'

const HistoryPage = () => {
	return (
		<div>
			History

			<div className={style.HistoryCardsWrapper}>
				<HistoryCard/>
				<HistoryCard/>
				<HistoryCard/>
				<HistoryCard/>
				<HistoryCard/>
				<HistoryCard/>
				<HistoryCard/>
				<HistoryCard/>
			</div>
		</div>
	)
}

export default HistoryPage 