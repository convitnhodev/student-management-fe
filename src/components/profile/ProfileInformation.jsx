import React from "react";

const ProfileInformation = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 mb-8">
                {/* Name */}
                <div className="col-span-4 place-items-center">
                    <div className="flex items-center w-full">
                        <label className="w-32 font-bold">Họ tên: </label>
                        <p className="font-bold text-purple-800 ">Nguyễn Văn A</p>
                    </div>
                </div>

                {/* Birthdate */}
                <div className="col-span-4  place-items-center">
                    <div className="flex items-center w-full">
                        <label className="w-32 font-bold">Ngày sinh: </label>
                        <p className="font-bold text-purple-800 ">22/12/2002</p>
                    </div>
                </div>

                {/* Sex */}
                <div className="col-span-4 place-self-center w-full">
                    <div className="flex items-center w-full outline-none">
                        <label className="w-32 font-bold">Giới tính: </label>
                        <p className="font-bold text-purple-800 justify-self-start">Nam</p>
                    </div>
                </div>

                {/* Address */}
                <div className="col-span-4 place-items-center">
                    <div className="flex items-center w-full">
                        <label className="w-32 font-bold">Địa chỉ: </label>
                        <p className="font-bold text-purple-800">227 NVC, Q5, HCM</p>
                    </div>
                </div>

                {/* Email */}
                <div className="col-span-4 place-items-center">
                    <div className="flex items-center w-full">
                        <label className="w-32 font-bold">Email: </label>
                        <p className="font-bold text-purple-800">haonguyencp22@gmail.com</p>
                    </div>
                </div>

                {/* Role */}
                <div className="col-span-4 place-items-center w-full">
                    <div className="flex items-center w-full outline-none">
                        <label className="w-32 font-bold">Chức vụ: </label>
                        <p className="font-bold text-purple-800">Giáo viên</p>
                    </div>
                </div>

                {/* Homeroom class */}
                <div className="col-span-4 place-items-center w-full">
                    <div className="flex items-center  w-full outline-none">
                        <label className="w-32 font-bold">Chủ nhiệm lớp: </label>
                        <p className="font-bold text-purple-800">125</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInformation;
