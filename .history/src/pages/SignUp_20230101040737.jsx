import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * This page allows the user to sign up.
 * @returns JSX.Element as a page
 */
export default function SignUp() {
  useEffect(() => {
    const user = localStorage.getItem("user_name");
    if (user) {
      window.location.href = "/Dashboard";
    }
  });
  const [values, setValues] = useState({});
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const [err, setErr] = useState({
    user_name: "",
    pass_word: "",
    repassword: "",
    gmail: "",
    phone: "",
  });

  const handlePass = () => {
    if (values.pass_word.length < 6) {
      setErrPass("Mật khẩu phải có ít nhất 6 ký tự");
      setErr({
        ...err,
        pass_word: "Mật khẩu phải có ít nhất 6 ký tự",
      });
      return true;
    }
    if (values.pass_word !== values.repassword) {
      setErr({ ...err, repassword: "Mật khẩu không trùng khớp" });
      return true;
    }
    setErr({ ...err, pass_word: "", repassword: "" });
    return false;
  };
  const handleEmail = () => {
    if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(values.gmail)) {
      setErr({ ...err, gmail: "Email không hợp lệ" });
      return true;
    }
    setErr({ ...err, gmail: "" });
    return false;
  };
  const handlePhone = () => {
    if (!/0+[0-9]{9}/.test(values.phone)) {
      setErr({ ...err, phone: "Số điện thoại không hợp lệ" });
      return true;
    }
    setErr({ ...err, phone: "" });
    return false;
  };

  const handleSubmit = async (e) => {
    if (handleEmail() || handlePass() || handlePhone()) {
      e.preventDefault();
    } else {
      let result = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      let data = await result.json();
      if (data.data) {
        window.location.href = "/SignIn";
      }
    }
  };

  return (
    <section className="h-screen z-10 bg-violet-100">
      <div className="container px-4 py-10 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="bg-violet-50 md:w-8/12 lg:w-4/12 lg:ml-20 border border-solid px-16 py-12 rounded">
            <h1 className=" mb-14  text-violet-800 font-bold text-4xl text-center">
              ĐĂNG KÝ
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Tên người dùng"
                  name="user_name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Mật khẩu"
                  name="pass_word"
                  onChange={handleChange}
                  onBlur={handlePass}
                />
                {err.pass_word && (
                  <p className="text-red-500">{err.pass_word}</p>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Nhập lại mật khẩu"
                  name="repassword"
                  onChange={handleChange}
                  onBlur={handlePass}
                />
                {err.repassword && (
                  <p className="text-red-500">{err.repassword}</p>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Địa chỉ email"
                  name="gmail"
                  onChange={handleChange}
                  onBlur={handleEmail}
                />
                {err.gmail && <p className="text-red-500">{err.gmail}</p>}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="số điện thoại"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handlePhone}
                />
                {err.phone && <p className="text-red-500">{err.phone}</p>}
              </div>

              <button
                type="submit"
                className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center
									"
              >
                Đăng ký
              </button>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
            </form>
            <Link
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              to="/signin"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}