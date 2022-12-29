import React from "react";
import EditSubjectModal from "../modals/EditSubjectModal";
import DeleteModal from "../modals/DeleteModal";

const SubjectRegulation = () => {
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
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                Hóa lý 2
                            </th>
                            <td className="py-4 px-6  text-center">
                                <button
                                    type="button"
                                    data-modal-toggle="edit-subject-modal"
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

            <div className="flex items-center justify-center mb-4 mt-8">
                <label className="w-fit mr-6">Số lượng môn học tối đa: </label>
                <input
                    type={"number"}
                    className="placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                    placeholder="15"
                />
            </div>
            <div className="flex flex-row w-full items-center justify-center mt-8">
                <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2 "
                >
                    Thay đổi
                </button>

                <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2 "
                >
                    Xóa hết
                </button>
            </div>
        </div>
    );
};

export default SubjectRegulation;
