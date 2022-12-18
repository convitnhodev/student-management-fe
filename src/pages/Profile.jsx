import React, { useState } from "react";
import "flowbite";

/**
 * This page shows the profile of the user as a teacher.
 * It allows the user to update his/her profile.
 * If the user is a headmaster, he/she can also add/update the profile of a teacher
 * and change some rules of the school.
 * @returns JSX.Element as a page
 */

export default function Profile() {

    return (
        <>
            <div className="flex sm:flex-col xl:flex-row my-4 bg-white sm:w-full w-full">
                <div className=" flex flex-col w-full">
                    <div className="flex-1  h-fit px-8 py-6 border-solid border border-purple-700 rounded-md mx-4 mb-4">
                        <h2 className="text-purple-700 font-bold text-2xl mb-8">Hồ sơ cá nhân</h2>
                        <div className="grid grid-cols-4 gap-4 mb-8">
                            <div className="col-span-4 place-items-center">
                                <div className="flex items-center justify-between w-full">
                                    <label className="w-28">Họ tên: </label>
                                    <input
                                        type={"text"}
                                        className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                                        placeholder="xsy"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 place-items-center">
                                <div className="flex items-center justify-between w-full">
                                    <label className="w-28">Ngày sinh: </label>
                                    <input
                                        type={"date"}
                                        className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                                        placeholder="xsy"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 place-self-center w-full">
                                <div className="flex items-center justify-center w-full outline-none">
                                    <label className="w-28">Giới tính: </label>
                                    <div className="flex grow">
                                        <div className="flex items-center mr-4">
                                            <input
                                                id="male"
                                                type="radio"
                                                value="male"
                                                name="sex"
                                                disabled
                                                className="outline-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
                                            />
                                            <label
                                                for="male"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Nam
                                            </label>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <input
                                                id="female"
                                                type="radio"
                                                value="femail"
                                                name="sex"
                                                disabled
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                                            />
                                            <label
                                                for="female"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Nữ
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 place-items-center">
                                <div className="flex items-center justify-between w-full">
                                    <label className="w-28">Địa chỉ: </label>
                                    <input
                                        type={"text"}
                                        className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                                        placeholder="xsy"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-span-4 place-items-center">
                                <div className="flex items-center justify-between w-full">
                                    <label className="w-28">Email: </label>
                                    <input
                                        type={"text"}
                                        className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                                        placeholder="xsy"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-span-4 place-items-center w-full">
                                <div className="flex items-center justify-center w-full outline-none">
                                    <label className="w-28">Role: </label>
                                    <select
                                        id="role"
                                        disabled
                                        className="grow border border-gray-300 bg-purple-50 text-gray-900 text-sm rounded-lg block py-2 pl-9 pr-3 outline-none"
                                    >
                                        <option selected>--Chọn chức vụ--</option>
                                        <option value="teacher">Giáo viên</option>
                                        <option value="admin">Hiệu trưởng</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-span-4 place-items-center w-full">
                                <div className="flex items-center justify-center w-full outline-none">
                                    <label className="w-28">Lớp chủ nhiệm: </label>
                                    <select
                                        id="role"
                                        disabled
                                        className="grow border border-gray-300 bg-purple-50 text-gray-900 text-sm rounded-lg block py-2 pl-9 pr-3 outline-none"
                                    >
                                        <option selected>--Chọn lớp--</option>
                                        <option value="20Ctt3">20Ctt3</option>
                                        <option value="20Ctt3">20Ctt3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 h-fit px-8 py-6 border-solid border border-purple-700 rounded-md mx-4">
                        <h2 className="text-purple-700 font-bold text-2xl mb-4">Lớp học</h2>
                        <div className="flex flex-col ml-8">
                            <a href="#" className="mt-4 hover:text-purple-600 font-bold">
                                Lập trình hướng đối tượng - 20_1
                            </a>
                            <a href="#" className="mt-4 hover:text-purple-600 font-bold">
                                Lập trình hướng đối tượng - 20_1
                            </a>
                            <a href="#" className="mt-4 hover:text-purple-600 font-bold">
                                Lập trình hướng đối tượng - 20_1
                            </a>
                            <a href="#" className="mt-4 hover:text-purple-600 font-bold">
                                Lập trình hướng đối tượng - 20_1
                            </a>
                            <a href="#" className="mt-4 hover:text-purple-600 font-bold">
                                Lập trình hướng đối tượng - 20_1
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" w-full h-fit px-8 py-6 border-solid border border-purple-700 rounded-md mx-4">
                    <h2 className="text-purple-700 font-bold text-2xl mb-4">Quy định nhà trường</h2>
                    <div className="mx-auto bg-white mt-8 rounded">
                        <div id="accordion-collapse" data-accordion="collapse">
                            <h2 id="accordion-collapse-heading-1">
                                <button
                                    type="button"
                                    className="flex items-center justify-between p-5 w-full font-medium text-left border border-purple-300 border-b-0 text-gray-900 bg-gray-100 hover:bg-purple-100 rounded-t-xl"
                                    data-accordion-target="#accordion-collapse-body-1"
                                    aria-expanded="true"
                                    aria-controls="accordion-collapse-body-1"
                                >
                                    <span>Quy định về tuổi</span>
                                    <svg
                                        data-accordion-icon
                                        className="w-6 h-6 shrink-0 rotate-180"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                                    {/* Change age regulation */}
                                    <div className="flex flex-col w-full items-center justify-around">
                                        <div className="flex items-center justify-between mb-4">
                                            <label className="w-28">Tuổi nhỏ nhất: </label>
                                            <input
                                                type={"number"}
                                                className="placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                                                placeholder="15"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between mt-4 ">
                                            <label className="w-28">Tuổi lớn nhất: </label>
                                            <input
                                                type={"number"}
                                                className="placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                                                placeholder="18"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center mt-8">
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            Thay đổi
                                        </button>

                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        >
                                            Xóa hết
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <h2 id="accordion-collapse-heading-2">
                                <button
                                    type="button"
                                    className="flex items-center justify-between p-5 w-full font-medium text-left border border-purple-300 border-b-0 text-gray-900 bg-gray-100 hover:bg-purple-100 rounded-t-xl"
                                    data-accordion-target="#accordion-collapse-body-2"
                                    aria-expanded="false"
                                    aria-controls="accordion-collapse-body-2"
                                >
                                    <span>Quy định về lớp học</span>
                                    <svg
                                        data-accordion-icon
                                        className="w-6 h-6 shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id="accordion-collapse-body-2"
                                className="hidden"
                                aria-labelledby="accordion-collapse-heading-2"
                            >
                                <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                                    {/* Change class regulation  */}

                                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="py-3 px-6">
                                                        Tên lớp học
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Sĩ số
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        <span className="sr-only">Chỉnh sửa</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <th
                                                        scope="row"
                                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        12A1
                                                    </th>
                                                    <td className="py-4 px-6">32</td>
                                                    <td className="py-4 px-6 text-right">
                                                        <a
                                                            href="#"
                                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                        >
                                                            Chỉnh sửa
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <th
                                                        scope="row"
                                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        12A2
                                                    </th>
                                                    <td className="py-4 px-6">34</td>
                                                    <td className="py-4 px-6 text-right">
                                                        <a
                                                            href="#"
                                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                        >
                                                            Chỉnh sửa
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <th
                                                        scope="row"
                                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        12A3
                                                    </th>
                                                    <td className="py-4 px-6">35</td>
                                                    <td className="py-4 px-6 text-right">
                                                        <a
                                                            href="#"
                                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                        >
                                                            Chỉnh sửa
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <nav aria-label="Page navigation example">
                                        <ul className="mt-6 flex items-center justify-center -space-x-px">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    &lt;
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    2
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    3
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    &gt;
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>

                                    <div className="flex items-center justify-center mb-4 mt-8">
                                        <label className="w-28">Sĩ số tối đa: </label>
                                        <input
                                            type={"number"}
                                            className="placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                                            placeholder="15"
                                        />
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center mt-8">
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            Thay đổi
                                        </button>

                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        >
                                            Xóa hết
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <h2 id="accordion-collapse-heading-3">
                                <button
                                    type="button"
                                    className="flex items-center justify-between p-5 w-full font-medium text-left border border-purple-300 border-b-0 text-gray-900 bg-gray-100 hover:bg-purple-100 rounded-t-xl"
                                    data-accordion-target="#accordion-collapse-body-3"
                                    aria-expanded="false"
                                    aria-controls="accordion-collapse-body-3"
                                >
                                    <span>Quy định về môn học</span>
                                    <svg
                                        data-accordion-icon
                                        className="w-6 h-6 shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id="accordion-collapse-body-3"
                                className="hidden"
                                aria-labelledby="accordion-collapse-heading-3"
                            >
                                <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                                    {/* change course regulation */}
                                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="py-3 px-6">
                                                        Môn học
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        <span className="sr-only">Chỉnh sửa</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <th
                                                        scope="row"
                                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        Hóa lý
                                                    </th>
                                                    <td className="py-4 px-6 text-right">
                                                        <a
                                                            href="#"
                                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                        >
                                                            Chỉnh sửa
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <th
                                                        scope="row"
                                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        Sinh tin học
                                                    </th>
                                                    <td className="py-4 px-6 text-right">
                                                        <a
                                                            href="#"
                                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                        >
                                                            Chỉnh sửa
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <th
                                                        scope="row"
                                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        Sinh hóa
                                                    </th>
                                                    <td className="py-4 px-6 text-right">
                                                        <a
                                                            href="#"
                                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                        >
                                                            Chỉnh sửa
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <nav aria-label="Page navigation example">
                                        <ul className="mt-6 flex items-center justify-center -space-x-px">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    &lt;
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    2
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    3
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    &gt;
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>

                                    <div className="flex items-center justify-center mb-4 mt-8">
                                        <label className="w-fit mr-6">Số lượng môn học tối đa: </label>
                                        <input
                                            type={"number"}
                                            className="placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                                            placeholder="15"
                                        />
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center mt-8">
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            Thay đổi
                                        </button>

                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        >
                                            Xóa hết
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <h2 id="accordion-collapse-heading-4">
                                <button
                                    type="button"
                                    className="flex items-center justify-between p-5 w-full font-medium text-left border border-purple-300 border-b-0 text-gray-900 bg-gray-100 hover:bg-purple-100 rounded-t-xl"
                                    data-accordion-target="#accordion-collapse-body-4"
                                    aria-expanded="false"
                                    aria-controls="accordion-collapse-body-4"
                                >
                                    <span>Quy định về điểm chuẩn đạt môn</span>
                                    <svg
                                        data-accordion-icon
                                        className="w-6 h-6 shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id="accordion-collapse-body-4"
                                className="hidden"
                                aria-labelledby="accordion-collapse-heading-4"
                            >
                                <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                                    {/* change score regulation */}
                                    <div className="flex items-center justify-center mb-4">
                                        <label className="w-fit mr-4">Điểm chuẩn đạt môn: </label>
                                        <input
                                            type={"number"}
                                            className="placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                                            placeholder="15"
                                        />
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center mt-8">
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            Thay đổi
                                        </button>

                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        >
                                            Xóa hết
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-fit px-8 py-6 border-solid border border-purple-700 rounded-md mx-4">
                <h2 className="text-purple-700 font-bold text-2xl mb-4">Quản lý giáo viên</h2>

                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    #
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Họ tên
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Ngày sinh
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Giới tính
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Địa chỉ
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Email
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Chức vụ
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Lớp chủ nhiệm
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th class="py-4 px-6">1</th>
                                <th
                                    scope="row"
                                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Nguyễn Văn A
                                </th>
                                <td class="py-4 px-6">22-12-2002</td>
                                <td class="py-4 px-6">Nam</td>
                                <td class="py-4 px-6 ">
                                    <p className="w-28 overflow-hidden whitespace-nowrap text-ellipsis">
                                        227 NVC, Q5, HCM asdf asdf asdf ádf
                                    </p>
                                </td>
                                <td class="py-4 px-6">haonguyencp22@gmail.com</td>
                                <td class="py-4 px-6">Hiệu trưởng</td>
                                <td class="py-4 px-6"></td>
                                <td class="py-4 px-6 text-right">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th class="py-4 px-6">1</th>
                                <th
                                    scope="row"
                                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Nguyễn Văn A
                                </th>
                                <td class="py-4 px-6">22-12-2002</td>
                                <td class="py-4 px-6">Nam</td>
                                <td class="py-4 px-6 ">
                                    <p className="w-28 overflow-hidden whitespace-nowrap text-ellipsis">
                                        227 NVC, Q5, HCM asdf asdf asdf ádf
                                    </p>
                                </td>
                                <td class="py-4 px-6">haonguyencp22@gmail.com</td>
                                <td class="py-4 px-6">Hiệu trưởng</td>
                                <td class="py-4 px-6"></td>
                                <td class="py-4 px-6 text-right">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
