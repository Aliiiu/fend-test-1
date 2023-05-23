import React from 'react';
import GeneralDetails from '../../component/tabs/GeneralDetails';

const GeneralDetailsPage = () => {
	return (
		<section className='tabs-section'>
			<div
				className='tab-pane'
				id='tabs-general'
				role='tabpanel'
				aria-labelledby='tabs-general-tab'
				data-te-tab-active
			>
				<GeneralDetails />
			</div>
		</section>
	);
};

export default GeneralDetailsPage;
