import React from "react";
import EditTeacherModal from "./modals/EditTeacherModal";
import DeleteModal from "./modals/DeleteModal";

const Teachers = () => {
    return (
        <>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                #
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Họ tên
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Ngày sinh
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Giới tính
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Địa chỉ
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Chức vụ
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Lớp chủ nhiệm
                            </th>
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Chỉnh sửa</span>
                            </th>
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Xóa</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th className="py-4 px-6">1</th>
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Nguyễn Văn A
                            </th>
                            <td className="py-4 px-6">22-12-2002</td>
                            <td className="py-4 px-6">Nam</td>
                            <td className="py-4 px-6 ">
                                <p className="w-28 overflow-hidden whitespace-nowrap text-ellipsis">
                                    227 NVC, Q5, HCM asdf asdf asdf ádf
                                </p>
                            </td>
                            <td className="py-4 px-6">haonguyencp22@gmail.com</td>
                            <td className="py-4 px-6">Hiệu trưởng</td>
                            <td className="py-4 px-6"></td>
                            <td className="py-4 px-6 text-right">
                                <button
                                    type="button"
                                    data-modal-toggle="edit-teacher-modal"
                                    className="font-medium text-blue-600 hover:underline"
                                >
                                    Chỉnh sửa
                                </button>
                            </td>
                            <td className="py-4 pr-6 text-right">
                                <button
                                    type="button"
                                    data-modal-toggle="delete-modal"
                                    className="font-medium text-red-600 hover:underline"
                                >
                                    Xóa
                                </button>
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
                            className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                            &lt;
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                            3
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                        >
                            &gt;
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Teachers;
