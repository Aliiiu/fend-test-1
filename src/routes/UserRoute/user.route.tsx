import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Users } from '../../pages';
import UserDetailsRoute from './UserDetailsRoute';

const UserRoute = () => {
	return (
		<Routes>
			<Route path='' element={<Users />} />
			<Route path=':id/*' element={<UserDetailsRoute />} />
		</Routes>
	);
};

export default UserRoute;
