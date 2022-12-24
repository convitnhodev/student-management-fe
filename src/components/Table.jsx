import React from 'react';
// import { useState } from 'react'
import { FaPenSquare, FaTrash, FaCheckSquare } from 'react-icons/fa';

export default function Table({ data, isEditing }) {
  const { column_names, rows } = data;
  const [students, setStudents] = React.useState(rows);
  const [edits, setEdits] = React.useState([false]);
  // const [isCheckAll, setIsCheckAll] = useState(false)
  // const [isCheck, setIsCheck] = useState([])

  // const toogleAll = (e) => {
  // 	setIsCheckAll(!isCheckAll)
  // 	setIsCheck(rows.map((item, index) => index.toString()))
  // 	if (isCheckAll) {
  // 		setIsCheck([])
  // 	}
  // }

  // const handleClick = (e) => {
  // 	const { id, checked } = e.target
  // 	setIsCheck([...isCheck, id])
  // 	if (!checked) {
  // 		setIsCheck(isCheck.filter(item => item !== id))
  // 	}
  // }
  const handleDelete = (index) => {
    const newRows = [...students];
    newRows.splice(index, 1);
    setStudents(newRows);
    // setRows(newRows);
  };

  const handleEdit = (index) => {
    const editBtn = document.getElementById(`edit-${index}`);
    const checkBtn = document.getElementById(`check-${index}`);
    editBtn.classList.toggle('hidden');
    checkBtn.classList.toggle('hidden');
    const newEdits = [...edits];
    newEdits[index] = !newEdits[index];
    setEdits(newEdits);
  };

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-violet-500">
        <thead className="text-xs text-violet-700 uppercase bg-violet-300">
          <tr>
            {/* <th scope="col" className="p-4">
							<div className="flex items-center">
								<input onChange={toogleAll} id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-violet-100 rounded border-violet-300 focus:ring-blue-500  focus:ring-2" />
								<label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
							</div>
						</th> */}
            {column_names.map((name) => {
              return (
                <th scope="col" key={name} className="py-3 px-6">
                  {name}
                </th>
              );
            })}
            <th scope="col" className="py-3 px-6">
              Edit
            </th>
            <th scope="col" className="py-3 px-6">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((row, index) => {
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
                        disabled={!edits[index]}
                        type="text"
                        className="w-32 border border-violet-300 rounded-md shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
                        defaultValue={result}
                      />
                    </td>
                  );
                })}
                <td className="py-4 px-6 font-medium text-violet-900 whitespace-nowrap">
                  <button
                    type="button"
                    id={`edit-${index}`}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-200 hover:bg-violet-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                    onClick={() => handleEdit(index)}
                  >
                    <FaPenSquare className="w-5 h-5 text-violet-500" />
                  </button>
                  <button
                    id={`check-${index}`}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-200 hover:bg-violet-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 hidden"
                    onClick={() => handleEdit(index)}
                  >
                    <FaCheckSquare className="w-5 h-5 text-violet-500" />
                  </button>
                </td>
                <td className="py-4 px-6 font-medium text-violet-900 whitespace-nowrap">
                  <button
                    type="button"
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-200 hover:bg-violet-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                    onClick={() => handleDelete(index)}
                  >
                    <FaTrash className="w-5 h-5 text-violet-500" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
