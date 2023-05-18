import React from 'react';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<div className='container mx-auto h-full flex'>
				<div className='flex-1 relative'>
					<img src='/svgs/lendsqr.svg' className='mt-32 ml-24' />
					<img
						src='/images/auth-bg.png'
						alt='welcome'
						className='absolute inset-0 m-auto'
					/>
				</div>
				<div className='flex-1 box-shadow'>
					<div className='mt-[220px]'>
						<h1 className='text-blue0 font-bold text-4xl'>Welcome!</h1>
						<p>Enter details to login.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
