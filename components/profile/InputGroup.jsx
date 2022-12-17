import React, { useEffect, useState } from "react";

const InputGroup = (props) => {
    const [type, setType] = useState("text");
    const [isEdit, setIsEdit] = useState(true);

    useEffect(() => {
        props.type && setType(props.type);
    }, []);

    const editName = () => {
        setIsEdit(!isEdit);
    };
    
    return (
        <div className="flex items-center mt-8 xl:w-2/3 sm:w-full">
            <label htmlFor={props.name} className="w-40">
                {props.label}
            </label>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                disabled={isEdit}
                placeholder={props.placeholder}
                className={
                    isEdit
                        ? "flex-1 placeholder:italic placeholder:text-slate-400 block bg-purple-100 border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm outline-none"
                        : "flex-1 placeholder:italic placeholder:text-slate-400 block bg-white border border-purple-800 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm outline-none"
                }
            />
            {isEdit ? (
                <button onClick={editName}>
                    <img className="w-7 text-purple-800 ml-4" src="/icons/ic_edit.svg" alt="icon" />
                </button>
            ) : (
                <div>
                    <button onClick={editName}>
                        <img className="w-7 text-purple-800 ml-4" src="/icons/done.svg" alt="icon" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default InputGroup;
