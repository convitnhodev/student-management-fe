import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css"

const LayoutProfile = ({ children }) => {
    const location = useLocation();
    const path = location.pathname;
    const menu = [
        {
            href: "/dashboard/profile",
            title: "Hồ sơ",
        },
        {
            href: "/dashboard/profile/classes",
            title: "Lớp học",
        },
        {
            href: "/dashboard/profile/courses",
            title: "Môn học",
        },
        {
            href: "/dashboard/profile/rules",
            title: "Quy định",
        },
        {
            href: "/dashboard/profile/teachers",
            title: "Giáo viên",
        },
    ];
    return (
        <>
            <div className="w-full h-full bg-slate-100 pb-12">
                <div className="flex flex-col items-center justify-center">
                    <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="aa"
                        className="w-40 h-40 rounded-full"
                    />
                    <h2 className="text-lg font-bold mt-3 ">Alanadalatene</h2>
                    <p className="text-lg font-bold mt-3 ">Description: abcxyz</p>
                </div>
                <div className="flex items-center w-full justify-center mt-4  ">
                    {menu.map((item, key) => {
                        return (
                            <a
                                key={key}
                                href={item.href}
                                className={path === item.href ? "btn--highlight" : "btn"}
                            >
                                {item.title}
                            </a>
                        );
                    })}
                </div>
                {children}
            </div>
        </>
    );
};

export default LayoutProfile;
