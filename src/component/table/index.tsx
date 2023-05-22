import React from 'react';
import { TUserState } from '../../store/reducers';
import './table.scss';
import CustomPopover from '../widget/popover/CustomPopover';
import FilterPopover from '../widget/popover/FilterPopover';

interface headerType {
	title?: string;
	align?: string;
	render?: Function;
}

// type headerType = headerInt[];

interface Props {
	rows: any;
	headers?: headerType[];
	showHead?: boolean;
	onRowClick?: Function | ((x?: { [x: string]: any } | string) => void);
	allowRowClick?: boolean;
}

const CustomTable = ({
	headers,
	rows,
	showHead = true,
	onRowClick = () => null,
	allowRowClick = true,
}: Props) => {
	return (
		<div className='table-wrapper relative'>
			<table>
				{showHead && (
					<thead>
						<tr>
							{headers?.map((header) => {
								return (
									<th key={header.title} className='text-left'>
										<div className='flex gap-4'>
											{header.title}
											{(header.title || '').length > 0 ? (
												<CustomPopover showFilter={true}>
													<FilterPopover />
												</CustomPopover>
											) : (
												''
											)}
										</div>
									</th>
								);
							})}
						</tr>
					</thead>
				)}
				<tbody>
					{rows.map((row: TUserState) => (
						<tr key={row?.id}>
							{headers?.map((header) => {
								return (
									<td key={header.title} className='text-left'>
										{header && header?.render?.(row)}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CustomTable;
