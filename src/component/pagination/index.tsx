import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchUsers, setCurrentPage } from '../../store/reducers/userSlice';
import React from 'react';
import './pagination.scss';

type Props = {
	currentItems: number[];
	itemsPerPage: number;
	event: React.SyntheticEvent | undefined;
	selected: number;
};

const PaginatedItems = ({ itemsPerPage }: Props) => {
	const dispatch = useAppDispatch();
	const pageCount = 16;

	const handlePageClick = (event: Props) => {
		dispatch(fetchUsers({ page: event.selected + 1 }));
		dispatch(setCurrentPage(event.selected + 1));
	};
	const { currentPage } = useAppSelector((state) => state.users);

	return (
		<>
			<ReactPaginate
				breakLabel='...'
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				marginPagesDisplayed={2}
				pageCount={pageCount}
				nextLabel={
					<svg
						width='8'
						height='12'
						viewBox='0 0 8 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0.993905 1.94274C0.152813 1.10165 1.45656 -0.159498 2.255 0.68165L7.00576 5.43241C7.38419 5.76873 7.38419 6.35718 7.00576 6.6935L2.38142 11.36C1.54033 12.159 0.279177 10.8973 1.12033 10.0568L5.1141 6.063L0.993905 1.94274Z'
							fill='#213F7D'
						/>
					</svg>
				}
				previousLabel={
					<svg
						width='8'
						height='12'
						viewBox='0 0 8 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M7.00609 10.0573C7.84719 10.8984 6.54344 12.1595 5.745 11.3184L0.994244 6.56759C0.61581 6.23127 0.61581 5.64282 0.994244 5.3065L5.61858 0.640017C6.45967 -0.158963 7.72082 1.10267 6.87967 1.94322L2.8859 5.937L7.00609 10.0573Z'
							fill='#213F7D'
						/>
					</svg>
				}
				containerClassName={'pagination'}
				disabledClassName={'pagination-link-disabled'}
				activeClassName={'pagination-link-active'}
				// TO RETAIN THE CURRENT PAGE NUMBER ON THE PAGINATION WHEN THE PAGE IS CHANGED
				initialPage={currentPage - 1}
			/>
		</>
	);
};

const Pagination = () => {
	const dispatch = useAppDispatch();

	return (
		<div className='pagination-wrapper bg-white'>
			<div className='show-quantity'>
				<span>Showing</span>
				<span className='select-quantity'>
					<select
						onChange={(e) => {
							dispatch(fetchUsers({ limit: parseInt(`${e.target.value}`) }));
						}}
						aria-label='quantity'
						className='quantity'
					>
						<option value='10'>10</option>
						<option value='25'>25</option>
						<option value='50'>50</option>
						<option value='100'>100</option>
					</select>
					<svg
						width='12'
						height='8'
						viewBox='0 0 12 8'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M10.0573 0.993783C10.8984 0.152691 12.1595 1.45644 11.3184 2.25487L6.56759 7.00563C6.23127 7.38407 5.64282 7.38407 5.3065 7.00563L0.640017 2.38129C-0.158963 1.5402 1.10267 0.279055 1.94322 1.1202L5.937 5.11398L10.0573 0.993783Z'
							fill='#213F7D'
						/>
					</svg>
				</span>
				<span>out of 100</span>
			</div>
			<nav className='pagination-nav'>
				<PaginatedItems
					itemsPerPage={4}
					currentItems={[]}
					event={undefined}
					selected={0}
				/>
			</nav>
		</div>
	);
};

export default Pagination;
