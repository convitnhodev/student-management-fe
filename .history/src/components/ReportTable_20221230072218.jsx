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
          className="sidebar-icon-icon text-violet-500 hover:text-violet-900 disabled "
          size={30}
        />
      </div>
    </>
  );
}
