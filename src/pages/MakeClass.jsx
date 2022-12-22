import React from 'react';
import Table from '../components/Table';
import Button from '../components/Button';
import { useEffect } from 'react';
import AddStudent from './AddStudent';

/**
 * This page shows the marks of all students with a specific subject.
 * It also allows the user to update the marks of a student
 * @returns JSX.Element as a page
 */
export default function MakeClass() {
  const [name, setName] = React.useState('');
  const [numOfStudents, setNumOfStudents] = React.useState(0);
  const [students, setStudents] = React.useState([]);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isAdding, setIsAdding] = React.useState(false);

  const data = {
    column_names: ['No.', 'Name', 'Date', 'Gender', 'Address', 'Email'],
    rows: [
      {
        name: 'Nguyen Van A',
        results: ['1/1/2000', 'Male', 'VN', 'abc@email.com'],
      },
      {
        name: 'Nguyen Van B',
        results: ['1/1/2000', 'Male', 'VN', 'abc@email.com'],
      },
      {
        name: 'Nguyen Van C',
        results: ['1/1/2000', 'Male', 'VN', 'abc@email.com'],
      },
      {
        name: 'Nguyen Van D',
        results: ['1/1/2000', 'Male', 'VN', 'abc@email.com'],
      },
    ],
  };

  useEffect(() => {
    setStudents(data.rows);
  }, []);

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

  const handleAddStudentSubmit = (student) => {
    console.log(student);
    const result = [
      student.date,
      student.gender,
      student.address,
      student.email,
    ];
    setStudents([...students, { name: student.name, results: result }]);
    setIsAdding(false);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl min-h-screen py-2">
      <h1 className="text-5xl font-bold my-10">Make a Class</h1>
      <div className="flex flex-nowrap mb-10">
        <div className="mr-10">
          <label htmlFor="name" className="text-base font-bold mr-5">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-1 border-black rounded-md p-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numOfStudents" className="text-base font-bold mr-5">
            Number of Students
          </label>
          <input
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
        data={{ column_names: data.column_names, rows: students }}
        isEditing={isEditing}
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

      <div className="flex">
        <Button
          nameBtn={'Cancel'}
          className={'mr-10 bg-neutral-400 hover:bg-gray-700'}
        />
        <Button nameBtn={'Done'} />
      </div>
      <AddStudent
        isOpen={isAdding}
        onAddStudent={handleAddStudentSubmit}
        cancelOpen={handleCancelAddStudent}
      />
    </div>
  );
}
