import React from "react";

const AgeRegulation = () => {
    return (
        <div className="p-5 border border-gray-200 border-b-0">
            <div className="flex flex-col w-full items-center justify-around">
                <div className="flex items-center justify-between mb-4">
                    <label className="w-28">Tuổi nhỏ nhất: </label>
                    <input
                        type={"number"}
                        className="placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                        placeholder="15"
                    />
                </div>
                <div className="flex items-center justify-between mt-4 ">
                    <label className="w-28">Tuổi lớn nhất: </label>
                    <input
                        type={"number"}
                        className="placeholder:italic placeholder:text-slate-400 block bg-purple-50 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm outline-none border"
                        placeholder="18"
                    />
                </div>
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

export default AgeRegulation;
