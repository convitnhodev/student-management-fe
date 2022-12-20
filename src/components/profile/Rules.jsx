import React from "react";
import Arrow from "../icons/arrow";
import AgeRegulation from "./regulations/AgeRegulation";
import ClassRegulation from "./regulations/ClassRegulation";
import SubjectRegulation from "./regulations/SubjectRegulation";
import ScoreRegulation from "./regulations/ScoreRegulation";

const Rules = () => {
    return (
        <div className="mx-auto bg-white mt-8 rounded">
            <div id="accordion-collapse" data-accordion="collapse">

                {/* Regulation 1: Change Min/Max Age  */}
                <h2 id="accordion-collapse-heading-1">
                    <button
                        type="button"
                        class="flex items-center justify-between p-5 w-full font-medium text-left border border-purple-300 border-b-0 text-gray-900 bg-gray-100 hover:bg-purple-100 rounded-t-xl"
                        data-accordion-target="#accordion-collapse-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-body-1"
                    >
                        <span>Quy định về tuổi</span>
                        <Arrow />
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                    <AgeRegulation />
                </div>

                {/* Regulation 2: Change max class size && Class name-size */}
                <h2 id="accordion-collapse-heading-2">
                    <button
                        type="button"
                        class="flex items-center justify-between p-5 w-full font-medium text-left border border-purple-300 border-b-0 text-gray-900 bg-gray-100 hover:bg-purple-100 rounded-t-xl"
                        data-accordion-target="#accordion-collapse-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-2"
                    >
                        <span>Quy định về lớp học</span>
                        <Arrow />
                    </button>
                </h2>
                <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                    <ClassRegulation />
                </div>

                {/* Regulation 4: Change max the number of subjects && Subject name */}
                <h2 id="accordion-collapse-heading-3">
                    <button
                        type="button"
                        class="flex items-center justify-between p-5 w-full font-medium text-left border border-purple-300 border-b-0 text-gray-900 bg-gray-100 hover:bg-purple-100 rounded-t-xl"
                        data-accordion-target="#accordion-collapse-body-3"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-3"
                    >
                        <span>Quy định về môn học</span>
                        <Arrow />
                    </button>
                </h2>
                <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                    <SubjectRegulation />
                </div>

                {/* Regulation 5: Change passing standard score */}
                <h2 id="accordion-collapse-heading-4">
                    <button
                        type="button"
                        class="flex items-center justify-between p-5 w-full font-medium text-left border border-purple-300 border-b-0 text-gray-900 bg-gray-100 hover:bg-purple-100 rounded-t-xl"
                        data-accordion-target="#accordion-collapse-body-4"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-4"
                    >
                        <span>Quy định về điểm chuẩn đạt môn</span>
                        <Arrow />
                    </button>
                </h2>
                <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
                    <ScoreRegulation />
                </div>
            </div>
        </div>
    );
};

export default Rules;
