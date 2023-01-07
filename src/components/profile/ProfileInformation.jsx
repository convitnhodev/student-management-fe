import React, { useEffect, useState } from "react";

const ProfileInformation = (props) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (props.users !== null) setUser(props.user);
        
    }, [props]);

    return (
        <div>
            <div className="grid grid-cols-4 gap-4 mb-8">
                {/* Name */}
                <div className="col-span-4 place-items-center">
                    <div className="flex items-center w-full">
                        <label className="w-32 font-bold">Họ tên: </label>
                        <p className="font-bold text-purple-800 ">{user.fullname}</p>
                    </div>
                </div>

                {/* Birthdate */}
                <div className="col-span-4  place-items-center">
                    <div className="flex items-center w-full">
                        <label className="w-32 font-bold">Ngày sinh: </label>
                        <p className="font-bold text-purple-800 ">
                            {new Date(user.dob).getDate() +
                                "/" +
                                parseInt(new Date(user.dob).getMonth() + 1) +
                                "/" +
                                new Date(user.dob).getFullYear()}
                        </p>
                    </div>
                </div>

                {/* Sex */}
                <div className="col-span-4 place-self-center w-full">
                    <div className="flex items-center w-full outline-none">
                        <label className="w-32 font-bold">Giới tính: </label>
                        <p className="font-bold text-purple-800 justify-self-start">
                            {user.sex === true ? "Nam" : "Nữ"}
                        </p>
                    </div>
                </div>

                {/* Address */}
                <div className="col-span-4 place-items-center">
                    <div className="flex items-center w-full">
                        <label className="w-32 font-bold">Địa chỉ: </label>
                        <p className="font-bold text-purple-800">{user.address}</p>
                    </div>
                </div>

                {/* Email */}
                <div className="col-span-4 place-items-center">
                    <div className="flex items-center w-full">
                        <label className="w-32 font-bold">Email: </label>
                        <p className="font-bold text-purple-800">{user.gmail}</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="col-span-4 place-items-center">
                    <div className="flex items-center w-full">
                        <label className="w-32 font-bold">SĐT: </label>
                        <p className="font-bold text-purple-800">{user.phone}</p>
                    </div>
                </div>

                {/* Role */}
                <div className="col-span-4 place-items-center w-full">
                    <div className="flex items-center w-full outline-none">
                        <label className="w-32 font-bold">Chức vụ: </label>
                        <p className="font-bold text-purple-800">{user.role === 0 ? "Giáo viên" : "Admin"}</p>
                    </div>
                </div>

                {/* Homeroom class */}
                <div className="col-span-4 place-items-center w-full">
                    <div className="flex items-center  w-full outline-none">
                        <label className="w-32 font-bold">Chủ nhiệm lớp: </label>
                        <p className="font-bold text-purple-800">{user.class}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInformation;
