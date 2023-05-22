import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Users } from '../../pages';

const UserRoute = () => {
	return (
		<Routes>
			<Route path='' element={<Users />} />
		</Routes>
	);
};

export default UserRoute;
