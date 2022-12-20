import React from "react";

const ProfileInformation = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 mb-8">
                {/* Name */}
                <div className="col-span-4 place-items-center">
                    <div className="flex items-center justify-between w-full">
                        <label className="w-32">Họ tên: </label>
                        <input
                            type={"text"}
                            className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                            placeholder="xsy"
                            disabled
                        />
                    </div>
                </div>

                {/* Birthdate */}
                <div className="col-span-2 place-items-center">
                    <div className="flex items-center justify-between w-full">
                        <label className="w-32">Ngày sinh: </label>
                        <input
                            type={"date"}
                            className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                            placeholder="xsy"
                            disabled
                        />
                    </div>
                </div>

                {/* Sex */}
                <div className="col-span-2 place-self-center w-full">
                    <div className="flex items-center justify-center w-full outline-none">
                        <label className="w-32">Giới tính: </label>
                        <input
                            type={"text"}
                            className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                            placeholder="Nam"
                            disabled
                        />
                    </div>
                </div>

                {/* Address */}
                <div className="col-span-4 place-items-center">
                    <div className="flex items-center justify-between w-full">
                        <label className="w-32">Địa chỉ: </label>
                        <input
                            type={"text"}
                            className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                            placeholder="xsy"
                            disabled
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="col-span-4 place-items-center">
                    <div className="flex items-center justify-between w-full">
                        <label className="w-32">Email: </label>
                        <input
                            type={"text"}
                            className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                            placeholder="xsy"
                            disabled
                        />
                    </div>
                </div>

                {/* Role */}
                <div className="col-span-4 place-items-center w-full">
                    <div className="flex items-center justify-center w-full outline-none">
                        <label className="w-32">Chức vụ: </label>
                        <input
                            type={"text"}
                            className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                            placeholder="xsy"
                            disabled
                        />
                    </div>
                </div>

                {/* Homeroom class */}
                <div className="col-span-4 place-items-center w-full">
                    <div className="flex items-center justify-center w-full outline-none">
                        <label className="w-32">Chủ nhiệm lớp: </label>
                        <input
                            type={"text"}
                            className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                            placeholder="xsy"
                            disabled
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInformation;
