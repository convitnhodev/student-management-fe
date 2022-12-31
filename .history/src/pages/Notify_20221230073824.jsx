import React from "react";
import { useState } from "react";
import Table from "../components/Table";

/**
 * This page shows the marks of all students with a specific subject.
 * It also allows the user to update the marks of a student
 * @returns JSX.Element as a page
 */
export default function Notify() {
  const data = {
    column_names: [
      "STT",
      "Họ và tên",
      "Kiểm tra 15p",
      "Kiểm tra 1 tiết",
      "Kiểm tra cuối HK",
    ],
    rows: [
      { name: "Nguyen Van A", results: [10, 10, 10] },
      { name: "Nguyen Van B", results: [10, 10, 10] },
      { name: "Nguyen Van C", results: [10, 10, 10] },
      { name: "Nguyen Van D", results: [10, 10, 10] },
      { name: "Nguyen Van E", results: [10, 10, 10] },
      { name: "Nguyen Van F", results: [10, 10, 10] },
      { name: "Nguyen Van G", results: [10, 10, 10] },
    ],
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold m-5">Điểm</h1>
      <div className="flex flex-col items-center">
        <div className="flex w-full items-center m-3">
          <span className="text-xl font-bold">Môn: Toán</span>
          <span className="text-xl font-bold mx-4">
            Lớp:
            <select className="border border-violet-300 rounded-md shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50 ml-2 text-xl font-bold">
              <option value="10A">10A</option>
              <option value="10B">10B</option>
              <option value="10C">10C</option>
              <option value="11A">11A</option>
            </select>
          </span>
          <span className="text-xl font-bold">
            Học kỳ:
            <select className="border border-violet-300 rounded-md shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50 ml-2 text-xl font-bold">
              <option value="10A">1</option>
              <option value="10B">2</option>
            </select>
          </span>
        </div>
        <Table data={data} isEditing={isEditing} />
      </div>
    </div>
  );
}
