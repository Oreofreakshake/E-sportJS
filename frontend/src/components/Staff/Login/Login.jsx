import React, { useState, useEffect } from "react";
import Footer from "../../Home/Footer/Footer";
import axios from "axios";
import cookie from "js-cookie";

const Login = () => {
    const [incorrect, setIncorrect] = useState(false);

    const [user, SetUser] = useState({
        username: "",
        password: "",
    });

    const loginToDash = () => {
        if (user.username && user.password !== "") {
            axios
                .post("http://localhost:3000/api/login", {
                    username: user.username,
                    password: user.password,
                })
                .then((response) => {
                    cookie.set("accessToken", response.data["accessToken"]);
                    cookie.set("refreshToken", response.data["refreshToken"]);
                    cookie.set("auth", true);
                    window.location.reload(false);
                });
        } else {
            console.log("Input cannot be empty");
            setIncorrect(true);
        }
    };

    const InputChange = (event) => {
        const { name, value } = event.target;
        SetUser((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt="Pattern"
                            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </aside>

                    <main
                        aria-label="Main"
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            {incorrect && (
                                <div className="text-red-500 font-fira transition ease-in duration-150">
                                    Try again!
                                </div>
                            )}
                            <h1 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                                Login to Dashboard
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                                Playing games is a study in itself, where
                                challenges become lessons and victories become
                                rewards.
                            </p>

                            <form
                                action="#"
                                className="mt-8 grid grid-cols-6 gap-6"
                            >
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >
                                        Username
                                    </label>

                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        onChange={InputChange}
                                        value={user.username}
                                        required
                                        className="mt-1 w-full h-9 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="Password"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        onChange={InputChange}
                                        value={user.password}
                                        required
                                        className="mt-1 w-full h-9 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                    />
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        onClick={loginToDash}
                                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Login;
