import React from "react";
import { FaBell } from "react-icons/fa";
import SidebarIcon from "./SidebarIcon";

export default function ReportTable({ data }) {
  const { column_names, rows } = data;

  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-violet-500">
          <thead className="text-xs text-violet-700 uppercase bg-violet-300">
            <tr>
              {column_names.map((name) => {
                return (
                  <th scope="col" key={name} className="py-3 px-6">
                    {name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              return (
                <tr
                  className="bg-violet-100 border-b hover:bg-violet-400"
                  key={`columns-${index}`}
                >
                  {/* <td className="p-4 w-4">
									<div className="flex items-center">
										<input id={index} onChange={handleClick} checked={isCheck.includes(index.toString())} type="checkbox" className="w-4 h-4 text-blue-600 bg-violet-100 rounded border-violet-300 focus:ring-blue-500 focus:ring-2 " />
									</div>
								</td> */}
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-violet-900 whitespace-nowrap"
                  >
                    {index + 1}
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-violet-900 whitespace-nowrap"
                  >
                    {row.class}
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-violet-900 whitespace-nowrap"
                  >
                    {row.total}
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-violet-900 whitespace-nowrap"
                  >
                    {row.pass}
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-6 font-medium text-violet-900 whitespace-nowrap"
                  >
                    {row.rate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="fixed top-1 right-1 m-1 p-2.5 items-center px-4 duration-300 cursor-pointer  ">
        <FaBell
          className="sidebar-icon-icon text-violet-500 hover:text-violet-900 visibles"
          size={40}
        />

<button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown divider <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<!-- Dropdown menu -->
<div id="dropdownDivider" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
    </div>
</div>

      </div>
    </>
  );
}
