import React from 'react';
import { ClipLoader } from 'react-spinners';

type TButton = {
	loading?: boolean;
	className?: string;
	onPress?: () => void;
	text: string;
	textSize?: string;
};
export const AppButton = ({
	onPress,
	loading,
	text,
	className,
	textSize,
}: TButton) => (
	<button
		disabled={loading}
		className={`rounded-lg w-full transition flex justify-center ease-in-out duration-700 ${
			className || 'bg-cyan01 capitalize py-4 text-white'
		}`}
		onClick={onPress}
	>
		<div className='flex items-center justify-between font-semibold'>
			<span className={`${textSize || 'md:text-sm text-sm'}`}>
				{loading !== true ? text : <ClipLoader />}
			</span>
		</div>
	</button>
);
