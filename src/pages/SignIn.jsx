import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import CryptoJS from "crypto-js";
import { useCookies } from "react-cookie";

/**
 * This page allows the user to sign in.
 * @returns JSX.Element as a page
 */
export default function SignIn() {
	const [values, setValues] = useState({
		remember: false,
	});
	const [cookies, setCookie] = useCookies(["user"]);
	const [isLogin, setIsLogin] = useState(false);
	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]:
				e.target.type === "checkbox" ? e.target.checked : e.target.value,
		});
	};
	useEffect(() => {
		if (cookies.user) window.location.href = "/Dashboard";
	}, [isLogin]);
	const [err, setErr] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!values.username || !values.password) {
			setErr("Vui lòng điền đầy đủ thông tin");
			return;
		}
		try {
			values.password = CryptoJS.MD5(values.password).toString();
			const result = await axios.post(
				"http://localhost:8080/user/login",
				values
			);
			const { data } = result;
			if (data.data) {
				let a = jwtDecode(data.data.account.token);
				setCookie("user", a, { path: "/" });
				setIsLogin(true);
			}
		} catch (error) {
			setErr(
				error.response.data.log == "info is invalid"
					? "Sai mật khẩu"
					: "Tài khoản không tồn tại"
			);
		}
	};
	return (
		<section className="h-screen bg-violet-100">
			<div className="container px-4 py-10 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<div className="md:w-8/12 lg:w-4/12 lg:ml-20 border border-solid px-16 py-12 rounded bg-violet-50">
						<h1 className=" mb-14  text-violet-800 font-bold text-4xl text-center">
							ĐĂNG NHẬP
						</h1>
						<form onSubmit={handleSubmit}>
							<div className="mb-6">
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Tên người dùng"
									name="username"
									onChange={handleChange}
								/>
							</div>

							<div className="mb-6">
								<input
									type="password"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Mật khẩu"
									name="password"
									onChange={handleChange}
								/>
								{err && (
									<div className="text-red-500 text-sm font-semibold">
										{err}
									</div>
								)}
							</div>
							<div className="flex justify-between items-center mb-6">
								<div className="form-group form-check">
									<input
										type="checkbox"
										className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										id="check"
										name="remember"
										onChange={handleChange}
									/>
									<label
										className="form-check-label inline-block text-gray-800"
										htmlFor="check"
									>
										Lưu thông tin
									</label>
								</div>
								<a
									href="#!"
									className="text-blue-600 hover:text-blue-800 focus:text-blue-700 active:text-blue-900 duration-200 transition ease-in-out"
								>
									Quên mật khẩu?
								</a>
							</div>

							<button className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center">
								Đăng nhập
							</button>
						</form>
						<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
							<p className="text-center font-semibold mx-4 mb-0">HOẶC</p>
						</div>
						<Link
							className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center"
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
							to="/signup"
						>
							Đăng ký
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
