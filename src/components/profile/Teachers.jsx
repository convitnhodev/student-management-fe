import React, { useState, useEffect } from "react";

const Teachers = (props) => {
    const [allTeachers, setAllTeachers] = useState([]);
    const [nTeachers, setNTeachers] = useState([]);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        setClasses(props.classes);
    }, [props.classes]);

    useEffect(() => {
        setNTeachers([]);
        if (props.teachers === null) setAllTeachers([]);
        else {
            setAllTeachers(props.teachers);

            let teachers = props.teachers;
            for (let i = 0; i < teachers.length; i++) {
                teachers[i] = {
                    ...teachers[i],
                    isEdit: false,
                };
                setNTeachers((array) => [
                    ...array,
                    {
                        fullname: teachers[i].fullname,
                        class: teachers[i].class,
                        phone: teachers[i].phone,
                        gmail: teachers[i].gmail,
                        address: teachers[i].address,
                        sex: teachers[i].sex,
                        dob: teachers[i].dob,
                    },
                ]);
            }
        }
    }, [props.teachers]);

    const handleEdit = (index) => {
        let setArray = [...allTeachers];
        let item = { ...setArray[index], isEdit: !setArray[index].isEdit };
        setArray[index] = item;
        setAllTeachers(setArray);
    };

    const resetEdit = (index) => {
        let setArray = [...nTeachers];
        let item = {
            fullname: allTeachers[index].fullname,
            class: allTeachers[index].class,
            phone: allTeachers[index].phone,
            gmail: allTeachers[index].gmail,
            address: allTeachers[index].address,
            sex: allTeachers[index].sex,
            dob: allTeachers[index].dob,
        };
        setArray[index] = item;
        setNTeachers(setArray);
    };

    const handleSubmit = async (index) => {
        let setArray = [...allTeachers];
        let item = { ...setArray[index], isEdit: !setArray[index].isEdit };
        setArray[index] = item;
        setAllTeachers(setArray);

        let dataUpdate = {
            ...nTeachers[index],
            username: allTeachers[index].username,
            dob: new Date(nTeachers[index].dob).toJSON(),
        };

        // call API
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataUpdate),
        };
        
        await fetch("http://localhost:8080/user/update", requestOptions);
        resetEdit(index);
        props.setFlat(!props.flat);
    };

    const handleChange = (e, i) => {
        const value = e.target.value;
        let setArray = [...nTeachers];
        let item = { ...setArray[i], [e.target.name]: value };
        setArray[i] = item;
        setNTeachers(setArray);
    };

    // TODOS
    const handleDelete = async (i) => {
        try {
            const requestOptions = {
                method: "DELETE",
            };
            // await fetch(`http://localhost:8080/course/delete?id=${allSubject[i].course_id}`, requestOptions);
            props.setFlat(!props.flat);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAccept = async (i) => {
        try {
            const requestOptions = {
                method: "PATCH",
            };
            await fetch(`http://localhost:8080/user/accept?username=${allTeachers[i].username}`, requestOptions);
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
                            <th className="w-20 py-3 px-3">Username</th>
                            <th className="w-28 py-3 px-3">Họ tên</th>
                            <th className="w-20 py-3 px-3">Ngày sinh</th>
                            <th className="w-16 py-3 px-3 text-center">Giới tính</th>
                            <th className="w-28 py-3 px-3">Địa chỉ</th>
                            <th className="w-32 py-3 px-3">Email</th>
                            <th className="w-20 py-3 px-3">Chức vụ</th>
                            <th className="w-20 py-3 px-3">ĐT</th>
                            <th className="w-20 py-3 px-1 text-center">Chủ nhiệm</th>
                            <th className="py-3 px-3 text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTeachers.map((t, i) => {
                            return (
                                <tr
                                    key={i}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <th className="py-3 px-3">
                                        <p className="w-20 overflow-hidden whitespace-nowrap text-ellipsis">
                                            {t.username}
                                        </p>
                                    </th>
                                    <td className="py-3 px-3 whitespace-nowrap dark:text-white">
                                        {t.isEdit ? (
                                            <input
                                                type="text"
                                                className="w-28 px-2 py-1 border-none bg-purple-100 rounded-sm text-sm font-normal"
                                                name="fullname"
                                                value={nTeachers[i].fullname}
                                                onChange={(e) => handleChange(e, i)}
                                            />
                                        ) : (
                                            <p className="w-28 overflow-hidden whitespace-nowrap text-ellipsis">
                                                {t.fullname}
                                            </p>
                                        )}
                                    </td>
                                    <td className="py-3 px-3">
                                        {t.isEdit ? (
                                            <input
                                                type="date"
                                                className="w-20 px-2 py-1 border-none bg-purple-100 rounded-sm text-sm font-normal"
                                                name="dob"
                                                value={new Date(nTeachers[i].dob).toISOString().substring(0, 10)}
                                                onChange={(e) => handleChange(e, i)}
                                            />
                                        ) : (
                                            <p className="w-20 overflow-hidden whitespace-nowrap text-ellipsis">
                                                {new Date(t.dob).getDate() +
                                                    "/" +
                                                    parseInt(new Date(t.dob).getMonth() + 1) +
                                                    "/" +
                                                    new Date(t.dob).getFullYear()}
                                            </p>
                                        )}
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                        {t.isEdit ? (
                                            <select
                                                className="w-16 px-2 py-1 border-none bg-purple-100 rounded-sm text-sm font-normal"
                                                name="sex"
                                                value={nTeachers[i].sex}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    let setArray = [...nTeachers];
                                                    let item = { ...setArray[i], sex: !!value };
                                                    setArray[i] = item;
                                                    setNTeachers(setArray);
                                                }}
                                            >
                                                <option value={true}>Nam</option>
                                                <option value={false}>Nữ</option>
                                            </select>
                                        ) : (
                                            <p className="w-16 overflow-hidden whitespace-nowrap text-ellipsis">
                                                {t.sex == true ? "Nam" : "Nữ"}
                                            </p>
                                        )}
                                    </td>
                                    <td className="py-3 px-3">
                                        {!t.isEdit ? (
                                            <p className="w-28 overflow-hidden whitespace-nowrap text-ellipsis">
                                                {t.address}
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
                                    <td className="py-3 px-3">
                                        {!t.isEdit ? (
                                            <p className="w-32 overflow-hidden whitespace-nowrap text-ellipsis">
                                                {t.gmail}
                                            </p>
                                        ) : (
                                            <input
                                                type="email"
                                                className="border-none w-32 px-2 py-1 bg-purple-100 rounded-sm text-sm font-normal"
                                                name="gmail"
                                                value={nTeachers[i].gmail}
                                                onChange={(e) => handleChange(e, i)}
                                            />
                                        )}
                                    </td>
                                    <td className="py-3 px-3">
                                        {t.isEdit ? (
                                            <select
                                                className="w-24 px-2 py-1 border-none bg-purple-100 rounded-sm text-sm font-normal"
                                                name="role"
                                                value={nTeachers[i].role}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    let setArray = [...nTeachers];
                                                    let item = { ...setArray[i], role: parseInt(value) };
                                                    setArray[i] = item;
                                                    setNTeachers(setArray);
                                                }}
                                            >
                                                <option value={0}>Giáo viên</option>
                                                <option value={1}>Admin</option>
                                            </select>
                                        ) : (
                                            <p className="w-24 overflow-hidden whitespace-nowrap text-ellipsis">
                                                {(t.role === 0 && "Giáo viên") || (t.role === 1 && "Admin")}
                                            </p>
                                        )}
                                    </td>
                                    <td className="py-3 px-3">
                                        {!t.isEdit ? (
                                            <p className="w-20 overflow-hidden whitespace-nowrap text-ellipsis">
                                                {t.phone}
                                            </p>
                                        ) : (
                                            <input
                                                type="email"
                                                className="border-none w-20 px-2 py-1 bg-purple-100 rounded-sm text-sm font-normal"
                                                name="phone"
                                                value={nTeachers[i].phone}
                                                onChange={(e) => handleChange(e, i)}
                                            />
                                        )}
                                    </td>
                                    <td className="py-3 px-1 text-center">
                                        {t.isEdit ? (
                                            <select
                                                className="w-20 px-2 py-1 border-none bg-purple-100 rounded-sm text-sm font-normal"
                                                name="class"
                                                value={nTeachers[i].class}
                                                onChange={(e) => handleChange(e, i)}
                                            >
                                                <option value={""} selected>
                                                    Không
                                                </option>
                                                {classes.map((c, key) => (
                                                    <option
                                                        key={key}
                                                        value={c.class_id}
                                                        hidden={
                                                            !(c.homeroom_teacher != ""
                                                                ? t.username == c.homeroom_teacher
                                                                    ? true
                                                                    : false
                                                                : true)
                                                        }
                                                    >
                                                        {c.class_id}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <p className="w-20 overflow-hidden whitespace-nowrap text-ellipsis">
                                                {t.class}
                                            </p>
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
        </>
    );
};

export default Teachers;
