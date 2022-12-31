import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegCheckSquare, FaRegWindowClose } from "react-icons/fa";

/**
 * This page shows the marks of all students with a specific subject.
 * It also allows the user to update the marks of a student
 * @returns JSX.Element as a page
 */
export default async function Notify() {
  let [notify, setNotify] = useState([]);

  // let temp = await fetch("http://localhost:8080/notification/list");
  // temp = await temp.json();
  // setNotify(temp);
  const data = {
    column_names: ["STT", "User", "Check"],
    rows: notify,
    // [
    //   { name: "Nguyen Van A", results: 10 },
    //   { name: "Nguyen Van B", results: 10 },
    //   { name: "Nguyen Van C", results: 10 },
    //   { name: "Nguyen Van D", results: 10 },
    //   { name: "Nguyen Van E", results: 10 },
    //   { name: "Nguyen Van F", results: 10 },
    //   { name: "Nguyen Van G", results: 10 },
    // ],
  };
  return (
    //bảng có 3 cột: STT, Họ và tên, điểm
    <div className="flex flex-col items-center pt-10 w-full h-full">
      <h1 className="text-4xl font-bold m-5 text-violet-700">Notification</h1>
      <div className="overflow-y-auto min-w-min shadow-md sm:rounded-lg h-3/5 ">
        <table className=" text-sm text-left text-violet-500  ">
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
          <tbody>
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
        {/* <table class="w-full border-2">
          <thead>
            <tr class="border-2">
              <td class="w-4/12">Id</td>
              <td class="w-4/12">Name</td>
              <td class="w-4/12">Address</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="w-4/12">1</td>
              <td class="w-4/12">Name 1</td>
              <td class="w-4/12  max-h-5">
                <div class="w-full h-5 overflow-y-auto">
                  Address 1 Address 1Address 1Address 1Address 1Address 1Address
                  1 Address 1Address 1Address 1Address 1Address 1Address 1
                  Address 1Address 1Address 1Address 1Address 1 Address 1Address
                  1Address 1Address 1Address 1 Address 1Address 1Address
                  1Address 1Address 1 Address 1Address 1Address 1Address
                  1Address 1 Address 1Address 1Address 1Address 1Address 1
                  Address 1Address 1Address 1Address 1Address 1 Address 1Address
                  1Address 1Address 1Address 1 Address 1Address 1Address
                  1Address 1Address 1 Address 1Address 1Address 1Address
                  1Address 1 Address 1Address 1Address 1Address 1Address 1
                </div>
              </td>
            </tr>
          </tbody>
        </table> */}
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
