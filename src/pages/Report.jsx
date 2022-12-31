import React from 'react';
import { useState } from 'react';
import ReportTable from '../components/ReportTable';

/**
 * This page allows to generate a subject report
 * or a term report.
 * @returns JSX.Element as a page
 */
export default function Report() {
	const data = {
		column_names: [
			"STT",
			"Lớp",
			"Sĩ Số",
			"Số lượng đạt",
			"Tỷ lệ"
		],
		rows: [
			{ class: "10A", total: 30, pass: 20, rate: 0.67 },
			{ class: "10B", total: 30, pass: 20, rate: 0.67 },
			{ class: "10C", total: 30, pass: 20, rate: 0.67 },
			{ class: "11A", total: 30, pass: 20, rate: 0.67 },
			{ class: "11B", total: 30, pass: 20, rate: 0.67 },
			{ class: "11C", total: 30, pass: 20, rate: 0.67 },
			{ class: "12A", total: 30, pass: 20, rate: 0.67 },
			{ class: "12B", total: 30, pass: 20, rate: 0.67 },
			{ class: "12C", total: 30, pass: 20, rate: 0.67 },
		]
	}

	const handleClick = () => {
		return;
	}

	const exportButton = <button onClick={handleClick} class="ml-2 text-xl bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">
		Xuất
	</button>

	return (
		<div className="flex items-center justify-around mt-5">
			<div className="flex flex-col items-center">
				<div className="text-2xl font-bold">
					Báo cáo tổng kết môn
				</div>
				<div className='flex w-full items-center m-3'>
					<span className="text-xl mr-4">Môn:
						<select className="border border-violet-300 rounded-md shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50 ml-2 text-xl">
							<option value="math">Toán</option>
							<option value="physics">Lý</option>
							<option value="chemistry">Hoá</option>
							<option value="english">Anh</option>
						</select>
					</span>
					<span className="text-xl">Học kỳ:
						<select className="border border-violet-300 rounded-md shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50 ml-2 text-xl">
							<option value="1">1</option>
							<option value="2">2</option>
						</select>
					</span>
					<div className="ml-auto">
						{exportButton}
					</div>
				</div>
				<ReportTable data={data} />
			</div>
			<div className="flex flex-col items-center">
				<div className="text-2xl font-bold">
					Báo cáo tổng kết học kỳ
				</div>
				<div className='flex w-full items-center m-3'>
					<span className="text-xl">Học kỳ:
						<select className="border border-violet-300 rounded-md shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50 ml-2 text-xl">
							<option value="1">1</option>
							<option value="2">2</option>
						</select>
					</span>
					<div className="ml-auto">
						{exportButton}
					</div>
				</div>
				<ReportTable data={data} />
			</div>
		</div>
	);
}
