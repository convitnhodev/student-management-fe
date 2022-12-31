import React, { useState } from "react";

const Teachers = () => {
    const [isEdit, setIsEdit] = useState(false);
    

    const submitEdit = () => {
        setIsEdit(!isEdit)
    };
    return (
        <>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="w-4 py-3 px-3 text-center">#</th>
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
                            <th className="w-4 py-3 px-3 text-center">1</th>
                            <th
                                scope="row"
                                className="w-40 py-3 px-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {isEdit ? (
                                    <input
                                        type="text"
                                        className="border-none w-full bg-purple-100 rounded-sm text-sm font-normal"
                                    />
                                ) : (
                                    "Nguyễn Văn A"
                                )}
                            </th>
                            <td className="w-32 py-3 px-3">
                                {isEdit ? (
                                    <input
                                        type="date"
                                        className="border-none w-full bg-purple-100 rounded-sm text-sm font-normal"
                                    />
                                ) : (
                                    "22/12/2002"
                                )}
                            </td>
                            <td className="w-36 py-3 px-3 text-center">
                                {isEdit ? (
                                    <select className="border-none w-full bg-purple-100 rounded-sm text-sm font-normal">
                                        <option value={"male"}>Nam</option>
                                        <option value={"female"}>Nữ</option>
                                    </select>
                                ) : (
                                    "Nam"
                                )}
                            </td>
                            <td className="w-40 py-3 px-3">
                                {!isEdit ? (
                                    <p className="w-40 overflow-hidden whitespace-nowrap text-ellipsis">
                                        227 NVC, Q5, HCM asdf asdf asdf ádf
                                    </p>
                                ) : (
                                    <input
                                        type="text"
                                        className="border-none w-full bg-purple-100 rounded-sm text-sm font-normal"
                                    />
                                )}
                            </td>
                            <td className="w-40 py-3 px-3">
                                {!isEdit ? (
                                    <p className="w-40 overflow-hidden whitespace-nowrap text-ellipsis">
                                        227 NVC, Q5, HCM asdf asdf asdf ádf
                                    </p>
                                ) : (
                                    <input
                                        type="text"
                                        className="border-none w-full bg-purple-100 rounded-sm text-sm font-normal"
                                    />
                                )}
                            </td>
                            <td className="w-40 py-3 px-3">
                                {/* Hiệu trưởng */}
                                {isEdit ? (
                                    <select className="border-none w-full bg-purple-100 rounded-sm text-sm font-normal">
                                        <option value={"teacher"}>Giáo viên</option>
                                        <option value={"admin"}>Hiệu trưởng</option>
                                    </select>
                                ) : (
                                    "Giáo viên"
                                )}
                            </td>
                            <td className="w-36 py-3 px-3">
                                {isEdit ? (
                                    <select className="border-none w-full bg-purple-100 rounded-sm text-sm font-normal">
                                        <option>12a1</option>
                                        <option>12a2</option>
                                    </select>
                                ) : (
                                    "12a1"
                                )}
                            </td>
                            <td className="w-36 py-3 px-3 flex flex-row items-center justify-center ">
                                {!isEdit ? (
                                    <button
                                        type="button"
                                        className="font-medium text-blue-600 hover:underline pr-6"
                                        onClick={() => setIsEdit(!isEdit)}
                                    >
                                        Chỉnh sửa
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        data-modal-toggle="edit-teacher-modal"
                                        className="font-medium text-green-600 hover:underline pr-6"
                                        onClick={submitEdit}
                                    >
                                        Đồng ý
                                    </button>
                                )}
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
