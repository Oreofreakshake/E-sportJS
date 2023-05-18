import React from "react";
import sentinels from "../../../assets/sentinels.png";
import dhiraagu from "../../../assets/dhiraagu.png";
import twitch from "../../../assets/twitch.png";

const Sponsor = () => {
    return (
        <div>
            <div class="bg-gray-900">
                <header className="text-center pb-5">
                    <h2 className="font-bold pt-8 text-white text-3xl">
                        Sponsors
                    </h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                        These are the list of our beloved sponsors ❤️
                    </p>
                </header>
                <div class="max-w-7xl pb-9 mb-9 mx-auto grid gap-3 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                    <article className="group">
                        <img
                            alt="Lava"
                            src={sentinels}
                            className="h-56 w-full rounded-xl object-cover shadow-xl transition "
                        />

                        <div className="p-4">
                            <a href="#">
                                <h3 className="text-lg font-medium text-white">
                                    Sentinels
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Sentinels is a highly successful professional
                                Valorant team known for their impressive skills
                                and achievements in competitive play.
                            </p>
                        </div>
                    </article>
                    <article className="group">
                        <img
                            alt="Lava"
                            src={dhiraagu}
                            className="h-56 w-full rounded-xl object-cover shadow-xl "
                        />

                        <div className="p-4">
                            <a href="#">
                                <h3 className="text-lg font-medium text-white">
                                    Dhiraagu
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Dhiraagu, a renowned ISP in the Maldives, offers
                                fast internet connections for gamers
                                participating in tournaments, including this one, ensuring a smooth
                                gaming experience.
                            </p>
                        </div>
                    </article>

                    <article className="group">
                        <img
                            alt="Lava"
                            src={twitch}
                            className="h-56 w-full rounded-xl object-cover shadow-xl "
                        />

                        <div className="p-4">
                            <a href="#">
                                <h3 className="text-lg font-medium text-white">
                                    Twitch
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Twitch is a live streaming platform for gamers
                                and creators to share their content with a
                                global audience.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
