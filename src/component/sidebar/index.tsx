import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarItem } from '../../constants/sidebarData';

let activeStyle = {
	backgroundColor: '#39cdcc0f',
	borderColor: '#39CDCC',
};

type TSidebarItem = {
	url?: string;
	icon: string;
	dropdown?: boolean;
	list_name: string;
};

const List = (props: TSidebarItem) => (
	<li className={`mb-1 cursor-pointer list-none`}>
		<NavLink
			to={props.url || ''}
			className='flex items-center py-2 pl-6 gap-3 border-transparent md:border-l-4'
			style={({ isActive }) => (isActive ? activeStyle : undefined)}
		>
			<img src={props.icon} alt='item icon' />
			<p className='text-primary cursor-pointer capitalize hidden md:block'>
				{props.list_name}
			</p>
			{props.dropdown ? <img src='/svgs/switch.svg' alt='item icon' /> : ''}
		</NavLink>
	</li>
);

const Sidebar = () => {
	return (
		<div className='bg-white w-72 pt-10 flex sidebar-shadow flex-col gap-9 overflow-y-auto'>
			<List
				icon='/svgs/briefcase.svg'
				list_name='Switch Organization'
				dropdown
			/>
			<div className='flex flex-col gap-8'>
				<List url='/dashboard' icon='/svgs/home.svg' list_name='Dashboard' />
				<div className='flex flex-col gap-4'>
					{sidebarItem.map((item) => (
						<div key={item.id} className='flex flex-col gap-2'>
							<small className='uppercase ml-7'>{item.header}</small>
							{item.items.map((item) => (
								<List
									key={item.id}
									icon={item.icon}
									list_name={item.name}
									url={item.url}
								/>
							))}
						</div>
					))}
				</div>
			</div>
			<div className='border-t border-grey02 flex flex-col gap-10 pt-5 pb-2'>
				<List icon='/svgs/home.svg' list_name='logout' url='/auth/login' />
				<small className='ml-6'>v1.2.0 </small>
			</div>
		</div>
	);
};

export default Sidebar;
