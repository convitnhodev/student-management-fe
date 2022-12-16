import React from 'react';
import { Link } from 'react-router-dom';

/**
 * This is the sidebar component.
 * @returns JSX.Element as a component
 */
export default function Sidebar() {
	return (
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
	);
}
