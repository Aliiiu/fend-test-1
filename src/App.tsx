import React from 'react';
import './App.scss';
import {
	PasswordField,
	TextField,
} from './component/widget/form/FormComponent';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AppButton } from './component/widget/button';
import IndexRoute from './routes/indexRoute';

function App() {
	const { formState, register, handleSubmit, control } = useForm<FieldValues>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	return (
		<div className='App'>
			<IndexRoute />
		</div>
	);
}

export default App;
