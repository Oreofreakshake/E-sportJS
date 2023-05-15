import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Games from "./Games/Games";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
import Sponsor from "./Sponsor/Sponsor";

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                <Banner />
                <Games />
                <Sponsor />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default Home;
