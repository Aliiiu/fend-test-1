import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthRoute from './auth.route';
import AppRoute from './app.route';

const IndexRoute = () => {
	return (
		<Routes>
			{/* Wrap the protected route here */}
			<Route path='*' element={<AppRoute />} />
			<Route path='/auth/*' element={<AuthRoute />} />
		</Routes>
	);
};

export default IndexRoute;
