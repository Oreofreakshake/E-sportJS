import React from "react";
import FormNavbar from "../../Form/FormNavbar";
import Footer from "../../Home/Footer/Footer";
import Table from "./Table";

const Dashboard = () => {
    return (
        <>
            <FormNavbar />
            <header aria-label="Page Header">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                Welcome Back!
                            </h1>

                            <p className="mt-1.5 text-sm text-gray-500">
                                Let's review submissions! 🎉
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Table />
                </div>
            </header>
            <Footer />
        </>
    );
};

export default Dashboard;
