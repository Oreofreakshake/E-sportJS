import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormNavbar = ({ name, func }) => {
    return (
        <>
            <header aria-label="Site Header" className="bg-white shadow-md">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <a className="block text-teal-600" href="/">
                        <img
                            src="https://mnu.edu.mv/wp-content/uploads/2022/09/MNU-Logo-Horizontal-Filled.png
"
                            alt="logo"
                            className="w-36 mb-1"
                        />
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav
                            aria-label="Site Nav"
                            className="hidden md:block"
                        ></nav>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={func}
                                className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                            >
                                {name}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default FormNavbar;
