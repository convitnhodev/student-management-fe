import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

/**
 * This is the main page of the application.
 * @returns JSX.Element as a page
 */
export default function Dashboard() {
	return (
		<>
			<Sidebar />
			<Outlet />
		</>
	);
}
