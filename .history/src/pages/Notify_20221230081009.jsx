import React from "react";
import { useState } from "react";
// import Table from "../components/Table";

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
    ],
  };
  return (
    //bảng có 3 cột: STT, Họ và tên, điểm
    <div className="flex flex-col items-center pt-6 w-full h-full">
      <div className="overflow-x-auto min-w-min shadow-md sm:rounded-lg">
        <table className=" text-sm text-left text-violet-500">
          <thead className="text-xs text-violet-700 uppercase bg-violet-300">
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
    </div>
  );
}