import React, { useEffect, useState } from "react";

import "flowbite";

import AddClassModal from "../components/profile/modals/AddClassModal";
import AddSubjectModal from "../components/profile/modals/AddSubjectModal";

import Arrow from "../components/icons/arrow";
import AgeRegulation from "../components/profile/regulations/AgeRegulation";
import ClassRegulation from "../components/profile/regulations/ClassRegulation";
import ScoreRegulation from "../components/profile/regulations/ScoreRegulation";
import SubjectRegulation from "../components/profile/regulations/SubjectRegulation";
import LayoutFrame from "../components/profile/LayoutFrame";
import ProfileInformation from "../components/profile/ProfileInformation";
import ProfileClass from "../components/profile/ProfileClass";
import Teachers from "../components/profile/Teachers";

/**
 * This page shows the profile of the user as a teacher.
 * It allows the user to update his/her profile.
 * If the user is a headmaster, he/she can also add/update the profile of a teacher
 * and change some rules of the school.
 * @returns JSX.Element as a page
 */

export default function Profile() {
    const [role, setRole] = useState("admin");

    const [flat, setFlat] = useState(true); // Signal to get classes

    const [classesObj, setClassesObj] = useState({});
    const [pageClass, setPageClass] = useState(1);

    const [subjectObj, setSubjectObj] = useState({});
    const [pageSubject, setPageSubject] = useState(1);

    const [teacherObj, setTeacherObj] = useState({});
    const [pageTeacher, setPageTeacher] = useState(1);

    async function getClasses(page = 1, limit = 5) {
        try {
            let data = await fetch(`http://localhost:8080/class/list?limit=${limit}&page=${page}`);
            let json = await data.json();
            setClassesObj(json);
        } catch (error) {
            console.log(error);
        }
    }

    async function getSubjects(page = 1, limit = 5) {
        try {
            let data = await fetch(`http://localhost:8080/course/course?limit=${limit}&page=${page}`);
            let json = await data.json();
            setSubjectObj(json);
        } catch (error) {
            console.log(error);
        }
    }

    async function getTeachers(page = 1, limit = 5) {
        try {
            let data = await fetch(`http://localhost:8080/user/list?limit=${limit}&page=${page}`);
            let json = await data.json();
            setTeacherObj(json);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getClasses(pageClass);
    }, [pageClass, flat]);

    useEffect(() => {
        getSubjects(pageSubject);
    }, [pageSubject, flat]);

    useEffect(() => {
        getTeachers(pageTeacher);
    }, [pageTeacher, flat]);

    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold m-5 text-center py-2">Profile</h1>

                {/* ---------------- ADMIN ------------------- */}
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
                                <div className="mx-auto bg-white mt-8 rounded">
                                    <div id="accordion-collapse" data-accordion="collapse">
                                        {/* Regulation 1: Change Min/Max Age  */}
                                        <h2 id="accordion-collapse-heading-1">
                                            <button
                                                type="button"
                                                class="flex items-center justify-between p-5 w-full font-medium text-left border border-purple-300 border-b-0 text-gray-900 bg-gray-100 hover:bg-purple-100 rounded-t-xl"
                                                data-accordion-target="#accordion-collapse-body-1"
                                                aria-expanded="false"
                                                aria-controls="accordion-collapse-body-1"
                                            >
                                                <span>Quy định về tuổi</span>
                                                <Arrow />
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-1"
                                            aria-labelledby="accordion-collapse-heading-1"
                                        >
                                            <AgeRegulation />
                                        </div>

                                        {/* Regulation 2: Change max class size && Class name-size */}
                                        <h2 id="accordion-collapse-heading-2">
                                            <button
                                                type="button"
                                                class="flex items-center justify-between p-5 w-full font-medium text-left border border-purple-300 border-b-0 text-gray-900 bg-gray-100 hover:bg-purple-100 rounded-t-xl"
                                                data-accordion-target="#accordion-collapse-body-2"
                                                aria-expanded="false"
                                                aria-controls="accordion-collapse-body-2"
                                            >
                                                <span>Quy định về lớp học</span>
                                                <Arrow />
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-2"
                                            class="hidden"
                                            aria-labelledby="accordion-collapse-heading-2"
                                        >
                                            <ClassRegulation
                                                classesObj={classesObj}
                                                page={pageClass}
                                                setPage={setPageClass}
                                                flat={flat}
                                                setFlat={setFlat}
                                            />
                                        </div>

                                        {/* Regulation 4: Change max the number of subjects && Subject name */}
                                        <h2 id="accordion-collapse-heading-3">
                                            <button
                                                type="button"
                                                class="flex items-center justify-between p-5 w-full font-medium text-left border border-purple-300 border-b-0 text-gray-900 bg-gray-100 hover:bg-purple-100 rounded-t-xl"
                                                data-accordion-target="#accordion-collapse-body-3"
                                                aria-expanded="false"
                                                aria-controls="accordion-collapse-body-3"
                                            >
                                                <span>Quy định về môn học</span>
                                                <Arrow />
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-3"
                                            class="hidden"
                                            aria-labelledby="accordion-collapse-heading-3"
                                        >
                                            <SubjectRegulation
                                                subjectsObj={subjectObj}
                                                page={pageSubject}
                                                setPage={setPageSubject}
                                                flat={flat}
                                                setFlat={setFlat}
                                            />
                                        </div>

                                        {/* Regulation 5: Change passing standard score */}
                                        <h2 id="accordion-collapse-heading-4">
                                            <button
                                                type="button"
                                                class="flex items-center justify-between p-5 w-full font-medium text-left border border-purple-300 border-b-0 text-gray-900 bg-gray-100 hover:bg-purple-100 rounded-t-xl"
                                                data-accordion-target="#accordion-collapse-body-4"
                                                aria-expanded="false"
                                                aria-controls="accordion-collapse-body-4"
                                            >
                                                <span>Quy định về điểm chuẩn đạt môn</span>
                                                <Arrow />
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-4"
                                            class="hidden"
                                            aria-labelledby="accordion-collapse-heading-4"
                                        >
                                            <ScoreRegulation />
                                        </div>
                                    </div>
                                </div>

                                <AddClassModal flat={flat} setFlat={setFlat} />
                                <AddSubjectModal flat={flat} setFlat={setFlat} />
                            </LayoutFrame>
                        </div>
                        <LayoutFrame title="Quản lý giáo viên">
                            <Teachers
                                teachersObj={teacherObj}
                                page={pageTeacher}
                                setPage={setPageTeacher}
                                flat={flat}
                                setFlat={setFlat}
                            />
                        </LayoutFrame>
                    </div>
                ) : (
                    {
                        /* ---------------- User ------------------- */
                    }(
                        <div className="flex sm:flex-col xl:flex-row my-4">
                            <div className="flex-1 h-fit flex xl:flex-row lg:flex-col md:flex-col sm:flex-col">
                                <LayoutFrame title="Hồ sơ cá nhân">
                                    <ProfileInformation />
                                </LayoutFrame>

                                <LayoutFrame title="Lớp học">
                                    <ProfileClass />
                                </LayoutFrame>
                            </div>
                        </div>,
                    )
                )}
            </div>
        </>
    );
}
