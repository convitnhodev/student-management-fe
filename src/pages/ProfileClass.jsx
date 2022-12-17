import React, { useState } from "react";
import InputGroup from "../../components/profile/InputGroup";
import Item from "../../components/profile/Item";
import LayoutProfile from "../../components/layout/LayoutProfile";

const ProfileClass = () => {
    return (
        <LayoutProfile>
            <div className="flex flex-col w-full h-full items-center justify-center bg-white px-8 py-8 my-4 ">
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-8 gap-x-2 place-items-center sm:flex-col xl:flex-row items-center justify-center sm:w-full mb-16 ">
                    <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                    <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                    <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                    <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                    <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                    <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                    <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                </div>
                <nav className="">
                    <ul className="inline-flex items-center -space-x-px">
                        <li>
                            <a
                                href="#"
                                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <span className="sr-only">Previous</span>
                                &lt;
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                1
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <span className="sr-only">Next</span>
                                &gt;
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </LayoutProfile>
    );
};

export default ProfileClass;
