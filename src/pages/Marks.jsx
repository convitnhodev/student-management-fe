import React from 'react';
import Table from '../components/Table';

/**
 * This page shows the marks of all students with a specific subject.
 * It also allows the user to update the marks of a student
 * @returns JSX.Element as a page
 */
export default function Marks() {
	const data = {
		column_names: [
			"No.",
			"Name",
			"15min test",
			"45min test",
			"final test"
		],
		rows: [
			[1, "Nguyen Van A", 10, 10, 10],
			[2, "Nguyen Van B", 10, 10, 10],
			[3, "Nguyen Van C", 10, 10, 10],
			[4, "Nguyen Van D", 10, 10, 10],
			[5, "Nguyen Van E", 10, 10, 10]
		]
	}

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-4xl font-bold m-5">Marks</h1>
			<div className="flex flex-col items-center">
				<div className='flex w-full items-center m-3'>
					<span className="text-xl font-bold mr-10">Subject: Math</span>
					<span className="text-xl font-bold">Class:
						<select className="ml-2 text-xl font-bold">
							<option value="10A">10A</option>
							<option value="10B">10B</option>
							<option value="10C">10C</option>
							<option value="11A">11A</option>
						</select>
					</span>
					<button class="ml-auto text-xl bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">
						Cancel
					</button>
					<button class="ml-2 text-xl bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded">
						Save
					</button>
				</div>
				<Table data={data} />
			</div>
		</div>
	);
}
