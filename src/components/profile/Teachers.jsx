import React from "react";

const Teachers = () => {
    return (
        <>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="w-4 py-3 px-6 text-center">#</th>
                            <th className="w-40 py-3 px-3">Họ tên</th>
                            <th className="w-32 py-3 px-3">Ngày sinh</th>
                            <th className="w-28 py-3 px-3 text-center">Giới tính</th>
                            <th className="w-40 py-3 px-3">Địa chỉ</th>
                            <th className="w-40 py-3 px-3">Email</th>
                            <th className="w-4 py-3 px-3">Chức vụ</th>
                            <th className="w-36 py-3 px-3">Lớp chủ nhiệm</th>
                            <th className="w-20 py-3 px-3  text-center">
                                <button
                                    type="button"
                                    data-modal-toggle="add-teacher-modal"
                                    className="uppercase text-green-600 hover:underline"
                                >
                                    Thêm giáo viên
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th className="w-4 py-3 px-6 text-center">1</th>
                            <th
                                scope="row"
                                className="w-40 py-3 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Nguyễn Văn A
                            </th>
                            <td className="w-32 py-3 px-3">22-12-2002</td>
                            <td className="w-28 py-3 px-3 text-center">Nam</td>
                            <td className="w-40 py-3 px-3">
                                <p className="w-40 overflow-hidden whitespace-nowrap text-ellipsis">
                                    227 NVC, Q5, HCM asdf asdf asdf ádf
                                </p>
                            </td>
                            <td className="w-40 py-3 px-3">
                                <p className="w-40 overflow-hidden whitespace-nowrap text-ellipsis">
                                    227 NVC, Q5, HCM asdf asdf asdf ádf
                                </p>
                            </td>
                            <td className="w-40 py-3 px-3">Hiệu trưởng</td>
                            <td className="w-36 py-3 px-3"></td>
                            <td className="w-36 py-3 px-3 text-center flex flex-row">
                                <button
                                    type="button"
                                    data-modal-toggle="edit-teacher-modal"
                                    className="font-medium text-blue-600 hover:underline pr-6"
                                >
                                    Chỉnh sửa
                                </button>
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
