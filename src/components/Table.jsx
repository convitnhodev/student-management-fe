import React from 'react'

export default function Table({ data }) {
	const { column_names, rows } = data
	return (
		<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left text-violet-500">
				<thead className="text-xs text-violet-700 uppercase bg-violet-300">
					<tr>
						<th scope="col" className="p-4">
							<div className="flex items-center">
								<input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-violet-100 rounded border-violet-300 focus:ring-blue-500  focus:ring-2" />
								<label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
							</div>
						</th>
						{column_names.map(name => {
							return (
								<th scope="col" key={name} className="py-3 px-6">
									{name}
								</th>
							)
						})}
						<th scope="col" className="py-3 px-6">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row, index) => {
						return (
							<tr className="bg-violet-100 border-b hover:bg-violet-400" key={`columns-${index}`} >
								<td className="p-4 w-4">
									<div className="flex items-center">
										<input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-violet-100 rounded border-violet-300 focus:ring-blue-500 focus:ring-2 " />
										<label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
									</div>
								</td>
								{row.map((item, index) => {
									return (<td scope="row" key={`row-${index}`} className="py-4 px-6 font-medium text-violet-900 whitespace-nowrap">
										{item}
									</td>)
								})}
								<td className="flex items-center py-4 px-6 space-x-3">
									<a href="#" className="font-medium text-violet-700 hover:underline">Edit</a>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>

	)
}
