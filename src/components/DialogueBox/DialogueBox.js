import React from 'react';
import style from './DialogueBox.module.css';
import PrimaryCTA from '../PrimaryCTA/PrimaryCTA';
import toast, { toastConfig } from 'react-simple-toasts';

toastConfig({ theme: 'dark' });

const DialogueBox = (props) => {
	return (
		<div className={style.DialogueBox}>
			<div className={style.DialogueBoxTextWrapper}>
				<span>
					{props.HeadingText}
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
					click={() => props.AcceptAction()}
				/>

				<PrimaryCTA
					ButtonText='Cancel'
					click={() => props.CancelAction()}
				/>
			</div>
		</div>
	)
}

export default DialogueBox;