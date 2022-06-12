import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm({ SignUp }) {
	const [details, setDetails] = useState({ name: '', email: '', password: '' });
	const navigate = useNavigate();
	function submitHandler() {
		SignUp(details);
		navigate('/');
	}

	function navigateToLogin() {
		navigate('/');
	}

	return (
		<div className="App">
			<form onSubmit={submitHandler}>
				<div className="form-inner">
					<h2>Sign Up</h2>
					<div className="form-group">
						<label htmlFor="name">Name: </label>
						<input
							type="text"
							name="name"
							id="name"
							onChange={e => setDetails({ ...details, name: e.target.value })}
							value={details.name}
						/>
					</div>
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
							onChange={e =>
								setDetails({ ...details, password: e.target.value })
							}
							value={details.password}
						/>
					</div>
					<div className="login-buttons">
						<input type="submit" value="Sign Up" />
						<input
							className="sumbission"
							onClick={navigateToLogin}
							value="Already a member? Login"
						/>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SignupForm;
