import React from "react";

const Games = () => {
    return (
        <div>
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Games Played
                        </h2>

                        <p className="max-w-md mx-auto mt-4 text-gray-500">
                            These are the list of games that will be played in
                            the tournament, come, participate and show off your
                            skills.
                        </p>
                    </header>

                    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                        <li>
                            <a href="#" className="block overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    alt=""
                                    className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
                                />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="block overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    alt=""
                                    className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
                                />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="block overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    alt=""
                                    className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
                                />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="block overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    alt=""
                                    className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Games;
