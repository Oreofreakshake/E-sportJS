import React from "react";

const Banner = () => {
    return (
        <>
            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mt-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                            The Maldives National University.
                            <span className="sm:block">
                                {" "}
                                E-sports Tournament.{" "}
                            </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-lg/relaxed font-fira">
                            Let's show off your skills as a competitive gamer.
                        </p>
                        <div class="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                href="/registration"
                            >
                                Try it out
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
