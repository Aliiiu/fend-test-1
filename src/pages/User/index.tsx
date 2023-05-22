import React, { useEffect, useState } from 'react';
import './user.scss';
import CustomTable from '../../component/table';
import { userCardDetails } from '../../constants/userCardData';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchUsers } from '../../store/reducers/userSlice';
import { TUserState } from '../../store/reducers';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../component/pagination';
import UserStatus from '../../component/widget/status/UserStatus';
import { statusTag } from '../../utils/helper';
import CustomPopover from '../../component/widget/popover/CustomPopover';
import EyeIcon from '../../component/icons/EyeIcon';
import BlacklistedIcon from '../../component/icons/BlacklistedIcon';
import UserIcon from '../../component/icons/UserIcon';

const UserPage = () => {
	const { loading, error, errMsg, userData } = useAppSelector(
		(state) => state.users
	);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const popoverData = [
		{
			name: 'View Details',
			action: (id?: string) => navigate(`/user/${id}`),
			icon: EyeIcon,
		},
		{
			name: 'Blacklist User',
			action: () => 'yes',
			icon: BlacklistedIcon,
		},
		{
			name: 'Activate User',
			action: () => 'yes',
			icon: UserIcon,
		},
	];

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
		{
			title: 'Status',
			render: (row: TUserState) => (
				<UserStatus status={statusTag(row.lastActiveDate)} />
			),
		},
		{
			title: '',
			render: (row: TUserState) => (
				<CustomPopover>
					<div className='grid bg-white px-4'>
						{popoverData.map((item) => (
							<div
								key={item.name}
								onClick={() => item.action(row.id)}
								className='flex items-center py-2 rounded-lg transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
							>
								<item.icon aria-hidden='true' />
								<div className='ml-4'>
									<p className='text-sm font-medium text-gray-900'>
										{item.name}
									</p>
								</div>
							</div>
						))}
					</div>
				</CustomPopover>
			),
		},
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
					// allowRowClick={true}
					onRowClick={handleNavigate}
				/>
				<Pagination />
			</div>
		</div>
	);
};

export default UserPage;
