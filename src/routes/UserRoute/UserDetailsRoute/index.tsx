import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GeneralDetailsPage from '../../../pages/User/GeneralDetails';
import UserLayout from '../../../component/layout/UserLayout';
import DocumentsDetailsPage from '../../../pages/User/DocumentDetails';
import BankDetailsPage from '../../../pages/User/BankDetails';
import SavingsDetails from '../../../pages/User/Savings';
import LoanDetails from '../../../pages/User/LoanDetails';
import AppAndSystemDetails from '../../../pages/User/AppAndSystemDetails';

const UserDetailsRoute = () => {
	return (
		<UserLayout>
			<Routes>
				<Route path='' element={<GeneralDetailsPage />} />
				<Route path='documents' element={<DocumentsDetailsPage />} />
				<Route path='bank-details' element={<BankDetailsPage />} />
				<Route path='savings' element={<SavingsDetails />} />
				<Route path='loans' element={<LoanDetails />} />
				<Route path='app-and-systems' element={<AppAndSystemDetails />} />
			</Routes>
		</UserLayout>
	);
};

export default UserDetailsRoute;
