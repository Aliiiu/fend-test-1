import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages';

const AppRoute = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Dashboard />} />
			</Routes>
		</div>
	);
};

export default AppRoute;
