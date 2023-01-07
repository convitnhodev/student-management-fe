import React, { useEffect, useState } from "react";
import CancelIconModel from "../../icons/CancelIconModel";

const AddClassModal = (props) => {
    const [teachers, setTeachers] = useState([]);
    const [data, setData] = useState({
        class_id: "",
        grade: 0,
        homeroom_teacher: "",
    });

    useEffect(() => {
        setTeachers(props.teachers);
    }, [props.teachers]);

    const [status, setStatus] = useState(0);

    const changeClassName = (e) => {
        setData({
            ...data,
            class_id: e.target.value,
        });
    };

    const changeGrade = (e) => {
        setData({
            ...data,
            grade: parseInt(e.target.value),
        });
    };

    const changeHomeroom = (e) => {
        setData({
            ...data,
            homeroom_teacher: e.target.value,
        });
    };

    const resetData = () =>
        setData({
            class_id: "",
            grade: 0,
            homeroom_teacher: "",
        });

    const AddClass = async () => {
        try {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            };
            let a = await fetch("http://localhost:8080/class/new", requestOptions);
            if (a.status === 400) throw new Error("Error");
            else {
                props.setFlat(!props.flat);
                setStatus(1);
                resetData();
            }
        } catch (error) {
            setStatus(-1);
        } finally {
            setTimeout(() => {
                setStatus(0);
            }, 2000);
        }
    };

    return (
        <div
            id="add-class-modal"
            tabindex="-1"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
            <div className="relative w-full h-full max-w-lg md:h-auto">
                <div className="relative bg-white rounded-lg shadow">
                    <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        data-modal-toggle="add-class-modal"
                    >
                        <CancelIconModel />
                        <span className="sr-only">Close modal</span>
                    </button>

                    <div className="px-6 py-6 lg:px-8">
                        <h2 className="text-purple-700 font-bold text-2xl mb-8 text-center">Thêm lớp học</h2>
                        <form className="space-y-6" action="#">
                            <div className="grid grid-cols-4 gap-4 mb-8">
                                <div className="col-span-4 place-items-center">
                                    <div className="flex items-center justify-between w-full">
                                        <label className="w-28">Tên lớp: </label>
                                        <input
                                            type={"text"}
                                            className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                                            placeholder="VD: 12a2"
                                            onChange={changeClassName}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 place-items-center">
                                    <div className="flex items-center justify-between w-full">
                                        <label className="w-28">Khối: </label>
                                        <input
                                            type={"text"}
                                            className="grow placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                                            placeholder="VD: 12"
                                            onChange={changeGrade}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4 place-items-center">
                                    <div className="flex items-center justify-between w-full">
                                        <label className="w-28">GVCN</label>
                                        <select
                                            id="role"
                                            onChange={changeHomeroom}
                                            class="grow border border-purple-800 bg-purple-50 text-gray-900 text-sm rounded-lg block py-2 pl-9 pr-3 outline-none "
                                        >
                                            <option selected hidden>
                                                --Chọn GVCN--
                                            </option>
                                            <option value={""}>Chưa xác định</option>
                                            {teachers.map((t, key) => (
                                                <option key={key} value={t.username}>{t.fullname}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center">
                                <button
                                    onClick={AddClass}
                                    type="button"
                                    className="w-1/4 mx-4 text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Thêm
                                </button>
                                <button
                                    data-modal-toggle="add-class-modal"
                                    type="reset"
                                    className="w-1/4 mx-4 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Hủy
                                </button>
                            </div>

                            {status === 1 && <p className="text-green-700 text-center text-lg"> Tạo lớp thành công</p>}
                            {status === -1 && <p className="text-red-700 text-center text-lg"> Tạo lớp thất bại</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClassModal;
