import React from 'react';
import { Link } from 'react-router-dom';

/**
 * This page allows the user to sign up.
 * @returns JSX.Element as a page
 */
export default function SignUp() {
	return (
		<>
			<div>Sign Up Page</div>
			<div>
				<Link to='/dashboard'>Go to Dashboard</Link>
			</div>
			<div>
				<Link to='/signin'>Sign In</Link>
			</div>
		</>
	);
}
