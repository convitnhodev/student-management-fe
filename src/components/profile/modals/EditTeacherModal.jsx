import React from "react";
import CancelIconModel from "../../icons/CancelIconModel";

const EditTeacherModal = () => {
    return (
        <div
            id="edit-teacher-modal"
            tabindex="-1"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
            <div class="relative w-full h-full max-w-3xl md:h-auto">
                <div class="relative bg-white rounded-lg shadow">
                    <button
                        type="button"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        data-modal-toggle="edit-teacher-modal"
                    >
                        <CancelIconModel />
                        <span class="sr-only">Close modal</span>
                    </button>

                    <div class="px-6 py-6 lg:px-8">
                        <h2 class="text-purple-700 font-bold text-2xl mb-8 text-center">Thay đổi hồ sơ cá nhân</h2>
                        <form class="space-y-6" action="#">
                            <div class="grid grid-cols-4 gap-4 mb-8">
                                <div class="col-span-4 place-items-center">
                                    <div class="flex items-center justify-between w-full">
                                        <label class="w-28">Họ tên: </label>
                                        <input
                                            type={"text"}
                                            class="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                                            placeholder="xsy"
                                        />
                                    </div>
                                </div>
                                <div class="col-span-2 place-items-center">
                                    <div class="flex items-center justify-between w-full">
                                        <label class="w-28">Ngày sinh: </label>
                                        <input
                                            type={"date"}
                                            class="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                                            placeholder="xsy"
                                        />
                                    </div>
                                </div>
                                <div class="col-span-2 place-self-center w-full">
                                    <div class="flex items-center justify-center w-full outline-none">
                                        <label class="w-28">Giới tính: </label>
                                        <div class="flex grow">
                                            <div class="flex items-center mr-4">
                                                <input
                                                    id="male"
                                                    type="radio"
                                                    value="male"
                                                    name="sex"
                                                    class="outline-none w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 "
                                                />
                                                <label for="male" class="ml-2 text-sm font-medium text-gray-900 ">
                                                    Nam
                                                </label>
                                            </div>
                                            <div class="flex items-center mr-4">
                                                <input
                                                    id="female"
                                                    type="radio"
                                                    value="femail"
                                                    name="sex"
                                                    class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 "
                                                />
                                                <label for="female" class="ml-2 text-sm font-medium text-gray-900 ">
                                                    Nữ
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-4 place-items-center">
                                    <div class="flex items-center justify-between w-full">
                                        <label class="w-28">Địa chỉ: </label>
                                        <input
                                            type={"text"}
                                            class="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                                            placeholder="xsy"
                                        />
                                    </div>
                                </div>
                                <div class="col-span-4 place-items-center">
                                    <div class="flex items-center justify-between w-full">
                                        <label class="w-28">Email: </label>
                                        <input
                                            type={"text"}
                                            class="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                                            placeholder="xsy"
                                        />
                                    </div>
                                </div>
                                <div class="col-span-4 place-items-center w-full">
                                    <div class="flex items-center justify-center w-full outline-none">
                                        <label class="w-28">Chức vụ: </label>
                                        <select
                                            id="role"
                                            class="grow border border-purple-800 bg-purple-50 text-gray-900 text-sm rounded-lg block py-2 pl-9 pr-3 outline-none "
                                        >
                                            <option selected>--Chọn chức vụ--</option>
                                            <option value="teacher">Giáo viên</option>
                                            <option value="admin">Hiệu trưởng</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-span-4 place-items-center w-full">
                                    <div class="flex items-center justify-center w-full outline-none">
                                        <label class="w-28">Lớp chủ nhiệm: </label>
                                        <select
                                            id="role"
                                            class="grow border border-purple-800 bg-purple-50 text-gray-900 text-sm rounded-lg block py-2 pl-9 pr-3 outline-none border"
                                        >
                                            <option selected>--Chọn lớp--</option>
                                            <option value="20Ctt3">20Ctt3</option>
                                            <option value="20Ctt3">20Ctt3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row items-center justify-center">
                                <button
                                    type="submit"
                                    class="w-1/4 mx-4 text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Thay đổi
                                </button>
                                <button
                                    type="reset"
                                    class="w-1/4 mx-4 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Xóa hết
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTeacherModal;
