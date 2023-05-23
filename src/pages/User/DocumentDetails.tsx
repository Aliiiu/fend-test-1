import React from 'react';
import Documents from '../../component/tabs/Documents';

const DocumentsDetailsPage = () => {
	return (
		<section className='tabs-section'>
			<div
				className='tab-pane'
				id='tabs-general'
				role='tabpanel'
				aria-labelledby='tabs-general-tab'
				data-te-tab-active
			>
				<Documents />
			</div>
		</section>
	);
};

export default DocumentsDetailsPage;
