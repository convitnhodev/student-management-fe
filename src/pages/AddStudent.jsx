import React from 'react';
import { useEffect } from 'react';
const AddStudent = ({ isOpen, onAddStudent, cancelOpen }) => {
	const modalHandler = () => {
		const modal = document.getElementById('modal');
		modal.classList.toggle('hidden');
	};

	useEffect(() => {
		if (isOpen) {
			modalHandler();
		}
	}, [isOpen]);

	const cancelOpenHandler = () => {
		cancelOpen();
		modalHandler();
	};

	const addStudentHandler = () => {
		const name = document.getElementById('fullName').value;
		const gender = document.querySelector('input[name]:checked').value;
		const date = document.getElementById('date').value;
		const address = document.getElementById('address').value;
		const email = document.getElementById('email').value;
		const student = {
			name,
			gender,
			date,
			address,
			email,
		};
		onAddStudent(student);
		modalHandler();
	};

	return (
		<div>
			<div
				className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center hidden"
				id="modal"
			>
				<div
					role="alert"
					className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
				>
					<div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
						<h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-center text-xl">
							Thông tin học sinh
						</h1>
						<label
							htmlFor="fullName"
							className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
						>
							Họ và tên
						</label>
						<input
							name="fullName"
							id="fullName"
							className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
							placeholder="Nhập họ tên học sinh"
						/>
						<div>
							<input
								type="radio"
								id="male"
								name="gender"
								value="Male"
								className="mr-3"
							/>
							<label htmlFor="male" className="mr-10">
								Nam
							</label>
							<input
								type="radio"
								id="female"
								name="gender"
								value="Female"
								className="mr-3"
							/>
							<label htmlFor="female">Nữ</label>
						</div>

						<label
							htmlFor="date"
							className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
						>
							Ngày tháng năm sinh
						</label>
						<div className="relative mb-5 mt-2">
							<div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler icon-tabler-calendar-event"
									width={20}
									height={20}
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" />
									<rect x={4} y={5} width={16} height={16} rx={2} />
									<line x1={16} y1={3} x2={16} y2={7} />
									<line x1={8} y1={3} x2={8} y2={7} />
									<line x1={4} y1={11} x2={20} y2={11} />
									<rect x={8} y={15} width={2} height={2} />
								</svg>
							</div>

							<input
								id="date"
								className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
								placeholder="MM/DD/YYYY"
							/>
						</div>
						<label
							htmlFor="address"
							className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
						>
							Địa chỉ
						</label>
						<input
							name="address"
							id="address"
							className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
							placeholder="Nhập địa chỉ"
						/>
						<label
							htmlFor="email"
							className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
						>
							Email
						</label>
						<input
							name="email"
							id="email"
							className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
							placeholder="Nhập email"
						/>
						<div className="flex items-center justify-start w-full">
							<button
								onClick={addStudentHandler}
								className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
							>
								Xác nhận
							</button>
							<button
								className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
								onClick={() => cancelOpenHandler()}
							>
								Huỷ
							</button>
						</div>
						<div
							className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
							onClick={() => cancelOpenHandler()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-label="Close"
								className="icon icon-tabler icon-tabler-x"
								width={20}
								height={20}
								viewBox="0 0 24 24"
								strokeWidth="2.5"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" />
								<line x1={18} y1={6} x2={6} y2={18} />
								<line x1={6} y1={6} x2={18} y2={18} />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AddStudent;
