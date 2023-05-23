import React from 'react';
import Savings from '../../component/tabs/Savings';

const SavingsDetails = () => {
	return (
		<section className='tabs-section'>
			<div
				className='tab-pane'
				id='tabs-general'
				role='tabpanel'
				aria-labelledby='tabs-general-tab'
				data-te-tab-active
			>
				<Savings />
			</div>
		</section>
	);
};

export default SavingsDetails;
