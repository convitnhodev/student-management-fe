import React, { useEffect, useState } from "react";

const ScoreRegulation = (props) => {
    const [data, setData] = useState({});
    const [status, setStatus] = useState(0);

    useEffect(() => {
        setData(props.rules);
    }, [props.rules]);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: parseFloat(e.target.value),
        });
    };

    const handleSubmit = async () => {
        try {
            setStatus(0);
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            };

            await fetch("http://localhost:8080/admin/rules/update", requestOptions);
            if (a.status >= 400) throw new Error("Error");
            else {
                setStatus(1);
                props.setRules({
                    ...props.rules,
                    PassingGrade: data.PassingGrade
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

    return (
        <div className="p-5 border border-gray-200 border-b-0">
            <div className="flex items-center justify-center mb-4">
                <label className="w-fit mr-4">Điểm chuẩn đạt môn: </label>
                <input
                    type={"text"}
                    className="placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none"
                    placeholder="VD: 5"
                    name="PassingGrade"
                    defaultValue={data.PassingGrade}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-row w-full items-center justify-center mt-8">
                <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    onClick={handleSubmit}
                >
                    Thay đổi
                </button>
            </div>

            {status === 1 && <p className="text-green-700 text-center text-lg mt-3"> Thay đổi thành công</p>}
            {status === -1 && <p className="text-red-700 text-center text-lg mt-3"> Thay đổi thất bại</p>}
        </div>
    );
};

export default ScoreRegulation;
