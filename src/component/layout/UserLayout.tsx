import React, { ReactNode, useEffect } from 'react';
import StarFilled from '../icons/StarFilled';
import StarOutline from '../icons/StarOutline';
import { Tab } from '@headlessui/react';
import ArrowBack from '../icons/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchUser } from '../../store/reducers/userSlice';
import { tabs } from '../../constants/userDetailsTabData';

const UserLayout = ({ children }: { children: ReactNode }) => {
	let navigate = useNavigate();
	let { id } = useParams();
	const dispatch = useAppDispatch();
	const { userDetails, loading, error, errMsg } = useAppSelector(
		(state) => state.users
	);

	useEffect(() => {
		dispatch(fetchUser(id || ''));
	}, []);

	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ');
	}

	return (
		<div>
			<button
				onClick={() => navigate('/users')}
				className='flex gap-2 items-center'
			>
				<ArrowBack />
				<span className=''>Back to Users</span>
			</button>
			<div className='flex justify-between mt-6 items-center'>
				<h1 className='font-medium text-2xl'>User Details</h1>
				<div className='flex gap-5'>
					<button className='text-red01 border border-red01 rounded-lg uppercase py-3 px-4 font-semibold'>
						Blacklist User
					</button>
					<button className='text-green01 border border-green01 rounded-lg uppercase py-3 px-4 font-semibold'>
						Activate User
					</button>
				</div>
			</div>
			<div className='mt-10 px-8 w-full rounded bg-white pt-7 profile-card'>
				<div className='mb-[50px] flex items-center'>
					<div className='flex gap-5 items-center pr-8'>
						<img
							src={userDetails?.profile?.avatar || ''}
							alt='dp'
							className='rounded-full w-[100px] h-[100px]'
						/>
						<div className='flex flex-col gap-1'>
							<h2 className='name'>
								{userDetails?.profile?.firstName} {''}
								{userDetails?.profile?.lastName}
							</h2>
							<p className='account-number'>{userDetails.accountNumber}</p>
						</div>
					</div>
					<div className='border-x border-grey04 h-20 px-8 flex justify-center items-center'>
						<div className='flex flex-col gap-2'>
							<h5>{`User’s Tier`}</h5>
							<div className='flex gap-2'>
								<StarFilled />
								<StarOutline />
								<StarOutline />
							</div>
						</div>
					</div>
					<div className={'pl-8'}>
						<h2 className='font-medium text-2xl'>
							{userDetails?.accountBalance}
						</h2>
						<p className='text-xs'>
							{userDetails?.profile?.bvn}/{userDetails?.orgName}
						</p>
					</div>
				</div>
				<div className={`${'mt-16'}`}>
					<Tab.Group>
						<Tab.List
							className={`relative flex justify-between px-7 items-center`}
						>
							{Object.keys(tabs).map((content, index) => (
								<Tab
									key={index}
									onClick={() =>
										navigate(
											`${
												index != 0
													? content.toLowerCase().replace(/ /g, '-')
													: ''
											}`
										)
									}
									className={({ selected }) =>
										classNames(
											'relative text-base py-2 outline-none cursor-pointer ransition-all duration-[300ms]',
											selected
												? 'px-6 border-b-2 border-cyan01 text-cyan01'
												: ''
										)
									}
								>
									{content}
								</Tab>
							))}
						</Tab.List>
					</Tab.Group>
				</div>
			</div>
			{children}
		</div>
	);
};

export default UserLayout;
