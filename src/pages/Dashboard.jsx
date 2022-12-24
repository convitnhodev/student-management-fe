import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

/**
 * This is the main page of the application.
 * @returns JSX.Element as a page
 */
export default function Dashboard() {
	return (
		<div className="flex bg-violet-100 h-screen">
			<Sidebar />
			<div className="ml-[250px] w-full">
				<Outlet />
			</div>
		</div>
	);
}
