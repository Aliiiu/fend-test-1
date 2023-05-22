import React, { useEffect } from 'react';
import './user.scss';
import CustomTable from '../../component/table';
import { userCardDetails } from '../../constants/userCardData';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchUsers } from '../../store/reducers/userSlice';
import { TUserState } from '../../store/reducers';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../component/pagination';

const UserPage = () => {
	const { loading, error, errMsg, userData } = useAppSelector(
		(state) => state.users
	);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const UserTableHeaders = [
		{ title: 'Organization', render: (row: TUserState) => `${row.orgName}` },
		{ title: 'Username', render: (row: TUserState) => `${row.userName}` },
		{ title: 'Email', render: (row: TUserState) => `${row.email}` },
		{
			title: 'Phone Number',
			render: (row: TUserState) =>
				`${row.phoneNumber.replace(/[^0-9 | / | - | \s]/g, '')}`,
		},
		{
			title: 'Date Joined',
			render: (row: TUserState) =>
				`${new Date(row.createdAt).toLocaleString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				})}`,
		},
		{ title: 'Status', render: () => 'Status' },
	];

	useEffect(() => {
		dispatch(fetchUsers({} as TFetchParams));
	}, []);

	const handleNavigate = (row: TUserState) => {
		navigate(`/users/${row.id}`);
	};

	return (
		<div className='pt-10'>
			<div className='flex gap-7'>
				{userCardDetails.map((item) => (
					<div
						key={item.title}
						className='pt-5 pb-8 flex flex-col gap-3 bg-white flex-1 px-7 border border-grey03 rounded-md card-shadow'
					>
						<img src={item.iconUrl} alt='icon' className=' w-8' />
						<h3 className='uppercase'>{item.title}</h3>
						<h1 className='font-semibold text-2xl'>{item.stat}</h1>
					</div>
				))}
			</div>
			<div className='mt-10'>
				<CustomTable
					rows={userData}
					headers={UserTableHeaders}
					showHead={true}
					allowRowClick={true}
					onRowClick={handleNavigate}
				/>
				<Pagination />
			</div>
		</div>
	);
};

export default UserPage;
