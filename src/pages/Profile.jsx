import React, { useEffect, useState } from "react";
import LayoutFrame from "../components/profile/LayoutFrame";
import ProfileInformation from "../components/profile/ProfileInformation";
import ProfileClass from "../components/profile/ProfileClass";
import Rules from "../components/profile/Rules";
import Teachers from "../components/profile/Teachers";
import "flowbite";
import DeleteModal from "../components/profile/modals/DeleteModal";
import EditClassModal from "../components/profile/modals/EditClassModal";
import EditSubjectModal from "../components/profile/modals/EditSubjectModal";
import EditTeacherModal from "../components/profile/modals/EditTeacherModal";
import AddClassModal from "../components/profile/modals/AddClassModal";
import AddSubjectModal from "../components/profile/modals/AddSubjectModal";
import AddTeacherModal from "../components/profile/modals/AddTeacherModal";

/**
 * This page shows the profile of the user as a teacher.
 * It allows the user to update his/her profile.
 * If the user is a headmaster, he/she can also add/update the profile of a teacher
 * and change some rules of the school.
 * @returns JSX.Element as a page
 */

export default function Profile() {
    const [role, setRole] = useState("admin");

    const [student, setStudent] = useState();
    useEffect(() => {
        async function getClass() {
            const data = await fetch("http://localhost:8080/student/get?id=2");
            const json = await data.json();
        }
        getClass();
    }, []);

    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold m-5 text-center py-2">Profile</h1>
                {role === "admin" ? (
                    <div>
                        <div className="flex sm:flex-col xl:flex-row my-4">
                            <div className="flex-1 h-fit flex flex-col">
                                <LayoutFrame title="Hồ sơ cá nhân">
                                    <ProfileInformation />
                                </LayoutFrame>

                                <LayoutFrame title="Lớp học">
                                    <ProfileClass />
                                </LayoutFrame>
                            </div>

                            <LayoutFrame title="Quy định nhà trường">
                                <Rules />
                                <EditSubjectModal nameSubject={"asdf"} />
                                <EditClassModal nameClass={"as"} size={5} />
                                <EditTeacherModal />
                                <AddClassModal />
                                <AddSubjectModal />
                            </LayoutFrame>
                        </div>
                        <LayoutFrame title="Quản lý giáo viên">
                            <Teachers />
                            <AddTeacherModal />
                        </LayoutFrame>
                    </div>
                ) : (
                    <div className="flex sm:flex-col xl:flex-row my-4">
                        <div className="flex-1 h-fit flex xl:flex-row lg:flex-col md:flex-col sm:flex-col">
                            <LayoutFrame title="Hồ sơ cá nhân">
                                <ProfileInformation />
                            </LayoutFrame>

                            <LayoutFrame title="Lớp học">
                                <ProfileClass />
                            </LayoutFrame>
                        </div>
                    </div>
                )}

                {/* Modal */}
                <DeleteModal name={"a"} type="b" />
            </div>
        </>
    );
}
