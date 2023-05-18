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
                                    className="h-[250px] w-full object-cover transition duration-500 shadow-2xl cursor-pointer sm:h-[350px]"
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
                                    className="h-[250px] w-full object-cover transition duration-500 shadow-2xl cursor-pointer sm:h-[350px]"
                                />
                            </div>
                            <p className="mt-2">
                                <span className="tracking-wider text-gray-900 font-fira">
                                    <DialogComp
                                        name="CS2"
                                        buttonName="Fire"
                                        title="Counter Strike 2"
                                        detail="Counter-Strike 2 has arrived, bringing with it a thrilling new FPS experience. The game boasts impressive graphics, immersing players in realistic and detailed environments. With improved visuals, from maps to weapon models, Counter-Strike 2 offers a heightened sense of realism. Dynamic smokes add an exciting twist, eliminating one-way sightlines and promoting fair play. Gone are the frustrations of unfair advantages; now, players can engage in intense combat on an even playing field. Additionally, Counter-Strike 2 introduces a customizable server tickrate, allowing users to adjust the server performance in real-time. This empowers players to fine-tune their online experience and create the optimal environment for competitive matches. With Counter-Strike 2, the iconic franchise raises the bar once again, delivering a game that balances visual excellence, tactical gameplay, and player-driven customization."
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
                                    className="h-[250px] w-full object-cover transition duration-500 shadow-2xl cursor-pointer sm:h-[350px]"
                                />
                            </div>
                            <p className="mt-2">
                                <span className="tracking-wider text-gray-900 font-fira">
                                    <DialogComp
                                        name="FIFA"
                                        buttonName="Fire"
                                        title="FIFA 2023"
                                        detail="FIFA 23, developed by EA Sports, keeps the tradition alive by delivering another year of immersive football gameplay. Building upon the success of FIFA 22, the game retains the same engaging features that fans have come to enjoy. From realistic player movements to authentic team strategies, FIFA 23 captures the essence of the beautiful game. While there may not be groundbreaking innovations, the game offers updated player rosters, enhanced graphics, and refined mechanics. Players can still experience thrilling matches, compete in online leagues, and participate in various game modes, including Ultimate Team and Career Mode. With FIFA 23, fans can expect a familiar yet polished football experience that continues to showcase the passion and excitement of the sport on their gaming screens."
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
