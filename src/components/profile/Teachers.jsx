import React, { useState, useEffect } from "react";

const Teachers = (props) => {
    const [allTeachers, setAllTeachers] = useState([]);
    const [page, setPage] = useState({});
    const [nTeachers, setNTeachers] = useState([]);

    useEffect(() => {
        if (props.teachersObj.data == null) {
            if (props.page - 1 > 0) props.setPage(props.page - 1);
            else setAllTeachers([])
        } else if (props.teachersObj.data != undefined) {
            console.log(props.teachersObj);
            setPage(props.teachersObj.paging);
            let teachersObj = props.teachersObj.data;
            setNTeachers([]);
            for (let i = 0; i < teachersObj.length; i++) {
                teachersObj[i] = {
                    ...teachersObj[i],
                    isEdit: false,
                };
                setNTeachers((array) => [
                    ...array,
                    {
                        fullName: teachersObj[i].full_name,
                        Class: teachersObj[i].class,
                        role: teachersObj[i].role,
                        gmail: teachersObj[i].gmail,
                        DOB: teachersObj[i].dob,
                        address: teachersObj[i].address,
                        sex: teachersObj[i].sex,
                    },
                ]);
            }
            setAllTeachers(teachersObj);
        }
    }, [props]);

    const clickPagination = (e) => {
        props.setPage(parseInt(e.target.innerHTML));
    };

    const handleEdit = (index) => {
        let setArray = [...allTeachers];
        let item = { ...setArray[index], isEdit: !setArray[index].isEdit };
        setArray[index] = item;
        setAllTeachers(setArray);
    };

    const handleSubmit = async (index) => {
        let setArray = [...allTeachers];
        let item = { ...setArray[index], isEdit: !setArray[index].isEdit };
        setArray[index] = item;
        setAllTeachers(setArray);

        console.log(nTeachers[index]);
        // call API
        // const requestOptions = {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(nClass[index]),
        // };

        // await fetch("http://localhost:8080/class/")
    };

    const handleChange = (e, i) => {
        const value = e.target.value;
        let setArray = [...nSubject];
        let item = { ...setArray[i], [e.target.name]: value };
        setArray[i] = item;
        setNTeachers(setArray);
    };

    const handleDelete = async (i) => {
        try {
            const requestOptions = {
                method: "DELETE",
            };
            // await fetch(`http://localhost:8080/course/delete?id=${allSubject[i].course_id}`, requestOptions);
            props.setPage(page.page);
            props.setFlat(!props.flat);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAccept = async (i) => {
        try {
            const requestOptions = {
                method: "POST",
            };
            // await fetch(`http://localhost:8080/acp/user?id=${allSubject[i].course_id}`, requestOptions);
            props.setPage(page.page);
            props.setFlat(!props.flat);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="w-1/12 py-3 px-3">Username</th>
                            <th className="w-2/12 py-3 px-3">Họ tên</th>
                            <th className="w-1/12 py-3 px-3">Ngày sinh</th>
                            <th className="w-1/12 py-3 px-3 text-center">Giới tính</th>
                            <th className="w-1/12 py-3 px-3">Địa chỉ</th>
                            <th className="w-1/12 py-3 px-3">Email</th>
                            <th className="w-1/12 py-3 px-3">Chức vụ</th>
                            <th className="w-1/12 py-3 px-1 text-center">Chủ nhiệm</th>
                            <th className="w-2/12 py-3 px-3 text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTeachers.map((t, i) => {
                            return (
                                <tr
                                    key={i}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <th className="w-1/12 py-3 px-3">
                                        <p className="w-28 overflow-hidden whitespace-nowrap text-ellipsis">
                                            {t.user_name}
                                        </p>
                                    </th>
                                    <td className="w-2/12 py-3 px-3  whitespace-nowrap dark:text-white">
                                        {t.isEdit ? (
                                            <input
                                                type="text"
                                                className="w-36 px-2 py-1 border-none bg-purple-100 rounded-sm text-sm font-normal"
                                                name="fullName"
                                                value={nTeachers[i].fullName}
                                                onChange={(e) => handleChange(e, i)}
                                            />
                                        ) : (
                                            t.full_name
                                        )}
                                    </td>
                                    <td className="w-1/12 py-3 px-3">
                                        {t.isEdit ? (
                                            <input
                                                type="date"
                                                className="w-28 px-2 py-1 border-none bg-purple-100 rounded-sm text-sm font-normal"
                                                name="DOB"
                                                value={nTeachers[i].DOB}
                                                onChange={(e) => handleChange(e, i)}
                                            />
                                        ) : (
                                            "22/12/2002"
                                        )}
                                    </td>
                                    <td className="w-1/12 py-3 px-3 text-center">
                                        {t.isEdit ? (
                                            <select
                                                className="w-16 px-2 py-1 border-none bg-purple-100 rounded-sm text-sm font-normal"
                                                name="sex"
                                                value={nTeachers[i].sex}
                                                onChange={(e) => handleChange(e, i)}
                                            >
                                                <option value={"male"}>Nam</option>
                                                <option value={"female"}>Nữ</option>
                                            </select>
                                        ) : (
                                            "Nam"
                                        )}
                                    </td>
                                    <td className="w-1/12 py-3 px-3">
                                        {!t.isEdit ? (
                                            <p className="w-28 overflow-hidden whitespace-nowrap text-ellipsis">
                                                227 NVC, Q5, HCM asdf asdf asdf ádf
                                            </p>
                                        ) : (
                                            <input
                                                type="text"
                                                className="w-28 border-none px-2 py-1 bg-purple-100 rounded-sm text-sm font-normal"
                                                name="address"
                                                value={nTeachers[i].address}
                                                onChange={(e) => handleChange(e, i)}
                                            />
                                        )}
                                    </td>
                                    <td className="w-1/12 py-3 px-3">
                                        {!t.isEdit ? (
                                            <p className="w-28 overflow-hidden whitespace-nowrap text-ellipsis">
                                                {t.gmail}
                                            </p>
                                        ) : (
                                            <input
                                                type="email"
                                                className="border-none w-28 px-2 py-1 bg-purple-100 rounded-sm text-sm font-normal"
                                                name="email"
                                                value={nTeachers[i].gmail}
                                                onChange={(e) => handleChange(e, i)}
                                            />
                                        )}
                                    </td>
                                    <td className="w-1/12 py-3 px-1">
                                        {t.isEdit ? (
                                            <select
                                                className="w-20  px-2 py-1 border-none bg-purple-100 rounded-sm text-sm font-normal"
                                                name="role"
                                                value={nTeachers[i].role}
                                                onChange={(e) => handleChange(e, i)}
                                            >
                                                <option value={"teacher"}>Giáo viên</option>
                                                <option value={"admin"}>Hiệu trưởng</option>
                                            </select>
                                        ) : (
                                            (t.role === 0 && "Giáo viên") || (t.role === 1 && "Hiệu trưởng")
                                        )}
                                    </td>
                                    <td className="w-1/12 py-3 px-1 text-center">
                                        {t.isEdit ? (
                                            <select
                                                className="w-20  px-2 py-1 border-none bg-purple-100 rounded-sm text-sm font-normal"
                                                name="Class"
                                                value={nTeachers[i].Class}
                                                onChange={(e) => handleChange(e, i)}
                                            >
                                                <option>12a1</option>
                                                <option>12a2</option>
                                            </select>
                                        ) : (
                                            t.Class
                                        )}
                                    </td>
                                    <td className="py-3 flex items-center justify-center">
                                        {t.acp ? (
                                            !t.isEdit ? (
                                                <button
                                                    type="button"
                                                    className="font-medium text-blue-600 hover:underline pr-6"
                                                    onClick={() => handleEdit(i)}
                                                >
                                                    Sửa
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    data-modal-toggle="edit-teacher-modal"
                                                    className="font-medium text-green-600 hover:underline pr-6"
                                                    onClick={() => handleSubmit(i)}
                                                >
                                                    Đồng ý
                                                </button>
                                            )
                                        ) : (
                                            <button
                                                type="button"
                                                data-modal-toggle="edit-teacher-modal"
                                                className="font-medium text-green-600 hover:underline pr-6"
                                                onClick={() => handleAccept(i)}
                                            >
                                                Duyệt
                                            </button>
                                        )}
                                        <button
                                            type="button"
                                            data-modal-toggle="delete-modal"
                                            className="font-medium text-red-600 hover:underline"
                                            onClick={() => handleDelete(i)}
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <nav aria-label="Page navigation example">
                <ul className="mt-6 flex items-center justify-center -space-x-px">
                    {Array.from(Array(page.total_page), (e, i) => {
                        if (i + 1 === page.page) {
                            return (
                                <li key={i}>
                                    <button
                                        className="px-3 py-2 leading-tight text-gray-500 bg-slate-300 border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                        onClick={clickPagination}
                                    >
                                        {i + 1}
                                    </button>
                                </li>
                            );
                        } else {
                            return (
                                <li key={i}>
                                    <button
                                        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                        onClick={clickPagination}
                                    >
                                        {i + 1}
                                    </button>
                                </li>
                            );
                        }
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Teachers;
