import React from "react";
import { useState } from "react";
import { FaRegCheckSquare, FaRegWindowClose } from "react-icons/fa";

/**
 * This page shows the marks of all students with a specific subject.
 * It also allows the user to update the marks of a student
 * @returns JSX.Element as a page
 */
export default function Notify() {
  const data = {
    column_names: ["STT", "User", "Check"],
    rows: [
      { name: "Nguyen Van A", results: 10 },
      { name: "Nguyen Van B", results: 10 },
      { name: "Nguyen Van C", results: 10 },
      { name: "Nguyen Van D", results: 10 },
      { name: "Nguyen Van E", results: 10 },
      { name: "Nguyen Van F", results: 10 },
      { name: "Nguyen Van G", results: 10 },
      { name: "Nguyen Van G", results: 10 },
      { name: "Nguyen Van G", results: 10 },
      { name: "Nguyen Van G", results: 10 },
    ],
  };
  return (
    //bảng có 3 cột: STT, Họ và tên, điểm
    <div className="flex flex-col items-center pt-10 w-full h-full">
      <h1 className="text-4xl font-bold m-5 text-violet-700">Notification</h1>
      <thead className="text-xs text-violet-700 uppercase bg-violet-300 overflow-x-auto min-w-min shadow-md sm:rounded-lg h-3/5">
        <tr>
          {data.column_names.map((name) => {
            return (
              <th scope="col" key={name} className="py-3 px-24">
                {name}
              </th>
            );
          })}
        </tr>
      </thead>
      <div className="overflow-x-auto min-w-min shadow-md sm:rounded-lg h-3/5 ">
        <table className=" text-sm text-left text-violet-500  ">
          <tbody className="">
            {data.rows.map((row, index) => {
              return (
                <tr
                  className="bg-violet-100 border-b hover:bg-violet-400 text-center "
                  key={`columns-${index}`}
                >
                  <td
                    scope="row"
                    className="py-4 px-24 font-medium text-violet-900 whitespace-nowrap"
                  >
                    {index + 1}
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-24 font-medium text-violet-900 whitespace-nowrap"
                  >
                    {row.name}
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-24 font-medium text-violet-900 whitespace-nowrap"
                  >
                    <input type="checkbox" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <button className="bg-violet-500 mt-3 rounded mr-2 hover:text-violet-700 text-white shadow-md">
          <div className=" m-1 p-2.5 flex items-center px-4 duration-300 cursor-pointer ">
            {<FaRegCheckSquare size={30} />}
            <span className="sidebar-icon-text px-2">Accept</span>
          </div>
        </button>
        <button className="bg-violet-500 mt-3 rounded ml-2 hover:text-violet-700 text-white shadow-md">
          <div className=" m-1 p-2.5 flex items-center px-4 duration-300 cursor-pointer ">
            {<FaRegWindowClose size={30} />}
            <span className="sidebar-icon-text px-2">Refuse</span>
          </div>
        </button>
      </div>
    </div>
  );
}
