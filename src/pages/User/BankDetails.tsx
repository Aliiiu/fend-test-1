import React from 'react';
import BankDetails from '../../component/tabs/BankDetails';

const BankDetailsPage = () => {
	return (
		<section className='tabs-section'>
			<div
				className='tab-pane'
				id='tabs-general'
				role='tabpanel'
				aria-labelledby='tabs-general-tab'
				data-te-tab-active
			>
				<BankDetails />
			</div>
		</section>
	);
};

export default BankDetailsPage;
