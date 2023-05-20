import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages';
import AppLayout from '../component/layout/AppLayout';

const AppRoute = () => {
	return (
		<AppLayout>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</AppLayout>
	);
};

export default AppRoute;
