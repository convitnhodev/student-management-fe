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

import useCookies from "react-cookie/cjs/useCookies";

/**
 * This page shows the profile of the user as a teacher.
 * It allows the user to update his/her profile.
 * If the user is a headmaster, he/she can also add/update the profile of a teacher
 * and change some rules of the school.
 * @returns JSX.Element as a page
 */

export default function Profile() {
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const username = cookies.user.payload.username;

    const [user, setUser] = useState({});

    const [flat, setFlat] = useState(false);

    const [classes, setClasses] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [rules, setRules] = useState({});

    async function getUserInfo() {
        try {
            let data = await fetch(`http://localhost:8080/user/get?username=${username}`);
            let json = await data.json();
            setUser(json.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getClasses() {
        try {
            let data = await fetch(`http://localhost:8080/class/list`);
            let json = await data.json();
            setClasses(json.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getSubjects() {
        try {
            let data = await fetch(`http://localhost:8080/subject/list`);
            let json = await data.json();
            setSubjects(json);
        } catch (error) {
            console.log(error);
        }
    }

    async function getTeachers() {
        try {
            let data = await fetch(`http://localhost:8080/user/list`);
            let json = await data.json();
            setTeachers(json.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getRules() {
        try {
            let data = await fetch(`http://localhost:8080/rules/get`);
            let json = await data.json();
            setRules(json.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserInfo();
        console.log(user.role === 0);
    }, []);

    useEffect(() => {
        getClasses();
        getSubjects();
        getTeachers();
        getRules();
    }, [flat]);

    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold m-5 text-center py-2">Profile</h1>

                {/* ---------------- ADMIN ------------------- */}
                <div className={user.role === 1 ? "block" : "hidden"}>
                    <div className="flex sm:flex-col xl:flex-row my-4">
                        <div className="flex-1 h-fit flex flex-col">
                            <LayoutFrame title="Hồ sơ cá nhân">
                                <ProfileInformation user={user} />
                            </LayoutFrame>

                            <LayoutFrame title="Lớp học">
                                <ProfileClass user={user} />
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
                                    <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                                        <AgeRegulation rules={rules} setRules={setRules} />
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
                                            classes={classes}
                                            setClasses={setClasses}
                                            flat={flat}
                                            setFlat={setFlat}
                                            teachers={teachers}
                                            rules={rules}
                                            setRules={setRules}
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
                                            subjects={subjects}
                                            setSubjects={setSubjects}
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
                                        <ScoreRegulation rules={rules} setRules={setRules} />
                                    </div>
                                </div>
                            </div>

                            <AddClassModal teachers={teachers} flat={flat} setFlat={setFlat} />
                            <AddSubjectModal flat={flat} setFlat={setFlat} />
                        </LayoutFrame>
                    </div>
                    <LayoutFrame title="Quản lý giáo viên">
                        <Teachers
                            teachers={teachers}
                            setTeachers={setTeachers}
                            flat={flat}
                            setFlat={setFlat}
                            classes={classes}
                        />
                    </LayoutFrame>
                </div>

                <div className={user.role === 0 ? "flex sm:flex-col xl:flex-row my-4" : "hidden"}>
                    <div className="flex-1 h-fit flex xl:flex-row lg:flex-col md:flex-col sm:flex-col">
                        <LayoutFrame title="Hồ sơ cá nhân">
                            <ProfileInformation user={user} />
                        </LayoutFrame>

                        <LayoutFrame title="Lớp học">
                            <ProfileClass user={user} />
                        </LayoutFrame>
                    </div>
                </div>
            </div>
        </>
    );
}
