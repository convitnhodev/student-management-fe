import React from 'react';
import SidebarIcon from '../components/SidebarIcon';
import { FaUserGraduate } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getStudent } from '../api/student';

/**
 * The Student page shows a student's information, which includes:
 * - Personal information: name, gender, date of birth, address, email.
 * - Academic information: class, all subjects' marks.
 * @returns JSX.Element as a page
 */
export default function Student() {
  const { id } = useParams();
  const [student, setStudent] = React.useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStudent(id);
      const studentData = {
        ...data.data,
        dob: new Date(data.data.dob).toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
      };
      setStudent(studentData);
    };
    fetchData();
  }, []);

  const marks = [
    {
      id: 1,
      subject: 'Toan',
      mark: 10,
    },
    {
      id: 2,
      subject: 'Ly',
      mark: 10,
    },
    {
      id: 3,
      subject: 'Hoa',
      mark: 10,
    },
    {
      id: 4,
      subject: 'Sinh',
      mark: 10,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex items-center">
        <SidebarIcon icon={<FaUserGraduate size="40" color="black" />} />
        <h1 className="text-5xl font-bold my-10">Hồ sơ học sinh</h1>
      </div>
      {/* contain 2 column, left column have info student as name, address, class, date, id,... right column have sheet score of student in this tern */}
      <div className="flex flex-row w-full px-20 justify-around">
        <div className="flex flex-col">
          <div className="overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">
                Thông tin học sinh
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 pr-10">
                    ID
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {student.id}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 pr-10">
                    Tên đầy đủ
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {student.fullname}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 pr-10">
                    Lớp
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {student.class_id}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 pr-10">
                    Ngày tháng năm sinh
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {student.dob}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 pr-10">
                    Địa chỉ
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {student.address}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 pr-10">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {student.email}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="flex flex-col content-center overflow-hidden shadow  sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">
              Bảng điểm tổng kết
            </h3>
          </div>
          <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-black">
              <thead className="text-xs text-white uppercase bg-slate-700">
                <tr>
                  <th scope="col" className="py-3 px-24">
                    Môn
                  </th>
                  <th scope="col" className="py-3 px-24">
                    Điểm
                  </th>
                </tr>
              </thead>
              <tbody>
                {marks.map((mark) => (
                  <tr
                    key={mark.id}
                    className="border-b border-gray-700 dark:border-gray-700 bg-gray-50"
                  >
                    <td className="py-3 px-24">{mark.subject}</td>
                    <td className="py-3 px-24">{mark.mark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
