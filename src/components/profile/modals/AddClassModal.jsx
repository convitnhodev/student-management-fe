import React from "react";
import CancelIconModel from "../../icons/CancelIconModel";

const AddClassModal = ({ nameClass, size }) => {
    return (
        <div
            id="add-class-modal"
            tabindex="-1"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
            <div className="relative w-full h-full max-w-lg md:h-auto">
                <div className="relative bg-white rounded-lg shadow">
                    <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        data-modal-toggle="add-class-modal"
                    >
                        <CancelIconModel />
                        <span className="sr-only">Close modal</span>
                    </button>

                    <div className="px-6 py-6 lg:px-8">
                        <h2 className="text-purple-700 font-bold text-2xl mb-8 text-center">Thêm lớp học</h2>
                        <form className="space-y-6" action="#">
                            <div className="grid grid-cols-4 gap-4 mb-8">
                                <div className="col-span-4 place-items-center">
                                    <div className="flex items-center justify-between w-full">
                                        <label className="w-28">Tên lớp: </label>
                                        <input
                                            type={"text"}
                                            className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                                            placeholder="xsy"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 place-items-center">
                                    <div className="flex items-center justify-between w-full">
                                        <label className="w-28">Sĩ số: </label>
                                        <input
                                            type={"number"}
                                            className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                                            placeholder="xsy"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 place-items-center">
                                    <div className="flex items-center justify-between w-full">
                                        <label className="w-28">GVCN</label>
                                        <select
                                            id="role"
                                            class="grow border border-purple-800 bg-purple-50 text-gray-900 text-sm rounded-lg block py-2 pl-9 pr-3 outline-none "
                                        >
                                            <option selected>--Chọn GVCN--</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center">
                                <button
                                    type="submit"
                                    className="w-1/4 mx-4 text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Thêm
                                </button>
                                <button
                                    type="reset"
                                    className="w-1/4 mx-4 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Xóa
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClassModal;
