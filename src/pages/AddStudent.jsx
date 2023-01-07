import React from 'react';
import { useEffect } from 'react';
import { newStudent } from '../api/student';

const AddStudent = ({ isOpen, onAddStudent, cancelOpen, classID }) => {
  const modalHandler = () => {
    const modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
  };

  useEffect(() => {
    if (isOpen) {
      modalHandler();
    }
  }, [isOpen]);

  const cancelOpenHandler = () => {
    cancelOpen();
    modalHandler();
  };

  const [IDStudent, setIDStudent] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [sex, setSex] = React.useState(true);
  const [date, setDate] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;

    switch (id) {
      case 'IDStudent':
        setIDStudent(value);
        break;

      case 'fullName':
        setFullName(value);
        break;

      case 'male':
        setSex(true);
        break;

      case 'female':
        setSex(false);
        break;

      case 'address':
        setAddress(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'date':
        setDate(value);
        break;

      default:
        break;
    }
  };

  const validate = () => {
    // reset errors
    setErrors({});
    // ID student have 8 digits number
    if (IDStudent === '') {
      setErrors({ ...errors, IDStudent: 'Mã số học sinh không được để trống' });
      return false;
    }
    if (!/^[0-9]{8}$/.test(IDStudent)) {
      setErrors({ ...errors, IDStudent: 'Mã số học sinh phải là 8 chữ số' });
      return false;
    }

    if (fullName === '') {
      setErrors({ ...errors, fullName: 'Họ tên không được để trống' });
      return false;
    }

    if (!/^[a-zA-Z ]+$/.test(fullName)) {
      setErrors({ ...errors, fullName: 'Họ tên không có ký tự đặc biệt' });
      return false;
    }

    if (
      !/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email) &&
      email !== ''
    ) {
      setErrors({ ...errors, email: 'Email không hợp lệ' });
      return false;
    }

    if (date === '') {
      setErrors({ ...errors, date: 'Ngày sinh không được để trống' });
      return false;
    }

    if (!address || address === '') {
      setErrors({ ...errors, address: 'Địa chỉ không được để trống' });
      return false;
    }

    if (email === '') {
      setErrors({ ...errors, email: 'Email không được để trống' });
      return false;
    }
    return true;
  };

  const addStudentHandler = async () => {
    const isValid = validate();
    console.log(isValid);
    if (!isValid) {
      return;
    }
    const student = {
      id: IDStudent,
      fullName,
      sex,
      dob: new Date(date).toJSON(),
      address,
      email,
      class_id: classID,
    };
    const newST = await newStudent(student);
    onAddStudent(student);
    modalHandler();
  };

  return (
    <div>
      <div
        className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center hidden"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-center text-xl">
              Thông tin học sinh
            </h1>
            <label
              htmlFor="IDStudent"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Mã học sinh
            </label>
            <input
              type={'text'}
              name="IDStudent"
              id="IDStudent"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Nhập mã học sinh"
              onChange={handleChange}
              value={IDStudent}
            />
            {errors.IDStudent ? (
              <p className="text-red-500 text-xs italic">{errors.IDStudent}</p>
            ) : null}

            <label
              htmlFor="fullName"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Họ và tên
            </label>
            <input
              type={'text'}
              name="fullName"
              id="fullName"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Nhập họ tên học sinh"
              onChange={handleChange}
              value={fullName}
            />
            {errors.fullName ? (
              <p className="text-red-500 text-xs italic">{errors.fullName}</p>
            ) : null}
            <div>
              <input
                type="radio"
                id="male"
                name="sex"
                value="Male"
                className="mr-3"
                onChange={handleChange}
                checked={sex}
              />
              <label htmlFor="male" className="mr-10">
                Nam
              </label>
              <input
                type="radio"
                id="female"
                name="sex"
                value="Female"
                className="mr-3"
                onChange={handleChange}
                checked={!sex}
              />
              <label htmlFor="female">Nữ</label>
            </div>

            <label
              htmlFor="date"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Ngày tháng năm sinh
            </label>
            <input
              type={'date'}
              id="date"
              className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="MM/DD/YYYY"
              onChange={handleChange}
              value={date}
            />
            {errors.date ? (
              <p className="text-red-500 text-xs italic">{errors.date}</p>
            ) : (
              <p></p>
            )}

            <label
              htmlFor="address"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Địa chỉ
            </label>
            <input
              name="address"
              id="address"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Nhập địa chỉ"
              onChange={handleChange}
              value={address}
            />
            {errors.address ? (
              <p className="text-red-500 text-xs italic">{errors.address}</p>
            ) : null}
            <label
              htmlFor="email"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Email
            </label>
            <input
              name="email"
              id="email"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Nhập email"
              onChange={handleChange}
              value={email}
            />
            {errors.email ? (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            ) : null}
            <div className="flex items-center justify-start w-full">
              <button
                onClick={addStudentHandler}
                className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
              >
                Xác nhận
              </button>
              <button
                className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onClick={() => cancelOpenHandler()}
              >
                Huỷ
              </button>
            </div>
            <div
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
              onClick={() => cancelOpenHandler()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddStudent;
