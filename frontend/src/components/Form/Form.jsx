import React, { useState } from "react";
import FormNavbar from "./FormNavbar";
import Footer from "../Home/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
    const [message, setMessage] = useState(true);

    const navigate = useNavigate();
    const [post, SetPost] = useState({
        name: "",
        NID: "",
        DOB: "",
        number: "",
        email: "",
        faculty: "",
    });

    const numberValue = parseInt(post.number, 10);
    const postData = { ...post, number: numberValue };

    const buttonClick = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:3000/api/posts", postData)
            .then((response) => {
                setMessage(false);
                SetPost({
                    name: "",
                    NID: "",
                    DOB: "",
                    number: "",
                    email: "",
                    faculty: "",
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const InputChange = (event) => {
        const { name, value } = event.target;
        SetPost((prevState) => ({ ...prevState, [name]: value }));
    };

    const Dismiss = () => {
        setMessage(true);
    };

    return (
        <div>
            {/* form submission */}
            <FormNavbar
                name={"Home"}
                func={() => {
                    navigate("/");
                }}
            />
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <div className="text-left">
                        <div
                            role="alert"
                            className={`${
                                message
                                    ? "-translate-y-96 transition ease-in-out duration-300 rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
                                    : "-translate-y-3 transition ease-in-out duration-300 rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
                            } `}
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-green-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>

                                <div className="flex-1">
                                    <strong className="block font-medium text-gray-900">
                                        {" "}
                                        Submitted
                                    </strong>

                                    <p className="mt-1 text-sm text-gray-700">
                                        Your submission has been sent for
                                        review.
                                    </p>
                                </div>

                                <button
                                    onClick={Dismiss}
                                    className="text-gray-500 transition hover:text-gray-600"
                                >
                                    <span className="sr-only">
                                        Dismiss popup
                                    </span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold sm:text-3xl">
                        Lets play and win!
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Fill and submit the following form before 26th August to
                        dominate the gaming stage.
                    </p>
                </div>

                <form
                    action=""
                    className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                >
                    <div>
                        <div className="relative">
                            <label
                                htmlFor="UserName"
                                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    onChange={InputChange}
                                    value={post.name}
                                    id="UserName"
                                    placeholder="Full Name"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    required
                                />

                                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                    Full Name
                                </span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <label
                                htmlFor="UserMail"
                                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="email"
                                    name="email"
                                    onChange={InputChange}
                                    value={post.email}
                                    id="UserMail"
                                    placeholder="Email"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    required
                                />

                                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                    Email
                                </span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <label
                                htmlFor="UserNID"
                                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    name="NID"
                                    onChange={InputChange}
                                    value={post.NID}
                                    id="UserNID"
                                    placeholder="National ID card"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    required
                                />

                                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                    National ID card
                                </span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <label
                                htmlFor="UserDOB"
                                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="date"
                                    name="DOB"
                                    onChange={InputChange}
                                    value={post.DOB}
                                    id="UserDOB"
                                    placeholder="Date Of Birth"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    required
                                />

                                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                    Date of birth
                                </span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <label
                                htmlFor="UserContact"
                                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="number"
                                    name="number"
                                    onChange={InputChange}
                                    value={post.number}
                                    id="UserContact"
                                    placeholder="National ID card"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    required
                                />

                                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                    Phone Number
                                </span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <label
                                htmlFor="UserFaculty"
                                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    name="faculty"
                                    onChange={InputChange}
                                    value={post.faculty}
                                    id="UserFaculty"
                                    placeholder="Faculty"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    required
                                />

                                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                    Faculty
                                </span>
                            </label>
                        </div>
                    </div>
                    {/* <div>
                        <div className="relative">
                            <label
                                htmlFor="UserNID"
                                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="text"
                                    id="UserNID"
                                    placeholder="National ID card"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                />

                                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                    National ID card
                                </span>
                            </label>
                        </div>
                    </div> */}

                    <div className="flex items-center justify-between">
                        <button
                            onClick={buttonClick}
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Form;
