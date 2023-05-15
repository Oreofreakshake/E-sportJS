import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
    const [data, setData] = useState([]);
    const [acceptedData, setAcceptedData] = useState([]);
    const [rejectedData, setRejectedData] = useState([]);

    const header = {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODQxNjQ1MjYsImV4cCI6MTY4NDI2NDUyNn0.zHLDJ6Zc9LkgXEz8ZdFD7q0A1XNppK7t8x9_T63FaPw",
        },
    };

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/posts", header)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/accepts", header)
            .then((response) => {
                setAcceptedData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/rejects", header)
            .then((response) => {
                setRejectedData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const count = data.length;
    const acceptedCount = acceptedData.length;
    const rejectedCount = rejectedData.length;

    return (
        <div>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
            <div className="text-center md:text-left">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                    {count} submissions
                </span>
                <span className="whitespace-nowrap rounded-full bg-green-100 ml-2 px-2.5 py-0.5 text-sm text-green-700">
                    {acceptedCount} accepted
                </span>
                <span className="whitespace-nowrap rounded-full bg-red-100 ml-2 px-2.5 py-0.5 text-sm text-red-700">
                    {rejectedCount} rejected
                </span>
            </div>

            <div className="overflow-x-auto mt-24 mb-24 rounded-lg border border-gray-200">
                <div className="text-xl text-center p-2 my-5 font-bold">
                    Submissions
                </div>
                <div className="overflow-hidden">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead>
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Full Name
                                </th>{" "}
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    National ID
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Date of Birth
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Email
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Contact
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Faculty
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Payment
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {data
                                .slice()
                                .reverse()
                                .map((post) => (
                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            {post.name}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            {post.NID}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            {post.DOB}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            {post.email}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            {post.number}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            {post.faculty}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            <a
                                                class="group relative inline-block overflow-hidden border border-indigo-600 px-4 py-3 focus:outline-none focus:ring"
                                                href="/dashboard"
                                            >
                                                <span class="absolute inset-y-0 right-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                                                <span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                                                    Show
                                                </span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
