import React from 'react';
import { Input } from 'antd';
import './topbar.scss';

const { Search } = Input;

const Topbar = () => {
	const onSearch = (value: string) => console.log(value);
	return (
		<div className='bg-white h-24 pl-7 pr-16 flex justify-between'>
			<div className='flex gap-40 items-center'>
				<img src='/svgs/lendsqr.svg' alt='lendsqr logo' />
				<Search
					placeholder='Search for anything'
					onSearch={onSearch}
					enterButton
					className='custom-search'
				/>
			</div>
			<div className='flex items-center gap-12'>
				<a href='/' className='text-blue01 underline capitalize'>
					Docs
				</a>
				<div className='flex items-center gap-8'>
					<img src='/svgs/notify.svg' alt='notify icon' />
					<div className='flex items-center gap-3'>
						<img src='/svgs/avatar.svg' alt='dp' />
						<div className='flex items-center gap-2'>
							<h5>Adedeji</h5>
							<img src='/svgs/dropdown.svg' alt='dropdwon icon' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
