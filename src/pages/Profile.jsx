import React, { useState } from "react";
import LayoutProfile from "../../components/layout/LayoutProfile";
import InputGroup from "../../components/profile/InputGroup";

/**
 * This page shows the profile of the user as a teacher.
 * It allows the user to update his/her profile.
 * If the user is a headmaster, he/she can also add/update the profile of a teacher
 * and change some rules of the school.
 * @returns JSX.Element as a page
 */

export default function Profile() {
    
    const [isName, setIsName] = useState(false);
    const [isDOB, setIsDOB] = useState(false);
    const [isAddress, setIsAddress] = useState(false);
    const [isWork, setIsWork] = useState(false);
    const [isRole, setIsRole] = useState(false);


    return (
        <LayoutProfile>
            <div className="flex sm:flex-col xl:flex-row my-4 px-8 py-8 bg-white items-center justify-between sm:w-full ">
                <div className="flex items-center justify-center flex-1 sm:flex-none sm:w-full xl:w-2/3">
                    <div className="w-full flex flex-col items-center">
                        <InputGroup name="name" label="Họ tên: " isEdit={isName} placeholder="VD: Nguyen Van A" />
                        <InputGroup
                            name="address"
                            label="Địa chỉ hiện tại:"
                            isEdit={isAddress}
                            placeholder="VD: 227 NVC, Q5, HCM"
                        />
                        <InputGroup type="date" name="dob" label="Ngày sinh:" isEdit={isDOB} />
                        <InputGroup name="role" label="Chức vụ: " isEdit={isRole} placeholder="VD: Giáo viên" />
                        <InputGroup
                            name="work"
                            label="Công tác tại:"
                            isEdit={isWork}
                            placeholder="VD: Trường Đại học Khoa học Tự nhiên"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-6 flex-col pr-8 sm:mt-10 xl:mt-0 sm:mr-0 xl:mr-24">
                    <div className="shrink-0 mb-8">
                        <img
                            className="h-24 w-24 object-cover rounded-full"
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                            alt="Current profile photo"
                        />
                    </div>
                    <label className="flex">
                        <span className="sr-only">Choose profile photo</span>
                        <input
                            type="file"
                            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                        />
                    </label>
                </div>
            </div>
        </LayoutProfile>
    );
}
