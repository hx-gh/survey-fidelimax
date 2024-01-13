'use client';
import React from 'react';

import { useModalContext } from './modal.context';
import styles from './modal.module.css';

const Modal = () => {
	const {
		modalState: { displayItem, title, visible },
		closeModal,
	} = useModalContext();
	return (
		<div
			className={styles.modal_holder}
			style={{ display: `${visible}` }}
		>
			<div className={styles.modal_content_holder}>
				<div className={styles.modal_content}>
					<div className={styles.modal_title_holder}>
						<p>{title}</p>
					</div>
					<div className={styles.modal_text_holder}>
						{displayItem}
					</div>
					<div className={styles.modal_footer_holder}>
						<button
							className={`${styles.modal_dismiss_button} theme-button-primary`}
							onClick={closeModal}
						>
							Dispensar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
