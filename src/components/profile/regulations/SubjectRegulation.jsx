import React, { useEffect, useState } from "react";

const SubjectRegulation = (props) => {
	const [allSubject, setAllSubject] = useState([]);
	const [nSubject, setNSubject] = useState([]);

	useEffect(() => {
		setAllSubject(props.teachers);
	}, [props.teachers]);

	useEffect(() => {
		if (props.subjects === null) setAllSubject([]);
		else {
			setAllSubject(props.subjects);

			let subjectObj = props.subjects;

			for (let i = 0; i < subjectObj.length; i++) {
				subjectObj[i] = {
					...subjectObj[i],
					isEdit: false,
				};
				setNSubject((array) => [
					...array,
					{
						title: subjectObj[i].title,
					},
				]);
			}

		}
	}, [props.subjects]);

	const handleEdit = (index) => {
		let setArray = [...allSubject];
		let item = { ...setArray[index], isEdit: !setArray[index].isEdit };
		setArray[index] = item;
		setAllSubject(setArray);
	};

	const handleSubmit = async (index) => {
		let setArray = [...allSubject];
		let item = { ...setArray[index], isEdit: !setArray[index].isEdit };
		setArray[index] = item;
		setAllSubject(setArray);

		// call API
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(nClass[index]),
		};

		// await fetch("http://localhost:8080/class/")
		resetEditText();
	};

	const changeSubject = (e, i) => {
		let setArray = [...nSubject];
		let item = { ...setArray[i], title: e.target.value };
		setArray[i] = item;
		setNSubject(setArray);
	};

	const handleDelete = async (i) => {
		try {
			const requestOptions = {
				method: "DELETE",
			};
			await fetch(`http://localhost:8080/subject/delete?id=${allSubject[i].id}`, requestOptions);
			props.setFlat(!props.flat);
		} catch (error) {
			console.log(error);
		}
	};

	const resetEditText = () => {
		for (let i = 0; i < allSubject.length; i++) {
			let setArray = [...nSubject];
			let item = { ...setArray[i], title: allSubject[i].title };
			setArray[i] = item;
			setNSubject(setArray);
		}
	};

	return (
		<div className="p-5 border border-gray-200 border-b-0">
			<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>
							<th scope="col" className="py-3 px-6">
								Môn học
							</th>
							<th scope="col" className="py-3 px-6 text-center">
								<button
									type="button"
									data-modal-toggle="add-subject-modal"
									className="uppercase text-green-600 hover:underline"
								>
									Thêm môn học
								</button>
							</th>
						</tr>
					</thead>
					<tbody>
						{allSubject.map((s, key) => {
							return (
								<tr key={key} className="bg-white border-b hover:bg-gray-50">
									<th
										scope="row"
										className="w-2/5 py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
									>
										{s.isEdit ? (
											<input
												type="text"
												className="border-none w-full bg-purple-100 rounded-sm text-sm font-normal"
												value={nSubject[key].title}
												onChange={(e) => changeSubject(e, key)}
											/>
										) : (
											s.title
										)}
									</th>
									<td className="w-1/5 py-4 px-6  text-center">
										{s.isEdit ? (
											<button
												type="button"
												data-modal-toggle="edit-class-modal"
												className="font-medium text-green-600 hover:underline pr-6"
												onClick={() => handleSubmit(key)}
											>
												Đồng ý
											</button>
										) : (
											<button
												type="button"
												data-modal-toggle="edit-subject-modal"
												className="font-medium text-blue-600 hover:underline pr-6"
												onClick={() => handleEdit(key)}
											>
												Sửa
											</button>
										)}
										<button
											type="button"
											data-modal-toggle="delete-modal"
											className="font-medium text-red-600 hover:underline"
											onClick={() => handleDelete(key)}
										>
											Xóa
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SubjectRegulation;
