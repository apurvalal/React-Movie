import React, { useState } from 'react';
import LoginForm from './client/components/LoginForm';
import { useNavigate } from 'react-router-dom';
import HomePage from './client/components/HomePage';

function App() {
	const users = [
		{
			email: 'a@a.com',
			password: 'a',
		},
		{
			email: 'b@b.co',
			password: 'b',
		},
	];

	const [user, setUser] = useState({ name: '', email: '' });
	const [error, setError] = useState('');

	const Login = details => {
		console.log(details);
		if (
			// details.email == adminUser.email &&
			// details.password == adminUser.password
			users.some(item => item.email == details.email) &&
			users.some(item => item.password == details.password)
		) {
			console.log('Logged In');
			setUser({
				name: details.name,
				email: details.email,
			});
		} else {
			setError('Details do not match');
		}
	};

	const SignUp = details => {
		users.push(details);
		console.log('Signed Up!');
	};

	const nav = useNavigate();
	return (
		<div className="App">
			{user.email != '' ? (
				nav('/home')
			) : (
				<LoginForm Login={Login} SignUp={SignUp} OK="OKKKK" error={error} />
			)}
		</div>
	);
}

export default App;
