import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages';
import AppLayout from '../component/layout/AppLayout';
import UserRoute from './UserRoute/user.route';

const AppRoute = () => {
	return (
		<AppLayout>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/users' element={<UserRoute />} />
			</Routes>
		</AppLayout>
	);
};

export default AppRoute;
