import React from "react";
import CancelIconModel from "../../icons/CancelIconModel";
import InfoIcon from "../../icons/InfoIcon";

const DeleteModal = ({ type, name }) => {
    return (
        <div
            id="delete-modal"
            tabindex="-1"
            class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
            <div class="relative w-full h-full max-w-md md:h-auto">
                <div class="relative bg-white rounded-lg shadow">
                    <button
                        type="button"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center-800"
                        data-modal-toggle="delete-modal"
                    >
                        <CancelIconModel />
                        <span class="sr-only">Close modal</span>
                    </button>

                    <div class="p-6 text-center">
                        <InfoIcon />
                        <h3 class="mb-5 text-lg font-normal text-gray-500">
                            Xác nhận xóa <span class="text-blue-700">{type}</span>{" "}
                            <span class="text-red-500">{name}</span> ?
                        </h3>
                        <button
                            data-modal-toggle="popup-modal"
                            type="button"
                            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                        >
                            Xác nhận
                        </button>
                        <button
                            data-modal-toggle="popup-modal"
                            type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10-600-600"
                        >
                            Quay lại
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
