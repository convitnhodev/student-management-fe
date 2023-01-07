import React, { useEffect, useState } from "react";

const ClassRegulation = (props) => {
    const [allClass, setAllClass] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [rules, setRules] = useState({});
    const [status, setStatus] = useState(0);
    const [nClass, setNClass] = useState([]);

    useEffect(() => {
        setTeachers(props.teachers);
    }, [props.teachers]);

    useEffect(() => {
        setRules(props.rules);
    }, [props.rules]);

    useEffect(() => {
        if (props.classes === null) setAllClass([]);
        else {
            setAllClass(props.classes);
            let classObj = props.classes;

            for (let i = 0; i < classObj.length; i++) {
                classObj[i] = {
                    ...classObj[i],
                    isEdit: false,
                };
                setNClass((array) => [
                    ...array,
                    {
                        grade: classObj[i].grade,
                        class_id: classObj[i].class_id,
                        homeroom_teacher: classObj[i].homeroom_teacher,
                    },
                ]);
            }
        }
    }, [props.classes]);

    const resetEdit = (index) => {
        let setArray = [...nClass];
        let item = {
            ...setArray[index],
            grade: allClass[index].grade,
            class_id: allClass[index].class_id,
            homeroom_teacher: allClass[index].homeroom_teacher,
        };
        setArray[index] = item;
        setNClass(setArray);
    };

    const handleEdit = (index) => {
        let setArray = [...allClass];
        let item = { ...setArray[index], isEdit: !setArray[index].isEdit };
        setArray[index] = item;
        setAllClass(setArray);
    };

    const handleSubmit = async (index) => {
        resetEdit(index);
        let setArray = [...allClass];
        let item = { ...setArray[index], isEdit: !setArray[index].isEdit };
        setArray[index] = item;
        setAllClass(setArray);

        // call API
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nClass[index]),
        };


        // await fetch("http://localhost:8080/class/")
    };

    const handleChange = (e, i) => {
        let setArray = [...nClass];
        let item = { ...setArray[i], [e.target.name]: e.target.value };
        setArray[i] = item;
        setNClass(setArray);
    };

    const changeMaxStudent = (e) => {
        setRules({
            ...rules,
            MaxStudent: parseInt(e.target.value),
        });
    };

    const handleSubmitRules = async () => {
        try {
            setStatus(0);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(rules),
            };

            let a = await fetch("http://localhost:8080/rules/update", requestOptions);
            if (a.status >= 400) throw new Error("Error");
            else {
                setStatus(1);
                props.setRules({
                    ...props.rules,
                    MaxStudent: rules.MaxStudent,
                });
            }
        } catch (error) {
            setStatus(-1);
        } finally {
            setTimeout(() => {
                setStatus(0);
            }, 2000);
        }
    };

    const handleDelete = async (i) => {
        try {
            const requestOptions = {
                method: "DELETE",
            };
            await fetch(`http://localhost:8080/class/delete?class_id=${allClass[i].class_id}`, requestOptions);
            props.setFlat(!props.flat);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-5 border border-gray-200  border-b-0">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="w-1/6 py-3 px-3 text-center">
                                Khối
                            </th>
                            <th scope="col" className="w-1/6 py-3 px-3 text-center">
                                Lớp học
                            </th>
                            <th scope="col" className="w-12 py-3 px-3 text-center">
                                Sĩ số
                            </th>
                            <th scope="col" className="w-2/6 py-3 px-3 text-center">
                                GVCN
                            </th>
                            <th scope="col" className="w-1/5 py-3 px-3 text-center">
                                <button
                                    type="button"
                                    data-modal-toggle="add-class-modal"
                                    className="uppercase text-green-600 hover:underline"
                                >
                                    Thêm lớp
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allClass.map((c, key) => {
                            return (
                                <tr key={key} className="bg-white border-b hover:bg-gray-50 ">
                                    <td className="w-2 py-4 px-3 text-center">
                                        {c.isEdit ? (
                                            <input
                                                type="text"
                                                className="border-none w-full bg-purple-100 rounded-sm text-sm font-normal"
                                                name={"grade"}
                                                value={nClass[key].grade}
                                                onChange={(e) => handleChange(e, key)}
                                            />
                                        ) : (
                                            c.grade
                                        )}
                                    </td>
                                    <th
                                        scope="row"
                                        className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap text-center "
                                    >
                                        {c.isEdit ? (
                                            <input
                                                type="text"
                                                className="border-none w-full bg-purple-100 rounded-sm text-sm font-normal"
                                                name={"class_id"}
                                                value={nClass[key].class_id}
                                                onChange={(e) => handleChange(e, key)}
                                            />
                                        ) : (
                                            c.class_id
                                        )}
                                    </th>
                                    <td className=" py-4 px-3 text-center">{c.total}</td>
                                    <td className=" py-4 px-3 text-center">
                                        {c.isEdit ? (
                                            <select
                                                className="border-none w-full bg-purple-100 rounded-sm text-sm font-normal"
                                                name="homeroom_teacher"
                                                value={nClass[key].homeroom_teacher}
                                                onChange={(e) => handleChange(e, key)}
                                            >
                                                <option selected hidden>
                                                    -- Chọn giáo viên --
                                                </option>
                                                {teachers.map((t, key) => (
                                                    <option
                                                        key={key}
                                                        value={t.username}
                                                        selected={nClass[key].homeroom_teacher === t.username}
                                                    >
                                                        {t.fullname}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            c.homeroom_teacher
                                        )}
                                    </td>
                                    <td className="py-4 px-3 text-center">
                                        {c.isEdit ? (
                                            <button
                                                type="button"
                                                data-modal-toggle="edit-class-modal"
                                                className=" font-medium text-green-600 hover:underline pr-2"
                                                onClick={() => handleSubmit(key)}
                                            >
                                                Đồng ý
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                data-modal-toggle="edit-class-modal"
                                                className="font-medium text-blue-600 hover:underline pr-3"
                                                onClick={() => handleEdit(key)}
                                            >
                                                Sửa
                                            </button>
                                        )}
                                        <button
                                            type="button"
                                            data-modal-toggle="delete-modal"
                                            className="font-medium text-red-600 hover:underline"
                                            onClick={() => handleDelete(key)}
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

            <div className="flex items-center justify-center mb-4 mt-8">
                <label className="w-28">Sĩ số tối đa: </label>
                <input
                    type={"number"}
                    className="placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                    placeholder="15"
                    name="MaxStudent"
                    defaultValue={rules.MaxStudent}
                    onChange={changeMaxStudent}
                />
            </div>
            <div className="flex flex-row w-full items-center justify-center mt-8">
                <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    onClick={handleSubmitRules}
                >
                    Thay đổi
                </button>
            </div>
            {status === 1 && <p className="text-green-700 text-center text-lg mt-3"> Thay đổi thành công</p>}
            {status === -1 && <p className="text-red-700 text-center text-lg mt-3"> Thay đổi thất bại</p>}
        </div>
    );
};

export default ClassRegulation;
