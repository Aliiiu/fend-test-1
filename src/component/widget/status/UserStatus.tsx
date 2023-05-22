import React from 'react';

interface Props {
	status: string;
}

export const UserStatus = ({ status }: Props) => {
	const displayInactive = () => (
		<div className='bg-inactive rounded-[100px] flex justify-center items-center w-fit py-2 px-3'>
			<p className='text-primary'>Inactive</p>
		</div>
	);

	const displayActive = () => (
		<div className='rounded-[100px] bg-active flex justify-center items-center w-fit py-2 px-3'>
			<p className='text-green01'>Active</p>
		</div>
	);

	const displayPending = () => (
		<div className='rounded-[100px] bg-pending flex justify-center items-center w-fit py-2 px-3'>
			<p className='text-yellow01'>Pending</p>
		</div>
	);

	const displayBlacklisted = () => (
		<div className='rounded-[100px] bg-blacklisted flex justify-center items-center w-fit py-2 px-3'>
			<p className='text-red01'>Blacklisted</p>
		</div>
	);

	return (
		<div>
			{status === 'Active' && displayActive()}
			{status === 'Pending' && displayPending()}
			{status === 'Inactive' && displayInactive()}
			{status === 'Blacklisted' && displayBlacklisted()}
		</div>
	);
};

export default UserStatus;
