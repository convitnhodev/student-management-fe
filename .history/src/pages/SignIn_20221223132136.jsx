import React from "react";
import { Link } from "react-router-dom";

/**
 * This page allows the user to sign in.
 * @returns JSX.Element as a page
 */
export default function SignIn() {
	return (
		<section className="h-screen">
			<div className="container px-4 py-10 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<div className="md:w-8/12 lg:w-4/12 lg:ml-20 border border-solid px-16 py-12 rounded bg-gray-100">
						<h1 className=" mb-14  text-gray-800 font-bold text-4xl text-center">
							LOGIN
						</h1>
						<from action="/login" method="POST">
							<div className="mb-6">
								<input
									type="text"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Email address"
								/>
							</div>

							<div className="mb-6">
								<input
									type="password"
									className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Password"
								/>
							</div>

							<div className="flex justify-between items-center mb-6">
								<div className="form-group form-check">
									<input
										type="checkbox"
										className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
										id="check"
									/>
									<label
										className="form-check-label inline-block text-gray-800"
										for="check"
									>
										Remember me
									</label>
								</div>
								<a
									href="#!"
									class="text-blue-600 hover:text-blue-800 focus:text-blue-700 active:text-blue-900 duration-200 transition ease-in-out"
								>
									Forgot password?
								</a>
							</div>

							<Link to="/dashboard">
								<button
									type="submit"
									className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center
                "
									data-mdb-ripple="true"
									data-mdb-ripple-color="light"
								>
									Sign In
								</button>
							</Link>
						</from>
						<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
							<p className="text-center font-semibold mx-4 mb-0">OR</p>
						</div>
						<Link
							className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center"
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
							to="/signup"
						>
							sign up
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
