import React from 'react';
import SidebarIcon from './SidebarIcon';
import { Link } from 'react-router-dom';
import {
  FaSchool,
  FaHome,
  FaUserGraduate,
  FaClipboardCheck,
  FaClipboardList,
  FaUser,
  FaSignOutAlt,
} from 'react-icons/fa';

/**
 * This is the sidebar component.
 * @returns JSX.Element as a component
 */
export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-[250px] flex flex-col bg-violet-900">
      <Link to={``}>
        <SidebarIcon icon={<FaSchool size="35" />} text="Student Management" />
      </Link>
      <hr className="border-violet-500" />
      <Link to={``}>
        <SidebarIcon icon={<FaHome size="30" />} text="Home" />
      </Link>
      <Link to={`student`}>
        <SidebarIcon icon={<FaUserGraduate size="30" />} text="Student" />
      </Link>
      <Link to={`marks/2`}>
        <SidebarIcon icon={<FaClipboardCheck size="30" />} text="Marks" />
      </Link>
      <Link to={`report`}>
        <SidebarIcon icon={<FaClipboardList size="30" />} text="Report" />
      </Link>
      <Link to={`profile`} className="mt-auto">
        <SidebarIcon icon={<FaUser size="30" />} text="Profile" />
      </Link>
      <Link to={`../signin`}>
        <SidebarIcon icon={<FaSignOutAlt size="30" />} text="Sign Out" />
      </Link>
    </div>
  );
}
