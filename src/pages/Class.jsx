import React from 'react';
import Table from '../components/Table';
import Button from '../components/Button';
import { useEffect } from 'react';
import AddStudent from './AddStudent';
import { Link, useParams } from 'react-router-dom';
import { getListStudentInClass, getClass } from '../api/class';
import { newStudent } from '../api/student';
/**
 * This page shows the marks of all students with a specific subject.
 * It also allows the user to update the marks of a student
 * @returns JSX.Element as a page
 */
export default function Class() {
  const column_names = [
    'STT',
    'Họ và tên',
    'Ngày sinh',
    'Giới tính',
    'Địa chỉ',
    'Email',
  ];

  const { id } = useParams();
  const [className, setClassName] = React.useState('');
  const [numOfStudents, setNumOfStudents] = React.useState(0);
  const [students, setStudents] = React.useState([]);
  const [isAdding, setIsAdding] = React.useState(false);
  const shouldRender = React.useRef(true);

  useEffect(() => {
    const getDataClass = async () => {
      if (id !== undefined) {
        const dataClass = await getClass(id);
        setClassName(dataClass.data.class_id);
        setNumOfStudents(dataClass.data.total);

        const dataStudent = await getListStudentInClass(id);
        let dataStudentTemp = [];
        console.log(dataStudent.data);
        dataStudent.data.forEach((item, index) => {
          const sex = item.sex ? 'Nam' : 'Nữ';
          const dob = new Date(item.dob);
          const dobString = dob.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          });
          dataStudentTemp.push({
            name: item.fullname,
            results: [dobString, sex, item.address, item.email],
          });
        });
        console.log(dataStudentTemp);
        setStudents(dataStudentTemp);
      }
    };
    if (shouldRender.current) {
      shouldRender.current = false;
      getDataClass();
    }
  }, []);

  // useEffect(() => {
  //   if (id !== undefined) {
  //     setClassName('10A1');
  //     setNumOfStudents(30);
  //     setStudents(data.rows);
  //   }
  // }, []);

  const handleAddStudent = () => {
    const modal = document.getElementById('modal');
    if (modal.classList.contains('hidden') && isAdding) {
      setIsAdding(false);
      return;
    }
    setIsAdding(true);
  };

  const handleCancelAddStudent = () => {
    setIsAdding(false);
  };

  const handleAddStudentSubmit = async (student) => {
    const newST = await newStudent(student);
    setIsAdding(false);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl min-h-screen py-2">
      <h1 className="text-5xl font-bold my-10">
        {id ? `Danh sách lớp ${className}` : `Make a Class`}
      </h1>
      <div className="flex justify-center flex-nowrap mb-10">
        <div className="mr-10">
          <label htmlFor="className" className="text-base font-bold mr-5">
            Lớp
          </label>
          <input
            disabled={id ? true : false}
            type="text"
            id="className"
            name="className"
            className="border-1 border-black rounded-md p-1"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numOfStudents" className="text-base font-bold mr-5">
            Sĩ số
          </label>
          <input
            disabled={id ? true : false}
            type="number"
            id="numOfStudents"
            name="numOfStudents"
            className="border-1 border-black rounded-md p-1"
            value={numOfStudents}
            onChange={(e) => setNumOfStudents(e.target.value)}
          />
        </div>
      </div>
      <Table
        isEditing={false}
        data={{ column_names: column_names, rows: students }}
      />

      <button className="mt-10" onClick={handleAddStudent}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-blue-500 hover:text-blue-700 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <AddStudent
        isOpen={isAdding}
        onAddStudent={handleAddStudentSubmit}
        cancelOpen={handleCancelAddStudent}
        classID={id}
      />
    </div>
  );
}
