import React, { useEffect, useState } from "react";

const ProfileClass = (props) => {
    const [user, setUser] = useState({
        teaching_classes: [],
    });

    useEffect(() => {
        if (props.users != null) setUser(props.user);
    }, [props]);

    // useEffect(() => {
    //     if (props.user.teaching_classes == null) setClasses([]);
    //     else setClasses(props.user.teaching_classes);
    // }, [props.user]);

    return (
        <div className="flex flex-col ml-8">
            {user.teaching_classes.map((c) => (
                <a href="#" className="mt-4 hover:text-purple-600 font-bold">
                    {c}
                </a>
            ))}
        </div>
    );
};

export default ProfileClass;
