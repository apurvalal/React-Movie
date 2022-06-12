import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignupForm from './client/components/SignupForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './client/components/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/signup" element={<SignupForm />} />
			<Route path="/home" element={<HomePage />} />
		</Routes>
	</Router>
);
