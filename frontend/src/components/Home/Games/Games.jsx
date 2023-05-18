import React from "react";
import valorant from "../../../assets/Valorant.png";
import csgo from "../../../assets/csgo.png";
import fifa from "../../../assets/Fifa.png";
import DialogComp from "../../Staff/Dashboard/DialogComp";
import valorantBanner from "../../../assets/valorantBanner.png";
import cs2Banner from "../../../assets/cs2Banner.png";
import fifaBanner from "../../../assets/fifaBanner.png";

const Games = () => {
    return (
        <div>
            <section>
                <div className="max-w-screen-xl mt-14 mb-32 px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="font-bold text-gray-900 text-3xl">
                            Games
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
                                    className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 shadow-2xl sm:h-[350px]"
                                />
                            </div>
                            <p className="mt-2">
                                <span className="tracking-wider text-gray-900 font-fira">
                                    <DialogComp
                                        name="Valorant"
                                        buttonName="Fire"
                                        title="Valorant"
                                        detail="Valorant is a popular multiplayer first-person shooter (FPS) game developed by Riot Games. It features a tactical and team-oriented gameplay experience, where players engage in fast-paced matches to outwit and outgun their opponents. With a diverse cast of agents, each possessing unique abilities, Valorant emphasizes strategic decision-making and precise aim. The game has gained a significant following, both as a casual pastime and a competitive esports title, thanks to its engaging gameplay mechanics, stunning graphics, and regular content updates."
                                        image={valorantBanner}
                                    />
                                </span>
                            </p>
                        </li>

                        <li>
                            <div className="block overflow-hidden group">
                                <img
                                    src={csgo}
                                    alt=""
                                    className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 shadow-2xl sm:h-[350px]"
                                />
                            </div>
                            <p className="mt-2">
                                <span className="tracking-wider text-gray-900 font-fira">
                                    <DialogComp
                                        name="CS2"
                                        buttonName="Fire"
                                        title="Counter Strike 2"
                                        detail="
                                        Counter-Strike 2 takes FPS gaming to new heights. Dynamic smokes remove one-way advantages, while improved graphics create a visually stunning experience. Players can now customize the server tickrate in real-time, enhancing competitive gameplay. Prepare for intense battles where strategy and skill are paramount. This highly anticipated sequel is set to redefine the genre and captivate gamers with its immersive and fair gameplay mechanics."
                                        image={cs2Banner}
                                    />
                                </span>
                            </p>
                        </li>

                        <li>
                            <div className="block overflow-hidden group">
                                <img
                                    src={fifa}
                                    alt=""
                                    className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 shadow-2xl sm:h-[350px]"
                                />
                            </div>
                            <p className="mt-2">
                                <span className="tracking-wider text-gray-900 font-fira">
                                    <DialogComp
                                        name="FIFA"
                                        buttonName="Fire"
                                        title="FIFA 2023"
                                        detail="FIFA 23, the highly anticipated football video game, delivers an immersive and realistic experience. With enhanced graphics and gameplay mechanics, players can enjoy the thrill of authentic matches. The game features updated player rosters, allowing fans to control their favorite teams and players. FIFA Ultimate Team and Career Mode provide additional depth and longevity to the gameplay. FIFA 23 is a must-have for football enthusiasts, offering hours of entertainment on the virtual pitch."
                                        image={fifaBanner}
                                    />
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
