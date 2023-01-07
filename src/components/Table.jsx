import React from 'react';
import { useEffect } from 'react';
// import { useState } from 'react'
import { FaPenSquare, FaTrash, FaCheckSquare } from 'react-icons/fa';

export default function Table({ data, isEditing }) {
  console.log(data);
  const { column_names, rows } = data;
  const [students, setStudents] = React.useState(rows);

  useEffect(() => {
    setStudents(rows);
  }, [data]);

  return (
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
          {students.map((row, index) => {
            return (
              <tr
                className="bg-violet-100 border-b hover:bg-violet-400"
                key={`columns-${index}`}
              >
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
                  {row.name}
                </td>
                {row.results.map((result) => {
                  return (
                    <td
                      scope="row"
                      className="py-4 px-6 font-medium text-violet-900 whitespace-nowrap"
                      key={`result-${result}`}
                    >
                      <input
                        disabled={true}
                        type="text"
                        className="w-32 border border-violet-300 rounded-md shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
                        defaultValue={result}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
