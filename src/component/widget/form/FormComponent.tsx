import React, { ChangeEvent, ForwardedRef, LegacyRef, useState } from 'react';
import {
	Control,
	Controller,
	FieldError,
	FieldErrorsImpl,
	FieldValues,
	Merge,
} from 'react-hook-form';

type TTextInput = {
	label?: string;
	type?: 'email' | 'text' | 'number' | 'file' | 'date' | 'time';
	name?: string;
	control?: Control<FieldValues>;
	defaultValue?: string | number;
	onChange?: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	value?: string | number;
	className?: string;
	error?:
		| FieldError
		| Merge<FieldError, FieldErrorsImpl<FieldValues>>
		| undefined;
	placeholder?: string;
	my?: string;
};
export const TextField = React.forwardRef<HTMLInputElement, TTextInput>(
	(
		{
			label,
			type,
			name,
			control,
			onChange,
			value,
			className,
			error,
			placeholder,
		},
		ref: LegacyRef<HTMLInputElement>
	) => {
		return (
			<div className='mb-6 flex flex-col gap-2'>
				{label && (
					<label
						htmlFor={name}
						className='text-primary font-medium capitalize text-sm'
					>
						{label}
					</label>
				)}
				{['email', 'text', 'number', 'file', 'date', 'time'].includes(
					type || ''
				) &&
					(type === 'number' ? (
						<Controller
							name={name || ''}
							render={({ field: { onChange } }) => (
								<input
									type={type || 'text'}
									placeholder={placeholder}
									onChange={(e) => onChange(parseInt(e.target.value, 10))}
								/>
							)}
							control={control}
						/>
					) : (
						<input
							type={type}
							name={name}
							placeholder={placeholder}
							onChange={onChange}
							ref={ref}
							value={value}
							className={`text-sm outline-none ${
								error && 'border-2 border-red-500'
							} placeholder:text-sm ${className}`}
						/>
					))}
			</div>
		);
	}
);
export const TextAreaField = React.forwardRef<HTMLTextAreaElement, TTextInput>(
	({ label, name, onChange, className, error }, ref) => {
		return (
			<div className='border-2 border-grey01 rounded-md mb-7'>
				<label htmlFor={name} className='text-black font-light text-opacity-80'>
					{label}
				</label>
				<textarea
					name={name}
					rows={5}
					id={name}
					ref={ref}
					onChange={onChange}
					className={`text-sm ${
						error && 'border border-red-500'
					} placeholder:text-sm ${className}`}
				/>
			</div>
		);
	}
);

export const PasswordField = React.forwardRef<HTMLInputElement, TTextInput>(
	(
		{ label, name, className, onChange, error, my, placeholder, value },
		ref: LegacyRef<HTMLInputElement>
	) => {
		const [visible, setVisible] = useState(false);

		return (
			// <input
			// 	// type={visible ? 'text' : 'password'}
			// 	type='text'
			// 	// name={name}
			// 	// id={name}
			// 	placeholder={placeholder}
			// 	// value={value}
			// 	// onChange={onChange}
			// 	ref={ref}
			// 	className={`border-none w-full outline-none ${
			// 		error && 'border-red-500'
			// 	}`}
			// />
			<div
				className={`border-2 border-grey01 p-4 flex items-center rounded-md w-full ${my}`}
			>
				<input
					type={visible ? 'text' : 'password'}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					ref={ref}
					className={`border-none w-full outline-none ${
						error && 'border-red-500'
					}`}
				/>
				<span onClick={() => setVisible(!visible)}>
					{!visible ? (
						<small className='font-semibold text-cyan01 cursor-pointer'>
							SHOW
						</small>
					) : (
						<small className='font-semibold text-cyan01 cursor-pointer'>
							HIDE
						</small>
					)}
				</span>
			</div>
		);
	}
);
