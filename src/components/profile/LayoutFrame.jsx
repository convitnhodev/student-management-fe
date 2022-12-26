import React from "react";

const LayoutFrame = ({ children, title }) => {
    return (
        <div className="flex-1 h-fit px-8 py-6 border-solid border border-purple-700 rounded-md mx-4 mb-4">
            <h2 className="text-purple-700 font-bold text-2xl mb-8">{title}</h2>
            {children}
        </div>
    );
};

export default LayoutFrame;
