import React, { useEffect, useState } from "react";

const SubjectRegulation = (props) => {
    const [allSubject, setAllSubject] = useState([]);
    const [page, setPage] = useState({});
    const [nSubject, setNSubject] = useState([]);

    useEffect(() => {
        if (props.subjectsObj.data == null) {
            props.setPage(props.page - 1);
        } else if (props.subjectsObj.data != undefined) {
            setPage(props.subjectsObj.paging);
            let subjectObj = props.subjectsObj.data;
            setNSubject([]);
            for (let i = 0; i < subjectObj.length; i++) {
                subjectObj[i] = {
                    ...subjectObj[i],
                    isEdit: false,
                };
                setNSubject((array) => [
                    ...array,
                    {
                        subject_title: subjectObj[i].subject_title,
                    },
                ]);
            }
            setAllSubject(subjectObj);
        }
    }, [props]);

    const clickPagination = (e) => {
        props.setPage(parseInt(e.target.innerHTML));
    };

    const handleEdit = (index) => {
        let setArray = [...allSubject];
        let item = { ...setArray[index], isEdit: !setArray[index].isEdit };
        setArray[index] = item;
        setAllSubject(setArray);
    };

    const handleSubmit = async (index) => {
        let setArray = [...allSubject];
        let item = { ...setArray[index], isEdit: !setArray[index].isEdit };
        setArray[index] = item;
        setAllSubject(setArray);

        console.log(nSubject[index]);
        // call API
        // const requestOptions = {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(nClass[index]),
        // };

        // await fetch("http://localhost:8080/class/")
    };

    const changeSubject = (e, i) => {
        let setArray = [...nSubject];
        let item = { ...setArray[i], subject_title: e.target.value };
        setArray[i] = item;
        setNSubject(setArray);
    };

    const handleDelete = async (i) => {
        try {
            const requestOptions = {
                method: "DELETE",
            };
            await fetch(`http://localhost:8080/course/delete?id=${allSubject[i].course_id}`, requestOptions);
            props.setPage(page.page);
            props.setFlat(!props.flat);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-5 border border-gray-200 border-b-0">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Môn học
                            </th>
                            <th scope="col" className="py-3 px-6 text-center">
                                <button
                                    type="button"
                                    data-modal-toggle="add-subject-modal"
                                    className="uppercase text-green-600 hover:underline"
                                >
                                    Thêm môn học
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSubject.map((s, key) => {
                            return (
                                <tr key={key} className="bg-white border-b hover:bg-gray-50">
                                    <th
                                        scope="row"
                                        className="w-2/5 py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {s.isEdit ? (
                                            <input
                                                type="text"
                                                className="border-none w-full bg-purple-100 rounded-sm text-sm font-normal"
                                                value={nSubject[key].subject_title}
                                                onChange={(e) => changeSubject(e, key)}
                                            />
                                        ) : (
                                            s.subject_title
                                        )}
                                    </th>
                                    <td className="w-1/5 py-4 px-6  text-center">
                                        {s.isEdit ? (
                                            <button
                                                type="button"
                                                data-modal-toggle="edit-class-modal"
                                                className="font-medium text-green-600 hover:underline pr-6"
                                                onClick={() => handleSubmit(key)}
                                            >
                                                Đồng ý
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                data-modal-toggle="edit-subject-modal"
                                                className="font-medium text-blue-600 hover:underline pr-6"
                                                onClick={() => handleEdit(key)}
                                            >
                                                Chỉnh sửa
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

            <div className="flex items-center justify-center mb-4 mt-8">
                <label className="w-fit mr-6">Số lượng môn học tối đa: </label>
                <input
                    type={"number"}
                    className="placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                    placeholder="15"
                />
            </div>
            <div className="flex flex-row w-full items-center justify-center mt-8">
                <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2 "
                >
                    Thay đổi
                </button>

                <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 mb-2 "
                >
                    Xóa hết
                </button>
            </div>
        </div>
    );
};

export default SubjectRegulation;
