import React from 'react';
// import { useState } from 'react'
import { FaPenSquare, FaTrash, FaCheckSquare } from 'react-icons/fa';

export default function Table({ data, isEditing }) {
	const { column_names, rows } = data;
	const [students, setStudents] = React.useState(rows);
	const [edits, setEdits] = React.useState([false]);
	const handleDelete = (index) => {
		const newRows = [...students];
		newRows.splice(index, 1);
		setStudents(newRows);
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
						{column_names.map((name) => {
							return (
								<th scope="col" key={name} className="py-3 px-6">
									{name}
								</th>
							);
						})}
						<th scope="col" className="py-3 px-6">
							Sửa
						</th>
						<th scope="col" className="py-3 px-6">
							Xoá
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
