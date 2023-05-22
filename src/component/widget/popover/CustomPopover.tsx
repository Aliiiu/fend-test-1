import React, { Fragment, ReactNode } from 'react';
import { Popover, Transition } from '@headlessui/react';
import ThreeDotsVertical from '../../icons/ThreeDotsVertical';
import FilterIcon from '../../icons/FilterIcon';

type TPopover = {
	children: ReactNode;
	showFilter?: boolean;
};

export default function CustomPopover({ children, showFilter }: TPopover) {
	return (
		<div>
			<Popover className=''>
				{({ open }) => (
					<>
						<Popover.Button>
							{showFilter ? <FilterIcon /> : <ThreeDotsVertical />}
						</Popover.Button>
						<Transition
							as={Fragment}
							enter='transition ease-out duration-200'
							enterFrom='opacity-0 translate-y-1'
							enterTo='opacity-100 translate-y-0'
							leave='transition ease-in duration-150'
							leaveFrom='opacity-100 translate-y-0'
							leaveTo='opacity-0 translate-y-1'
						>
							<Popover.Panel
								className={`absolute z-10 mt-3 w-fit ${
									showFilter ? '' : 'right-2 px-0'
								}`}
							>
								<div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
									{children}
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</div>
	);
}
