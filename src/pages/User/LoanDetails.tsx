import React from 'react';
import Loans from '../../component/tabs/Loan';

const LoanDetails = () => {
	return (
		<section className='tabs-section'>
			<div
				className='tab-pane'
				id='tabs-general'
				role='tabpanel'
				aria-labelledby='tabs-general-tab'
				data-te-tab-active
			>
				<Loans />
			</div>
		</section>
	);
};

export default LoanDetails;
