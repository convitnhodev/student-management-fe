import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * This page allows the user to sign up.
 * @returns JSX.Element as a page
 */
export default function SignUp() {
	useEffect(() => {
		const user = localStorage.getItem("username");
		if (user) {
			window.location.href = "/Dashboard";
		}
	});
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [repassword, setRepassword] = useState("");
	const [fullname, setFullname] = useState("");
	const [isMale, setIsMale] = useState(true);
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [birthday, setBirthday] = useState("");

	const handleChange = (e) => {
		const { id, value } = e.target;

		switch (id) {
			case "username":
				setUsername(value);
				break;

			case "password":
				setPassword(value);
				break;

			case "repassword":
				setRepassword(value);
				break;

			case "fullname":
				setFullname(value);
				break;

			case "male":
				setIsMale(true);
				break;

			case "female":
				setIsMale(false);
				break;

			case "address":
				setAddress(value);
				break;

			case "phone":
				setPhone(value);
				break;

			case "email":
				setEmail(value);
				break;

			case "birthday":
				setBirthday(value);
				break;

			default:
				break;
		}
	};
	const [err, setErr] = useState({
		username: "",
		password: "",
		repassword: "",
		email: "",
		phone: "",
	});

	const handlePass = () => {
		if (password.length < 6) {
			setErr({ ...err, password: "Mật khẩu phải có ít nhất 6 ký tự" });
			return true;
		}
		if (password !== repassword) {
			setErr({ ...err, repassword: "Mật khẩu không trùng khớp" });
			return true;
		}
		setErr({ ...err, password: "", repassword: "" });
		return false;
	};
	const handleEmail = () => {
		if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email) && email !== "") {
			setErr({ ...err, email: "Email không hợp lệ" });
			return true;
		}
		setErr({ ...err, email: "" });
		return false;
	};
	const handlePhone = () => {
		if (!/0+[0-9]{9}/.test(phone) && phone !== "") {
			setErr({ ...err, phone: "Số điện thoại không hợp lệ" });
			return true;
		}
		setErr({ ...err, phone: "" });
		return false;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (handleEmail() || handlePass() || handlePhone()) {
			return;
		} else {
			const userData = {
				username,
				password,
				fullname,
				sex: isMale,
				address,
				phone,
				email,
				dob: (new Date(birthday)).toJSON(),
			}

			try {
				const response = await axios.post("http://localhost:8080/user/register", userData);
				console.log(response);
				if (response.data.data) {
					window.location.href = "/SignIn";
				}
			} catch (error) {
				if (error.response.data.key === "User Existed") {
					setErr({ ...err, username: "Tên đăng nhập đã tồn tại" });
				}
			}



		}
	};

	return (
		<section className="h-screen z-10 bg-violet-100 bg-fixed">
			<div className="container px-4 py-10 h-full">
				<div className="flex justify-center items-center flex-wrap g-6 text-gray-800">
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
									name="username"
									id="username"
									onChange={handleChange}
									value={username}
								/>
							</div>
							{err.username && (
								<p className="text-red-500">{err.username}</p>
							)}
							<div className="mb-3">
								<input
									type="password"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Mật khẩu"
									name="password"
									id="password"
									onChange={handleChange}
									onBlur={handlePass}
									value={password}
								/>
								{err.password && (
									<p className="text-red-500">{err.password}</p>
								)}
							</div>
							<div className="mb-3">
								<input
									type="password"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Nhập lại mật khẩu"
									name="repassword"
									id="repassword"
									onChange={handleChange}
									onBlur={handlePass}
									value={repassword}
								/>
								{err.repassword && (
									<p className="text-red-500">{err.repassword}</p>
								)}
							</div>
							<div className="mb-3">
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Họ và tên"
									name="fullname"
									id="fullname"
									onChange={handleChange}
									value={fullname}
								/>
							</div>
							<div className="mb-3">
								<input
									type="radio"
									name="sex"
									value="male"
									id="male"
									className="mr-2"
									onChange={handleChange}
									checked={isMale}
								/>
								<label htmlFor="male" className="mr-5">Nam</label>
								<input
									type="radio"
									name="sex"
									value="female"
									id="female"
									className="mr-2"
									onChange={handleChange}
									checked={!isMale}
								/>
								<label htmlFor="female">Nữ</label>
							</div>
							<div className="mb-3">
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Địa chỉ"
									name="address"
									id="address"
									onChange={handleChange}
									value={address}
								/>
							</div>
							<div className="mb-3">
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Địa chỉ email"
									name="email"
									id="email"
									onChange={handleChange}
									onBlur={handleEmail}
									value={email}
								/>
								{err.email && <p className="text-red-500">{err.email}</p>}
							</div>
							<div className="mb-3">
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Số điện thoại"
									name="phone"
									id="phone"
									onChange={handleChange}
									onBlur={handlePhone}
									value={phone}
								/>
								{err.phone && <p className="text-red-500">{err.phone}</p>}
							</div>
							<div className="mb-3">
								<input
									type="date"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									name="birthday"
									id="birthday"
									onChange={handleChange}
									value={birthday}
								/>
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
