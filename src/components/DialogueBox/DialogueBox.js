import React from 'react';
import style from './DialogueBox.module.css';
import PrimaryCTA from '../PrimaryCTA/PrimaryCTA';

const DialogueBox = (props) => {
	return (
		<div className={style.DialogueBox}>
			<div className={style.DialogueBoxTextWrapper}>
				<span>
					{props.headingText}
				</span>

				<span>
					{props.AdditionalText}
				</span>

				<span>
					{props.MoreText}
				</span>
			</div>

			<div className={style.DialogueBoxButtons}>
				<PrimaryCTA
					ButtonText='Accept'
				/>

				<PrimaryCTA
					ButtonText='Cancel'
				/>
			</div>
		</div>
	)
}

export default DialogueBox;