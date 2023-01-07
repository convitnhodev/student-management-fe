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
    //bảng có 3 cột: STT, Họ và tên, điểm
    <div>
      <Table data={data} />
    </div>
  );
}
