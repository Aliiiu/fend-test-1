import React, { ReactNode } from 'react';
import Topbar from '../topbar';
import Sidebar from '../sidebar';

const AppLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Topbar />
			<div className='flex h-[calc(100vh-96px)]'>
				<Sidebar />
				<div className='p-16 overflow-y-auto w-full'>
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default AppLayout;
