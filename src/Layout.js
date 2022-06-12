import { Outlet, Link } from 'react-router-dom';

function Layout() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/home">HomePage</Link>
					</li>
					<li>
						<Link to="/">App</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export default Layout;
