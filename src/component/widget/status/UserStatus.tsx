import React from 'react';

interface Props {
	status: string;
}

export const UserStatus = ({ status }: Props) => {
	const displayInactive = () => (
		<div className='bg-inactive rounded-[100px]'>
			<p className='text-primary'>Inactive</p>
		</div>
	);

	const displayActive = () => (
		<div className='rounded-[100px] bg-active'>
			<p className='text-green01'>Active</p>
		</div>
	);

	const displayPending = () => (
		<div className='rounded-[100px] bg-pending'>
			<p className='text-yellow01'>Pending</p>
		</div>
	);

	const displayBlacklisted = () => (
		<div className='rounded-[100px] bg-blacklisted'>
			<p className='text-red01'>Blacklisted</p>
		</div>
	);

	return (
		<div>
			{status === 'active' && displayActive()}
			{status === 'pending' && displayPending()}
			{status === 'completed' && displayInactive()}
			{status === 'canceled' && displayBlacklisted()}
		</div>
	);
};

export default UserStatus;
