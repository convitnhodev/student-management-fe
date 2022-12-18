import React from 'react';

export default function SidebarIcon({ icon, text }) {
	return (
		<div className='sidebar-icon m-1 p-2.5 flex items-center px-4 duration-300 cursor-pointer hover:bg-violet-600 text-white'>
			{icon}
			<span className='sidebar-icon-text px-2'>{text}</span>
		</div>
	);
}