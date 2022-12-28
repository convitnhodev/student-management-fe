import React from 'react';
import { Link } from 'react-router-dom';
import CardClass from '../components/CardClass';

/**
 * This page shows a list of students' information.
 * It has a search bar to search for students.
 * Also, it allows the user to add a new student.
 * @returns JSX.Element as a page
 */
export default function Home() {
  const [homeroomClass, setHomeRoomClass] = React.useState([]);
  const [teachingClass, setTeachingClass] = React.useState([]);

  const data1 = [
    {
      id: 1,
      name: '10A1',
      numOfStudents: 30,
    },
  ];
  const data = [
    {
      id: 1,
      name: '10A1',
      numOfStudents: 30,
    },
    {
      id: 2,
      name: '10A2',
      numOfStudents: 30,
    },
    {
      id: 3,
      name: '10A2',
      numOfStudents: 30,
    },
    {
      id: 4,
      name: '10A2',
      numOfStudents: 30,
    },
    {
      id: 5,
      name: '10A2',
      numOfStudents: 30,
    },
    {
      id: 6,
      name: '10A2',
      numOfStudents: 30,
    },
  ];
  React.useEffect(() => {
    setHomeRoomClass(data1);
    setTeachingClass(data);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-around w-full flex-1 px-20">
        <h1 className="text-5xl font-bold my-10">Homeroom Class</h1>
        <div className="grid grid-cols-3 gap-4">
          {homeroomClass.map((item) => (
            <CardClass
              key={item.id}
              id={item.id}
              name={item.name}
              numOfStudents={item.numOfStudents}
            />
          ))}
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

        <h1 className="text-5xl font-bold my-10">Teaching Class</h1>
        <div className="grid grid-cols-3 gap-4">
          {teachingClass.map((item) => (
            <CardClass
              key={item.id}
              id={item.id}
              name={item.name}
              numOfStudents={item.numOfStudents}
            />
          ))}
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
