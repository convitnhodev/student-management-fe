import React, { useState } from "react";
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


/**
 * This page shows the profile of the user as a teacher.
 * It allows the user to update his/her profile.
 * If the user is a headmaster, he/she can also add/update the profile of a teacher
 * and change some rules of the school.
 * @returns JSX.Element as a page
 */

export default function Profile() {
    return (
        <>
            <div className="flex sm:flex-col xl:flex-row my-4 bg-white">
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
                </LayoutFrame>
            </div>

            <LayoutFrame title="Quản lý giáo viên">
                <Teachers />
            </LayoutFrame>

            {/* Modal */}
            <DeleteModal name={"a"} type="b" />
        </>
    );
}
