import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

/**
 * This is the main page of the application.
 * @returns JSX.Element as a page
 */
export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[250px] w-full min-h-screen bg-violet-100">
        <Outlet />
      </div>
    </div>
  );
}
