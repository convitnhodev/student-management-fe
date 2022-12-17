import React from "react";

const Item = (props) => {
    return (
        <div className="bg-white transition duration-300 ease-in-out transform w-64 px-6 py-3.5 rounded-3xl border border-purple-800 cursor-pointer relative hover:scale-110 shadow-lg">
            <div className="absolute -top-4 right-3 rounded-3xl border border-purple-800 bg-white">
                <div className="px-2 py-0.5 text-center">
                    <p>{props.Type}</p>
                </div>
            </div>

            <div className="h-14 w-60 text-left justify-center items-center">
                <p className="text-lg leading-7 font-semibold">{props.Name}</p>
            </div>

            <div className="h-14 w-54 text leading-7">
                <div className="flex items-center">
                    <p className="ml-2.5 text-sm leading-7 font-normal">{props.Class}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;
