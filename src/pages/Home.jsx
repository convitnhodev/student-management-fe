import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardClass from '../components/CardClass';
import { getUser } from '../api/user';
import { getClass } from '../api/class';

/**
 * This page shows a list of students' information.
 * It has a search bar to search for students.
 * Also, it allows the user to add a new student.
 * @returns JSX.Element as a page
 */
export default function Home() {
  const [homeroomClass, setHomeRoomClass] = React.useState({});
  const [teachingClass, setTeachingClass] = React.useState([]);
  const shouldRender = React.useRef(true);

  useEffect(() => {
    const getInfoSubClass = async (classID) => {
      const data = await getClass(classID);
      const subClass = data.data;
      return subClass;
    };
    const getDataUser = async () => {
      const data = await getUser();
      const userInfo = data.data;
      const dataClass =
        userInfo.class !== '' ? await getClass(userInfo.class) : null;
      const mainClass = dataClass !== null ? dataClass.data : null;
      setHomeRoomClass(mainClass);

      if (userInfo.teaching_classes !== null) {
        console.log(userInfo.teaching_classes);
        userInfo.teaching_classes.forEach(async (classID) => {
          const subClass = await getInfoSubClass(classID);
          setTeachingClass((teachingClass) => [...teachingClass, subClass]);
        });
      }
      //   setTeachingClass(data.teachingClass);
    };
    if (shouldRender.current) {
      shouldRender.current = false;
      getDataUser();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-around w-full flex-1 px-20">
        <h1 className="text-5xl font-bold my-10">Lớp đang chủ nhiệm</h1>
        <div className="grid grid-cols-3 gap-4">
          {homeroomClass !== null ? (
            <CardClass
              id={homeroomClass.class_id}
              name={homeroomClass.class_id}
              numOfStudents={homeroomClass.total}
            />
          ) : (
            <div></div>
          )}
          {/* one col add class */}
          {/* <div className="group flex flex-col justify-between rounded-sm bg-white p-8 shadow-xl transition-shadow hover:shadow-lg">
            <Link
              to={'class/add'}
              className="group flex flex-col justify-between rounded-sm bg-slate-100 border-dashed border-2 border-sky-500 p-8"
            >
              <h1 className="text-center text-5xl font-bold text-indigo-600">
                +
              </h1>
              <div className="mt-4 border-t-2 border-indigo-200 pt-2">
                <p className="text-center text-xl font-medium uppercase tracking-widest text-gray-500">
                  Add Class
                </p>
              </div>
            </Link>
          </div> */}
        </div>

        <h1 className="text-5xl font-bold my-10">Lớp đang dạy</h1>
        <div className="grid grid-cols-3 gap-4">
          {teachingClass.length > 0 ? (
            teachingClass.map((item) => (
              <CardClass
                key={item.class_id}
                id={item.class_id}
                name={item.class_id}
                numOfStudents={item.total}
              />
            ))
          ) : (
            <div></div>
          )}

          {/* <div className="group flex flex-col justify-between rounded-sm bg-white p-8 shadow-xl transition-shadow hover:shadow-lg">
            <Link
              to={'class/add'}
              className="group flex flex-col justify-between rounded-sm bg-slate-100 border-dashed border-2 border-sky-500 p-8"
            >
              <h1 className="text-center text-5xl font-bold text-indigo-600">
                +
              </h1>
              <div className="mt-4 border-t-2 border-indigo-200 pt-2">
                <p className="text-center text-xl font-medium uppercase tracking-widest text-gray-500">
                  Add Class
                </p>
              </div>
            </Link>
          </div> */}
        </div>
      </main>
    </div>
  );
}
