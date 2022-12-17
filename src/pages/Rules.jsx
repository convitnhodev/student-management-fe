import React, { useState } from "react";
import Item from "../../components/profile/Item";
import LayoutProfile from "../../components/layout/LayoutProfile";

const Rules = () => {
    return (
        <LayoutProfile>
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-8 gap-x-2 place-items-center sm:flex-col xl:flex-row my-4 px-8 py-8 bg-white items-center justify-center sm:w-full ">
                <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
                <Item Class={"20Ctt3"} Name="Cơ sở trí tuệ nhân tạo" Type={"Lớp học"} />
            </div>
        </LayoutProfile>
    );
};

export default Rules;
