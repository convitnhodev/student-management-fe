import React from 'react';
import {
  Link,
  redirect,
  useLinkClickHandler,
  useNavigate,
} from 'react-router-dom';
import { getStudent } from '../api/student';
import Table from '../components/Table';

/**
 * This page shows the marks of all students with a specific subject.
 * It also allows the user to update the marks of a student
 * @returns JSX.Element as a page
 */
export default function SearchStudent() {
  const navigate = useNavigate();
  const [id, setId] = React.useState('');
  const [data, setData] = React.useState({
    column_names: [
      'STT',
      'Họ tên',
      'Ngày sinh',
      'Giới tính',
      'Địa chỉ',
      'Email',
    ],
    rows: [],
  });

  const onClickStudent = () => {
    navigate(`/dashboard/student/${id}`);
  };

  const onClickSearch = async (e) => {
    e.preventDefault();
    if (id) {
      const dataStudent = await getStudent(id);
      const sex = dataStudent.data.sex ? 'Nam' : 'Nữ';
      const dob = new Date(dataStudent.data.dob);
      const dobString = dob.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      const student = {
        name: dataStudent.data.fullname,
        results: [
          dobString,
          sex,
          dataStudent.data.address,
          dataStudent.data.email,
        ],
      };
      dataStudent
        ? setData({ ...data, rows: [student] })
        : setData({ ...data, rows: [] });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl min-h-screen py-2">
      <h1 className="text-5xl font-bold my-10">Tìm học sinh</h1>
      <div className="w-1/2 mb-10">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Tìm kiếm
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-slate-50 "
            placeholder="Tìm học sinh bằng ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <button
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={onClickSearch}
          >
            Tìm
          </button>
        </div>
      </div>
      {data.rows.length === 0 ? (
        <div className="text-2xl font-bold my-10">Không tìm thấy</div>
      ) : (
        <div className="table-student" onClick={onClickStudent}>
          <Table data={data} />
        </div>
      )}
    </div>
  );
}
