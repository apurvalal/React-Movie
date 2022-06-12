import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ Login, SignUp, error }) {
	const navigate = useNavigate();
	const [details, setDetails] = useState({ name: '', email: '', password: '' });
	function submitHandler() {
		Login(details);
	}

	function navigateToSignUp() {
		navigate('/signup', { SignUp: SignUp });
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="form-inner">
				<h2>Login</h2>
				{error != '' ? <div className="error">{error}</div> : ''}
				<div className="form-group">
					<label htmlFor="email">Email: </label>
					<input
						type="email"
						name="email"
						id="email"
						onChange={e => setDetails({ ...details, email: e.target.value })}
						value={details.email}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={e => setDetails({ ...details, password: e.target.value })}
						value={details.password}
					/>
				</div>
				<div className="login-buttons">
					<input type="submit" value="Login" />
					<input
						id="sumbission"
						onClick={navigateToSignUp}
						value="Not registered yet? Sign Up"
					/>
				</div>
			</div>
		</form>
	);
}

export default LoginForm;
