import React from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { AppButton } from '../../component/widget/button';
import {
	TextField,
	PasswordField,
} from '../../component/widget/form/FormComponent';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const { formState, register, handleSubmit, control } = useForm<FieldValues>({
		mode: 'onChange',
	});
	let navigate = useNavigate();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
		navigate('/');
	};
	return (
		<div className='container mx-auto h-full flex'>
			<div className='flex-1 relative'>
				<img
					src='/svgs/lendsqr.svg'
					className='mt-32 ml-24'
					alt='lendsqr logo'
				/>
				<img
					src='/images/auth-bg.png'
					alt='welcome'
					className='absolute inset-0 m-auto'
				/>
			</div>
			<div className='flex-1 box-shadow'>
				<div className='flex flex-col justify-center h-full pl-[100px]'>
					<h1 className='text-blue0 font-bold text-5xl'>Welcome!</h1>
					<p className='text-xl mt-3'>Enter details to login.</p>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='max-w-[447px] mt-16'
					>
						<TextField
							type='email'
							control={control}
							error={formState.errors['email']}
							className='border-2 border-grey01 p-4 rounded-md w-full'
							placeholder='Email'
							{...register('email', { required: true })}
						/>
						<PasswordField
							placeholder='Password'
							error={formState.errors['password']}
							{...register('password', { required: true })}
						/>
						<div className='mt-6 flex flex-col gap-8'>
							<small className='font-semibold cursor-pointer uppercase text-cyan01'>
								Forgot Password?
							</small>
							<AppButton text='LOG IN' />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
