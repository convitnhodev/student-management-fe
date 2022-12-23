import React from 'react'
// import { useState } from 'react'

export default function Table({ data, isEditing }) {
	const { column_names, rows } = data
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
						{column_names.map(name => {
							return (
								<th scope="col" key={name} className="py-3 px-6">
									{name}
								</th>
							)
						})}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, index) => {
						return (
							<tr className="bg-violet-100 border-b hover:bg-violet-400" key={`columns-${index}`} >
								{/* <td className="p-4 w-4">
									<div className="flex items-center">
										<input id={index} onChange={handleClick} checked={isCheck.includes(index.toString())} type="checkbox" className="w-4 h-4 text-blue-600 bg-violet-100 rounded border-violet-300 focus:ring-blue-500 focus:ring-2 " />
									</div>
								</td> */}
								<td scope="row" className="py-4 px-6 font-medium text-violet-900 whitespace-nowrap">
									{index + 1}
								</td>
								<td scope="row" className="py-4 px-6 font-medium text-violet-900 whitespace-nowrap">
									{row.name}
								</td>
								{
									row.results.map(result => {
										return (
											<td scope="row" className="py-4 px-6 font-medium text-violet-900 whitespace-nowrap">
												<input disabled={!isEditing} type="text" className="w-10 border border-violet-300 rounded-md shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50" value={result} />
											</td>
										)
									})
								}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>

	)
}
