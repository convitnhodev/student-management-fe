import React from 'react';
import { Link } from 'react-router-dom';

/**
 * This page allows the user to sign in.
 * @returns JSX.Element as a page
 */
export default function SignIn() {
	return (
		<>
			<div>Sign In Page</div>
			<div>
				<Link to='/dashboard'>Go to Dashboard</Link>
			</div>
			<div>
				<Link to='/signup'>Sign Up</Link>
			</div>
		</>
	);
}
