import React from 'react';
import AppAndSystem from '../../component/tabs/AppAndSystem';

const AppAndSystemDetails = () => {
	return (
		<section className='tabs-section'>
			<div
				className='tab-pane'
				id='tabs-general'
				role='tabpanel'
				aria-labelledby='tabs-general-tab'
				data-te-tab-active
			>
				<AppAndSystem />
			</div>
		</section>
	);
};

export default AppAndSystemDetails;
