import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './client/components/HomePage';

function Router() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/home" element={<HomePage />} />
			</Routes>
		</Router>
	);
}

export default Router;
