import React, { useEffect, useState } from "react";
import axios from "axios";
import cookies from "js-cookie";
import DialogComp from "./DialogComp";

const Table = () => {
    const [data, setData] = useState([]);
    const [acceptedData, setAcceptedData] = useState([]);
    const [rejectedData, setRejectedData] = useState([]);

    const accessToken = cookies.get("accessToken");

    const header = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
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

    const count = data.length;
    const acceptedCount = 0;
    const rejectedCount = 0;

    const [checked, setChecked] = useState(false);
    const [currData, setCurrData] = useState([]);

    const checkClick = (current) => async () => {
        await setCurrData(current);
        await setChecked(!checked);
        await axios.patch(`http://localhost:3000/api/posts/${currData.id}`, {
            name: data.name,
            NID: data.NID,
            DOB: data.DOB,
            number: data.number,
            email: data.email,
            isChecked: checked,
            isReject: data.isReject,
            faculty: data.faculty,
        });
    };

    return (
        <div>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
            <div className="text-center md:text-left mt-12">
                <span className="whitespace-nowrap rounded-full font-medium bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                    {count} submissions
                </span>
                <span className="whitespace-nowrap rounded-full font-medium bg-green-100 ml-2 px-2.5 py-0.5 text-sm text-green-700">
                    {acceptedCount} accepted
                </span>
                <span className="whitespace-nowrap rounded-full font-medium bg-red-100 ml-2 px-2.5 py-0.5 text-sm text-red-700">
                    {rejectedCount} rejected
                </span>
            </div>

            <div className="overflow-x-auto mt-24 mb-24 rounded-lg border border-gray-200">
                <div className="overflow-x-auto text-center">
                    <table className=" divide-y-2 divide-gray-200 bg-white text-sm mb-8">
                        <thead>
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                    ID
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                    Full Name
                                </th>{" "}
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                    National ID
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                    Date of Birth
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                    Email
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                    Contact
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                    Faculty
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                    Payment
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                                    Submission
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y font-medium divide-gray-200 font-fira">
                            {data
                                .slice()
                                .reverse()
                                .map((post) => (
                                    <tr>
                                        <td className="whitespace-nowrap px-7  py-2 text-gray-700">
                                            {post.id}
                                        </td>
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
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            <button
                                                onClick={checkClick(post)}
                                                class={`group relative inline-block overflow-hidden border border-green-600 px-2 py-3 focus:outline-none focus:ring`}
                                            >
                                                <span class="absolute inset-y-0 right-0 w-[2px] bg-green-600 transition-all group-hover:w-full group-green:bg-green-500"></span>

                                                <span class="relative text-sm font-medium text-green-600 transition-colors group-hover:text-white">
                                                    accept
                                                </span>
                                            </button>
                                            <button class="group relative inline-block overflow-hidden border border-red-600 px-2 py-3 focus:outline-none focus:ring">
                                                <span class="absolute inset-y-0 right-0 w-[2px] bg-red-600 transition-all group-hover:w-full group-active:bg-red-500"></span>

                                                <span class="relative text-sm font-medium text-red-600 transition-colors group-hover:text-white">
                                                    reject
                                                </span>
                                            </button>
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
