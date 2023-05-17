import React from "react";
import valorant from "../../../assets/Valorant.png";
import csgo from "../../../assets/csgo.png";
import fifa from "../../../assets/Fifa.png";

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
                            the tournament. Participate and show off your
                            skills!
                        </p>
                    </header>

                    <ul className="grid gap-3 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                        <li>
                            <div className="block overflow-hidden group">
                                <img
                                    src={valorant}
                                    alt=""
                                    className="h-[250px] w-full object-cover transition duration-500 shadow-2xl cursor-pointer sm:h-[350px]"
                                />
                            </div>
                            <p className="mt-2">
                                <span className="tracking-wider text-gray-900 font-fira">
                                    {" "}
                                    Valorant{" "}
                                </span>
                            </p>
                        </li>

                        <li>
                            <div className="block overflow-hidden group">
                                <img
                                    src={csgo}
                                    alt=""
                                    className="h-[250px] w-full object-cover transition duration-500 shadow-2xl cursor-pointer sm:h-[350px]"
                                />
                            </div>
                            <p className="mt-2">
                                <span className="tracking-wider text-gray-900 font-fira">
                                    {" "}
                                    CS2{" "}
                                </span>
                            </p>
                        </li>

                        <li>
                            <div className="block overflow-hidden group">
                                <img
                                    src={fifa}
                                    alt=""
                                    className="h-[250px] w-full object-cover transition duration-500 shadow-2xl cursor-pointer sm:h-[350px]"
                                />
                            </div>
                            <p className="mt-2">
                                <span className="tracking-wider text-gray-900 font-fira">
                                    {" "}
                                    FIFA 2023{" "}
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Games;
