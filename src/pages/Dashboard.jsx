import React from 'react';
import { Link, Outlet } from 'react-router-dom';

/**
 * This is the main page of the application.
 * @returns JSX.Element as a page
 */
export default function Dashboard() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to={``}>Home</Link>
					</li>
					<li>
						<Link to={`student/1`}>Student</Link>
					</li>
					<li>
						<Link to={`marks/2`}>Marks</Link>
					</li>
					<li>
						<Link to={`report`}>Report</Link>
					</li>
					<li>
						<Link to={`profile`}>Profile</Link>
					</li>
					<li>
						<Link to={`../signin`}>Logout</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}
