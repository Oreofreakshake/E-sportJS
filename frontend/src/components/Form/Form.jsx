import React from "react";
import FormNavbar from "./FormNavbar";
import Footer from "../Home/Footer/Footer";

const Form = () => {
    return (
        <div>
            {/*
    Heads up! 👋
  
    Plugins:
      - @tailwindcss/forms
  */}
            <FormNavbar />

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
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
