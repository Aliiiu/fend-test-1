import React, { ReactNode } from 'react';
import Topbar from '../topbar';
import Sidebar from '../sidebar';
import { useLocation } from 'react-router-dom';

const AppLayout = ({ children }: { children: ReactNode }) => {
	let location = useLocation();
	return (
		<div>
			<Topbar />
			<div className='flex h-[calc(100vh-96px)]'>
				<Sidebar />
				<div className='p-16 bg-red-300 w-full'>
					<h2 className='font-medium text-2xl capitalize'>
						{location.pathname.replace('/', '')}
					</h2>
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default AppLayout;
